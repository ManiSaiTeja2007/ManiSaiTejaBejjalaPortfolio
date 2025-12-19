// src/services/githubService.ts (Simplified to fix errors)
import { GITHUB_CONFIG } from '@/utils/constants';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  size: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  fork: boolean;
  homepage: string | null;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
  } | null;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export interface LanguageStats {
  [language: string]: {
    count: number;
    percentage: number;
    color?: string;
  };
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
}

export interface GitHubStats {
  user: GitHubUser;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  languages: LanguageStats;
  contributions: ContributionDay[];
  featuredRepos: GitHubRepo[];
  lastUpdated: string;
}

class GitHubService {
  private username: string;
  private cache: Map<string, { data: unknown; timestamp: number }> = new Map();
  private CACHE_DURATION = 1000 * 60 * 15;

  constructor() {
    this.username = GITHUB_CONFIG.username;
  }

  private async fetchWithCache<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
    const cached = this.cache.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < this.CACHE_DURATION) {
      return cached.data as T;
    }

    try {
      const data = await fetchFn();
      this.cache.set(key, { data, timestamp: now });
      return data;
    } catch (error) {
      console.warn(`Fetch failed for ${key}, using stale cache:`, error);
      if (cached) return cached.data as T;
      throw error;
    }
  }

  clearCache(): void {
    this.cache.clear();
  }

  async getUser(): Promise<GitHubUser> {
    return this.fetchWithCache('user', async () => {
      const response = await fetch(`https://api.github.com/users/${this.username}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status}`);
      }
      return response.json();
    });
  }

  async getRepos(): Promise<GitHubRepo[]> {
    return this.fetchWithCache('repos', async () => {
      const response = await fetch(
        `https://api.github.com/users/${this.username}/repos?per_page=100&sort=updated`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch repos: ${response.status}`);
      }

      return response.json();
    });
  }

  async getStats(): Promise<GitHubStats> {
    const [user, repos] = await Promise.all([
      this.getUser(),
      this.getRepos(),
    ]);

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    return {
      user,
      totalRepos: repos.length,
      totalStars,
      totalForks,
      languages: {},
      contributions: [],
      featuredRepos: repos.slice(0, 6),
      lastUpdated: new Date().toISOString(),
    };
  }

  // src/services/githubService.ts - Add this method
  async getRepoDetails(repoName: string): Promise<{
    repo: GitHubRepo | null;
    topics: string[];
    readme: string | null;
  }> {
    return this.fetchWithCache(`repo-${repoName}`, async () => {
      try {
        // Fetch repo details
        const repoResponse = await fetch(
          `https://api.github.com/repos/${this.username}/${repoName}`
        );

        if (!repoResponse.ok) {
          return { repo: null, topics: [], readme: null };
        }

        const repo = await repoResponse.json() as GitHubRepo;

        // Fetch topics
        let topics: string[] = [];
        try {
          const topicsResponse = await fetch(
            `https://api.github.com/repos/${this.username}/${repoName}/topics`,
            {
              headers: {
                'Accept': 'application/vnd.github.mercy-preview+json',
              },
            }
          );

          if (topicsResponse.ok) {
            const topicsData = await topicsResponse.json() as { names: string[] };
            topics = topicsData.names || [];
          }
        } catch (error) {
          console.warn(`Failed to fetch topics for ${repoName}:`, error);
        }

        // Fetch README
        let readme: string | null = null;
        try {
          const readmeResponse = await fetch(
            `https://api.github.com/repos/${this.username}/${repoName}/readme`
          );

          if (readmeResponse.ok) {
            const readmeData = await readmeResponse.json() as { content: string };
            readme = atob(readmeData.content);
          }
        } catch (error) {
          console.warn(`Failed to fetch README for ${repoName}:`, error);
        }

        return { repo, topics, readme };
      } catch (error) {
        console.error(`Failed to fetch repo details for ${repoName}:`, error);
        return { repo: null, topics: [], readme: null };
      }
    });
  }
}

export const githubService = new GitHubService();
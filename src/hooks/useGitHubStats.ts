import { useState, useEffect } from 'react';
import { githubService } from '@/services/githubService';
import type { GitHubStats, GitHubRepo, LanguageStats } from '@/services/githubService';

export const useGitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await githubService.getStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch GitHub stats:', err);
        setError('Unable to fetch GitHub data. Please check your internet connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const refresh = async () => {
    githubService.clearCache();
    setLoading(true);
    setError(null);
    
    try {
      const data = await githubService.getStats();
      setStats(data);
    } catch (err) {
      console.error('Failed to refresh GitHub stats:', err);
      setError('Refresh failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    stats,
    loading,
    error,
    refresh,
  };
};

export const useGitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await githubService.getRepos();
        setRepos(data);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
        setError('Unable to fetch repositories.');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const featuredRepos = repos
    .filter(repo => !repo.fork && repo.stargazers_count > 0)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  const getReposByLanguage = (language: string) => {
    return repos.filter(repo => repo.language === language);
  };

  return {
    repos,
    featuredRepos,
    loading,
    error,
    getReposByLanguage,
  };
};

export const useGitHubRepo = (repoName: string) => {
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [topics, setTopics] = useState<string[]>([]);
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setLoading(true);
        const data = await githubService.getRepoDetails(repoName);
        setRepo(data.repo);
        setTopics(data.topics);
        setReadme(data.readme);
      } catch (err) {
        console.error(`Failed to fetch repo ${repoName}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, [repoName]);

  return {
    repo,
    topics,
    readme,
    loading,
  };
};

// Helper function to get top languages from stats
export const getTopLanguages = (languageStats: LanguageStats) => {
  return Object.entries(languageStats)
    .sort(([, a], [, b]) => b.percentage - a.percentage)
    .slice(0, 5)
    .map(([name, data]) => ({ name, ...data }));
};
// src/api/github/stats.ts
import { GITHUB_CONFIG } from '../../config/github';

interface GitHubRepo {
    stargazers_count: number;
}

interface GitHubUser {
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

export interface GitHubStats {
    publicRepos: number;
    totalStars: number;
    followers: number;
    following: number;
    accountAge: number;
    updatedAt: string;
    _note?: string;
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
    // Simple in-memory cache
    const cacheKey = 'github-stats';
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // Cache for 1 hour
        if (Date.now() - timestamp < 60 * 60 * 1000) {
            return data;
        }
    }

    try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}`);
        if (!userRes.ok) throw new Error('Failed to fetch user data');
        const userData = await userRes.json() as GitHubUser;

        // Fetch repositories
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}/repos?per_page=100&type=all`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json() as GitHubRepo[];

        // Calculate stats
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        // Calculate account age in years
        const accountCreated = new Date(userData.created_at);
        const yearsActive = Math.floor((Date.now() - accountCreated.getTime()) / (1000 * 60 * 60 * 24 * 365));

        const result = {
            publicRepos: userData.public_repos,
            totalStars,
            followers: userData.followers,
            following: userData.following,
            accountAge: yearsActive || 2,
            updatedAt: new Date().toISOString()
        };

        // Cache the result
        sessionStorage.setItem(cacheKey, JSON.stringify({
            data: result,
            timestamp: Date.now()
        }));

        return result;
    } catch (error) {
        console.error('GitHub Stats API Error:', error);

        // Return fallback data
        return {
            publicRepos: 25,
            totalStars: 20,
            followers: 10,
            following: 15,
            accountAge: 2,
            updatedAt: new Date().toISOString(),
            _note: 'Using fallback data'
        };
    }
}
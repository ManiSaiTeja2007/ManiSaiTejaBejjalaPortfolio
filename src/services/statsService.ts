// src/services/statsService.ts
import { fetchGitHubStats } from '../api/github/stats';
import { fetchGitHubLanguages } from '../api/github/languages';
import { fetchGitHubStreak } from '../api/github/streak';

// Define proper types
interface GitHubStats {
    publicRepos: number;
    totalStars: number;
    followers: number;
    following: number;
    accountAge: number;
    updatedAt: string;
    _note?: string;
}

interface LanguagesResponse {
    languages: Array<{ name: string; bytes: number; percentage: number }>;
    totalBytes: number;
    updatedAt: string;
    _note?: string;
}

interface StreakResponse {
    currentStreak: number;
    longestStreak: number;
    totalContributionsThisYear: number;
    updatedAt: string;
    _note?: string;
}

// Export the class so it can be used
export class StatsService {
    async getStats(): Promise<GitHubStats> {
        return fetchGitHubStats();
    }

    async getLanguages(): Promise<LanguagesResponse> {
        return fetchGitHubLanguages();
    }

    async getStreak(): Promise<StreakResponse> {
        return fetchGitHubStreak();
    }

    clearCache(): void {
        sessionStorage.removeItem('github-stats');
        sessionStorage.removeItem('github-languages');
        sessionStorage.removeItem('github-streak');
    }
}

// Create and export a singleton instance
export const statsService = new StatsService();
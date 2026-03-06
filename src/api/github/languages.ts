// src/api/github/languages.ts
import { GITHUB_CONFIG } from '../../config/github';

interface LanguageData {
    [key: string]: number;
}

export interface Language {
    name: string;
    bytes: number;
    percentage: number;
}

export interface LanguagesResponse {
    languages: Language[];
    totalBytes: number;
    updatedAt: string;
    _note?: string;
}

export async function fetchGitHubLanguages(): Promise<LanguagesResponse> {
    // Simple in-memory cache
    const cacheKey = 'github-languages';
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // Cache for 1 hour
        if (Date.now() - timestamp < 60 * 60 * 1000) {
            return data;
        }
    }

    try {
        // Fetch all repositories
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}/repos?per_page=100&type=public`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const repos = await reposRes.json() as Array<{ languages_url: string }>;

        // Fetch languages for each repo
        const languagePromises = repos.map(async (repo) => {
            try {
                const langRes = await fetch(repo.languages_url);
                if (langRes.ok) {
                    return await langRes.json() as LanguageData;
                }
            } catch {
                // Ignore individual repo failures
            }
            return {};
        });

        const languagesData = await Promise.all(languagePromises);

        // Aggregate languages
        const totalLanguages: LanguageData = {};
        languagesData.forEach((langData) => {
            Object.entries(langData).forEach(([lang, bytes]) => {
                totalLanguages[lang] = (totalLanguages[lang] || 0) + bytes;
            });
        });

        // Sort and format
        const sortedLanguages = Object.entries(totalLanguages)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 8)
            .map(([name, bytes]) => ({ name, bytes, percentage: 0 }));

        // Calculate percentages
        const totalBytes = sortedLanguages.reduce((sum, lang) => sum + lang.bytes, 0);
        sortedLanguages.forEach(lang => {
            lang.percentage = Math.round((lang.bytes / totalBytes) * 100);
        });

        const result = {
            languages: sortedLanguages,
            totalBytes,
            updatedAt: new Date().toISOString()
        };

        // Cache the result
        sessionStorage.setItem(cacheKey, JSON.stringify({
            data: result,
            timestamp: Date.now()
        }));

        return result;
    } catch (error) {
        console.error('GitHub Languages API Error:', error);

        // Return fallback data
        const fallback = {
            languages: [
                { name: 'TypeScript', bytes: 50000, percentage: 40 },
                { name: 'JavaScript', bytes: 30000, percentage: 24 },
                { name: 'Python', bytes: 20000, percentage: 16 },
                { name: 'HTML', bytes: 15000, percentage: 12 },
                { name: 'CSS', bytes: 10000, percentage: 8 }
            ],
            totalBytes: 125000,
            updatedAt: new Date().toISOString(),
            _note: 'Using fallback data'
        };

        return fallback;
    }
}
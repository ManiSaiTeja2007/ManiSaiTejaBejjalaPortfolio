// FIXED: src/utils/imageUtils.ts

/**
 * Optimizes image URLs for better loading and fallback support
 */
export class ImageOptimizer {
  private static readonly FALLBACK_IMAGES = {
    project: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    github: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    hardware: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    default: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'
  };

  /**
   * Get optimized image URL with fallback
   */
  static getOptimizedUrl(
    url: string | undefined, 
    type: keyof typeof ImageOptimizer.FALLBACK_IMAGES = 'default'
  ): string {
    if (!url || url.trim() === '') {
      return this.FALLBACK_IMAGES[type];
    }

    // If it's an Unsplash URL, optimize it
    if (url.includes('unsplash.com')) {
      return this.optimizeUnsplashUrl(url);
    }

    // If it's a local URL, ensure it's correct
    if (url.startsWith('/')) {
      return url;
    }

    return url;
  }

  /**
   * Optimize Unsplash URLs for better performance
   */
  private static optimizeUnsplashUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      
      // Add optimization parameters
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('w', '800');
      urlObj.searchParams.set('q', '80');
      
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  /**
   * Get optimized GitHub stats URL
   */
  static getGitHubStatsUrl(username: string, isDark: boolean): string {
    const colors = isDark ? {
      title: 'ffffff',
      text: 'ffffff',
      icon: '58a6ff',
      bg: '0d1117'
    } : {
      title: '000000',
      text: '000000',
      icon: '0366d6',
      bg: 'ffffff'
    };

    return `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&count_private=true&hide_border=true&bg_color=${colors.bg}&title_color=${colors.title}&text_color=${colors.text}&icon_color=${colors.icon}`;
  }

  /**
   * Get optimized streak stats URL - FIXED: Removed unused 'theme' variable
   */
  static getStreakStatsUrl(username: string, isDark: boolean): string {
    return `https://streak-stats.demolab.com?user=${username}&theme=${isDark ? 'dark' : 'light'}&hide_border=true&background=0D1117&fire=FF6B6B&ring=58A6FF`;
  }

  /**
   * Get optimized top languages URL
   */
  static getTopLangsUrl(username: string, isDark: boolean): string {
    const colors = isDark ? {
      title: 'ffffff',
      text: 'ffffff',
      bg: '0d1117'
    } : {
      title: '000000',
      text: '000000',
      bg: 'ffffff'
    };

    return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=${colors.bg}&title_color=${colors.title}&text_color=${colors.text}&langs_count=8`;
  }
}

/**
 * Icon URL resolver with fallback support
 */
export class IconResolver {
  private static readonly ICON_BASE_URL = 'https://api.iconify.design';
  private static readonly FALLBACK_ICON = 'codicon:code';

  /**
   * Get icon URL with fallback
   */
  static getIconUrl(iconName: string): string {
    const normalized = this.normalizeIconName(iconName);
    
    try {
      return `${this.ICON_BASE_URL}/${normalized}.svg`;
    } catch {
      return `${this.ICON_BASE_URL}/${this.FALLBACK_ICON}.svg`;
    }
  }

  /**
   * Normalize icon name for API
   */
  private static normalizeIconName(name: string): string {
    // Remove spaces and special characters
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-:]/g, '')
      .replace(/\./g, '-')
      .replace(/\+/g, '-plus');
  }

  /**
   * Check if icon likely exists
   */
  static hasIcon(techName: string): boolean {
    const commonIcons = [
      'react', 'typescript', 'javascript', 'python', 'java', 'c', 'cpp',
      'html5', 'css3', 'nodejs', 'express', 'mongodb', 'postgresql',
      'aws', 'docker', 'git', 'github', 'vscode', 'figma',
      'arduino', 'raspberrypi', 'tensorflow', 'pytorch'
    ];

    const normalized = techName.toLowerCase().replace(/[^a-z]/g, '');
    return commonIcons.some(icon => normalized.includes(icon) || icon.includes(normalized));
  }
}
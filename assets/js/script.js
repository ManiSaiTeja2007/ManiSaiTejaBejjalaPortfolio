AOS.init({ duration: 800, once: true });

document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Get GitHub stats image elements
    const githubStatsImg = document.getElementById('github-stats-img');
    const topLangsImg = document.getElementById('top-langs-img');
    const streakStatsImg = document.getElementById('streak-stats-img');

    // Base URLs for light and dark themes
    const lightStatsBase = 'https://github-readme-stats.vercel.app/api?username=manisaiteja2007&show_icons=true&hide_border=true';
    const lightLangsBase = 'https://github-readme-stats.vercel.app/api/top-langs/?username=manisaiteja2007&layout=compact&hide_border=true';
    const lightStreakBase = 'https://github-readme-streak-stats.herokuapp.com/?user=manisaiteja2007&hide_border=true';

    const darkStatsTheme = '&theme=dracula&bg_color=0f172a&text_color=e2e8f0&title_color=4f46e5';
    const darkLangsTheme = '&theme=dracula&bg_color=0f172a&text_color=e2e8f0&title_color=4f46e5';
    const darkStreakTheme = '&theme=dracula&background=0f172a&stroke=4f46e5&ring=4f46e5&currStreakLabel=4f46e5&sideLabels=e2e8f0';

    const lightStatsTheme = '&theme=default&bg_color=ffffff&text_color=1e293b&title_color=4f46e5';
    const lightLangsTheme = '&theme=default&bg_color=ffffff&text_color=1e293b&title_color=4f46e5';
    const lightStreakTheme = '&theme=default&background=ffffff&stroke=4f46e5&ring=4f46e5&currStreakLabel=4f46e5&sideLabels=1e293b';

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            html.classList.add('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');

            // Update GitHub stats images to dark theme
            if (githubStatsImg) githubStatsImg.src = lightStatsBase + darkStatsTheme;
            if (topLangsImg) topLangsImg.src = lightLangsBase + darkLangsTheme;
            if (streakStatsImg) streakStatsImg.src = lightStreakBase + darkStreakTheme;
        } else {
            html.classList.remove('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');

            // Update GitHub stats images to light theme
            if (githubStatsImg) githubStatsImg.src = lightStatsBase + lightStatsTheme;
            if (topLangsImg) topLangsImg.src = lightLangsBase + lightLangsTheme;
            if (streakStatsImg) streakStatsImg.src = lightStreakBase + lightStreakTheme;
        }
        localStorage.setItem('theme', theme);
    };

    // Initialize theme on load
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDark = html.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    });

    // Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Particles.js Initialization
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: ['#4f46e5', '#14b8a6', '#dc2626'] },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 2, random: true },
                line_linked: { enable: false },
                move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
                modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    }

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    function activateScrollSpy() {
        let scrollPosition = window.scrollY + 140;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("text-primary-brand", "font-bold");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("text-primary-brand", "font-bold");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateScrollSpy);

    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Update copyright year dynamically
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Function to manage project folding under each technology section
const manageProjectFolding = () => {
    try {
        const techSections = document.querySelectorAll('div[id$="-section"]');
        console.log('Tech sections found:', techSections.length);
        const projectsToShowInitially = 3;

        techSections.forEach((section) => {
            const grid = section.querySelector('.grid');
            if (!grid) {
                console.warn(`No .grid found in section ${section.id}`);
                return;
            }

            const projectItems = grid.querySelectorAll('a.project-card');
            console.log(`Project items in ${section.id}:`, projectItems.length);

            // Create Show More/Show Less button
            const showMoreButton = document.createElement('button');
            showMoreButton.className = 'show-more-btn btn btn-primary mt-4';
            showMoreButton.textContent = 'Show More';
            section.appendChild(showMoreButton);

            let isExpanded = false;

            const updateProjectVisibility = () => {
                projectItems.forEach((item, index) => {
                    if (isExpanded || index < projectsToShowInitially) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });

                showMoreButton.textContent = isExpanded ? 'Show Less' : 'Show More';
                showMoreButton.style.display = projectItems.length <= projectsToShowInitially ? 'none' : 'inline-block';

                // Scroll to the button when "Show Less" is clicked
                if (!isExpanded && projectItems.length > projectsToShowInitially) {
                    showMoreButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            };

            updateProjectVisibility();

            showMoreButton.addEventListener('click', () => {
                console.log(`Show More clicked in ${section.id}, isExpanded:`, isExpanded);
                isExpanded = !isExpanded;
                updateProjectVisibility();
            });
        });
    } catch (error) {
        console.error('Error in manageProjectFolding:', error);
    }
};

// Initialize with MutationObserver to handle dynamic content
const observer = new MutationObserver(() => {
    if (document.querySelector('div[id$="-section"]')) {
        console.log('Initializing manageProjectFolding');
        manageProjectFolding();
        observer.disconnect();
    }
});
observer.observe(document.body, { childList: true, subtree: true });

    // Project visibility for "Show More" / "Explore All" functionality
    const showMoreInitialButton = document.getElementById('show-more-initial-projects');
    const exploreAllProjectsButton = document.getElementById('explore-all-projects-button');
    const projectItems = document.querySelectorAll('.project-item');
    const initialProjectsToShow = 2;
    let isMoreClicked = false;

    const updateProjectVisibility = () => {
        projectItems.forEach((item, index) => {
            const shouldBeVisibleWithoutMoreClick = index < initialProjectsToShow;

            if (isMoreClicked || shouldBeVisibleWithoutMoreClick) {
                item.classList.remove('project-hidden');
            } else {
                item.classList.add('project-hidden');
            }
        });

        if (!isMoreClicked) {
            showMoreInitialButton.style.display = 'inline-block';
            exploreAllProjectsButton.style.display = 'none';
        } else {
            showMoreInitialButton.style.display = 'none';
            exploreAllProjectsButton.style.display = 'flex';
        }

        if (projectItems.length <= initialProjectsToShow) {
            showMoreInitialButton.style.display = 'none';
            exploreAllProjectsButton.style.display = 'none';
        }
    };

    updateProjectVisibility();

    showMoreInitialButton.addEventListener('click', (event) => {
        event.preventDefault();
        isMoreClicked = true;
        updateProjectVisibility();
    });

    // Initialize project folding for all-projects.html
    if (document.querySelector('div[id$="-section"]')) {
        manageProjectFolding();
    }
});
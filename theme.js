// theme.js

export function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcon(theme);
}

export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

function updateIcon(theme) {
    const slider = document.querySelector('.theme-toggle-slider');
    if (slider) {
        if (theme === 'dark') {
            slider.style.backgroundColor = '#2d2d2d';
        } else {
            slider.style.backgroundColor = '#ddd';
        }
    }
}

export function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    let initialTheme = 'light'; // Default to light

    if (savedTheme) {
        initialTheme = savedTheme;
    } else if (prefersDarkScheme.matches) {
        initialTheme = 'dark';
    }

    applyTheme(initialTheme);
    
    // Add event listener only if element exists
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
    }
}

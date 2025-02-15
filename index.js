import { initTheme } from './theme.js';

document.getElementById('start-btn').addEventListener('click', () => {
  window.location.href = 'chat.html';
});

document.getElementById('learn-more-btn').addEventListener('click', () => {
  // Placeholder for learn more functionality
  alert('La fonctionnalité "En savoir plus" arrive bientôt !');
});

initTheme();

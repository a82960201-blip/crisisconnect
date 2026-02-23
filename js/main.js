// Main page JS

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function renderSpotlight() {
  const container = document.getElementById('spotlightCards');
  if (!container) return;
  container.innerHTML = CRISES.map(c => `
    <div class="crisis-card reveal">
      <div class="crisis-card-region">${c.region}</div>
      <h3>${c.title}</h3>
      <p>${c.description}</p>
      <span class="crisis-severity">${c.severity}</span>
    </div>
  `).join('');
  initReveal();
}

function renderStoryCards() {
  const container = document.getElementById('storyCards');
  if (!container) return;
  container.innerHTML = STORIES.slice(0, 3).map(s => `
    <div class="story-card reveal">
      <div class="story-card-name">${s.name}</div>
      <h3>${s.headline}</h3>
      <p>${s.excerpt.slice(0, 150)}...</p>
      <div class="story-card-location">📍 ${s.location}</div>
    </div>
  `).join('');
  initReveal();
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// Nav shadow on scroll
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSpotlight();
  renderStoryCards();
  initReveal();
  initNavScroll();
});

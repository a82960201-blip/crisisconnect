function renderStories() {
  const container = document.getElementById('storiesFull');
  if (!container) return;
  container.innerHTML = STORIES.map((s, i) => `
    <div class="story-full-card reveal" style="transition-delay:${i * 0.08}s">
      <blockquote>${s.headline}</blockquote>
      <p style="margin-bottom:1.5rem;line-height:1.8;color:#6b6560">${s.excerpt}</p>
      <div class="story-attr">
        <strong>${s.name}</strong> — 📍 ${s.location}<br/>
        <span style="font-size:0.8rem;opacity:0.7">Source: ${s.source}</span>
      </div>
    </div>
  `).join('');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderStories();
  window.addEventListener('scroll', () =>
    document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 30), {passive:true});
});

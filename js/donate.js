// Donate page

function renderNGOs(filter) {
  const grid = document.getElementById('ngoGrid');
  if (!grid) return;
  grid.innerHTML = NGOS.map((ngo, i) => {
    const hidden = filter !== 'all' && !ngo.categories.includes(filter) ? 'ngo-hidden' : '';
    return `
    <div class="ngo-card reveal ${hidden}" data-categories="${ngo.categories.join(',')}" style="animation-delay:${i * 0.07}s">
      <div class="ngo-card-category">${ngo.tag}</div>
      <h3>${ngo.name} — ${ngo.fullName}</h3>
      <p>${ngo.description}</p>
      <div class="ngo-rating">${ngo.rating}</div>
      <a href="${ngo.url}" target="_blank" rel="noopener" class="ngo-donate-btn"
         onclick="track('donate_${ngo.name.toLowerCase()}')">
        Donate to ${ngo.name} →
      </a>
    </div>`;
  }).join('');
  initReveal();
}

function filterNGO(cat, btn) {
  track('ngo_filter_' + cat);
  document.querySelectorAll('.ngo-card').forEach(card => {
    const cats = card.dataset.categories.split(',');
    card.classList.toggle('ngo-hidden', cat !== 'all' && !cats.includes(cat));
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderNGOs('all');
  document.querySelector('.nav')?.addEventListener && 
    window.addEventListener('scroll', () => document.querySelector('.nav')?.classList.toggle('scrolled', window.scrollY > 30), {passive:true});
});

// Scroll reveal for donate page
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', () => { renderNGOs('all'); initReveal(); });

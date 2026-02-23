const ACCESS_CODE = '123098';

function doLogin() {
  const val = document.getElementById('loginInput').value;
  if (val === ACCESS_CODE) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    loadDashboard();
  } else {
    const err = document.getElementById('loginError');
    err.textContent = 'Incorrect access code.';
    document.getElementById('loginInput').value = '';
    setTimeout(() => err.textContent = '', 2500);
  }
}

function logout() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginInput').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dashDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('loginInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') doLogin();
  });
});

function showTab(name, el) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (el) el.classList.add('active');
  const titles = { overview: 'Overview', clicks: 'Link Clicks', sessions: 'Sessions', pages: 'Page Views', messages: 'Messages' };
  document.getElementById('tabTitle').textContent = titles[name] || name;
  // Hide mission banner on non-overview tabs
  const banner = document.getElementById('missionBanner');
  if (banner) banner.style.display = name === 'overview' ? 'block' : 'none';
}

function loadDashboard() {
  const raw = localStorage.getItem('cc_analytics');
  const data = raw ? JSON.parse(raw) : { sessions: [], clicks: {}, pageViews: {}, totalVisits: 0 };

  // KPIs
  const totalClicks = Object.values(data.clicks).reduce((a, c) => a + c.count, 0);
  const donateClicks = Object.entries(data.clicks).filter(([k]) => k.startsWith('donate_')).reduce((a,[,v]) => a + v.count, 0);
  const uniquePages = Object.keys(data.pageViews).length;

  document.getElementById('kpiRow').innerHTML = `
    <div class="kpi-card"><div class="kpi-label">Total Page Views</div><div class="kpi-value red">${data.totalVisits || 0}</div></div>
    <div class="kpi-card"><div class="kpi-label">Sessions</div><div class="kpi-value gold">${data.sessions.length}</div></div>
    <div class="kpi-card"><div class="kpi-label">Total Link Clicks</div><div class="kpi-value green">${totalClicks}</div></div>
    <div class="kpi-card"><div class="kpi-label">Donate Clicks</div><div class="kpi-value gold">${donateClicks}</div></div>
    <div class="kpi-card"><div class="kpi-label">Pages Tracked</div><div class="kpi-value">${uniquePages}</div></div>
  `;

  // Sessions over time
  const sessionsByDay = {};
  data.sessions.forEach(s => {
    const day = s.date ? s.date.slice(0,10) : 'unknown';
    sessionsByDay[day] = (sessionsByDay[day] || 0) + 1;
  });
  const days = Object.keys(sessionsByDay).sort().slice(-14);
  const dayVals = days.map(d => sessionsByDay[d]);

  new Chart(document.getElementById('sessionChart'), {
    type: 'line',
    data: {
      labels: days.map(d => d.slice(5)),
      datasets: [{
        label: 'Sessions', data: dayVals,
        borderColor: '#c0392b',
        backgroundColor: 'rgba(192,57,43,0.1)',
        tension: 0.4, fill: true, pointRadius: 3
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8b8fa8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#8b8fa8' }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
      }
    }
  });

  // Top clicks chart
  const clickEntries = Object.entries(data.clicks).sort((a,b) => b[1].count - a[1].count).slice(0,8);
  new Chart(document.getElementById('clickChart'), {
    type: 'bar',
    data: {
      labels: clickEntries.map(([k]) => k.replace(/_/g,' ')),
      datasets: [{
        data: clickEntries.map(([,v]) => v.count),
        backgroundColor: 'rgba(201,168,76,0.7)',
        borderColor: '#c9a84c', borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8b8fa8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#8b8fa8', font: { size: 11 } }, grid: { display: false } }
      }
    }
  });

  // Page views chart
  const pvEntries = Object.entries(data.pageViews).sort((a,b) => b[1]-a[1]);
  new Chart(document.getElementById('pageChart'), {
    type: 'bar',
    data: {
      labels: pvEntries.map(([k]) => k || 'index.html'),
      datasets: [{
        data: pvEntries.map(([,v]) => v),
        backgroundColor: 'rgba(192,57,43,0.6)',
        borderColor: '#c0392b', borderWidth: 1
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#8b8fa8' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        y: { ticks: { color: '#8b8fa8' }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
      }
    }
  });

  // Clicks table
  const tbody = document.getElementById('clicksBody');
  tbody.innerHTML = Object.entries(data.clicks)
    .sort((a,b) => b[1].count - a[1].count)
    .map(([key, val]) => `
      <tr>
        <td><span class="badge">${key}</span></td>
        <td><strong>${val.count}</strong></td>
        <td>${val.last ? new Date(val.last).toLocaleString() : '—'}</td>
      </tr>
    `).join('') || '<tr><td colspan="3" style="color:#8b8fa8">No clicks tracked yet — visit the site to generate data.</td></tr>';

  // Sessions table
  document.getElementById('sessionsBody').innerHTML = data.sessions.slice(0,50).map(s => `
    <tr>
      <td style="font-family:monospace;font-size:0.8rem">${s.id ? s.id.slice(0,18) + '...' : '—'}</td>
      <td>${s.date ? new Date(s.date).toLocaleString() : '—'}</td>
      <td>${(s.pages || []).join(', ')}</td>
      <td>${s.duration ? s.duration + 's' : '—'}</td>
    </tr>
  `).join('') || '<tr><td colspan="4" style="color:#8b8fa8">No sessions yet.</td></tr>';

  // Pages table
  document.getElementById('pagesBody').innerHTML = Object.entries(data.pageViews)
    .sort((a,b) => b[1]-a[1])
    .map(([page, views]) => `<tr><td>${page || 'index.html'}</td><td><strong>${views}</strong></td></tr>`)
    .join('') || '<tr><td colspan="2" style="color:#8b8fa8">No page views yet.</td></tr>';

  // Messages
  const messages = JSON.parse(localStorage.getItem('cc_messages') || '[]');
  const msgContainer = document.getElementById('messagesList');
  if (messages.length === 0) {
    msgContainer.innerHTML = '<p class="no-messages">No messages yet. Once people submit the contact form, they appear here.</p>';
  } else {
    msgContainer.innerHTML = messages.slice().reverse().map(m => `
      <div class="message-card">
        <div class="message-card-meta">
          <span>${m.date ? new Date(m.date).toLocaleString() : '—'}</span>
          <span class="message-type-badge">${m.type}</span>
        </div>
        <div class="message-card-name">${m.name}</div>
        <div class="message-card-contact">📬 ${m.contact}</div>
        <div class="message-card-body">${m.message}</div>
      </div>
    `).join('');
  }
}

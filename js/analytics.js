// CrisisConnect Analytics — localStorage-based tracking

const Analytics = {
  STORAGE_KEY: 'cc_analytics',

  getData() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {
        sessions: [],
        clicks: {},
        pageViews: {},
        totalVisits: 0
      };
    } catch { return { sessions: [], clicks: {}, pageViews: {}, totalVisits: 0 }; }
  },

  saveData(data) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  },

  // Called on every page load
  trackPageView() {
    const data = this.getData();
    const page = window.location.pathname.split('/').pop() || 'index.html';
    data.pageViews[page] = (data.pageViews[page] || 0) + 1;
    data.totalVisits = (data.totalVisits || 0) + 1;

    // Session tracking
    let sessionId = sessionStorage.getItem('cc_session');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2,7);
      sessionStorage.setItem('cc_session', sessionId);
      sessionStorage.setItem('cc_session_start', Date.now());
      data.sessions.unshift({
        id: sessionId,
        date: new Date().toISOString(),
        pages: [page],
        duration: 0
      });
      // Keep only last 100 sessions
      if (data.sessions.length > 100) data.sessions = data.sessions.slice(0, 100);
    } else {
      const session = data.sessions.find(s => s.id === sessionId);
      if (session && !session.pages.includes(page)) session.pages.push(page);
    }
    this.saveData(data);
  },

  // Update session duration on unload
  updateDuration() {
    const start = sessionStorage.getItem('cc_session_start');
    const sessionId = sessionStorage.getItem('cc_session');
    if (!start || !sessionId) return;
    const duration = Math.round((Date.now() - parseInt(start)) / 1000);
    const data = this.getData();
    const session = data.sessions.find(s => s.id === sessionId);
    if (session) { session.duration = duration; this.saveData(data); }
  }
};

// Global track function used inline in HTML
function track(event) {
  const data = Analytics.getData();
  if (!data.clicks[event]) {
    data.clicks[event] = { count: 0, last: null };
  }
  data.clicks[event].count++;
  data.clicks[event].last = new Date().toISOString();
  Analytics.saveData(data);
}

// Auto-run
Analytics.trackPageView();
window.addEventListener('beforeunload', () => Analytics.updateDuration());

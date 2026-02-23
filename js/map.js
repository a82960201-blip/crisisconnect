// CrisisConnect — Interactive Map
// Uses Leaflet.js with OpenStreetMap tiles

const AID_LOCATIONS = [
  { lat: 15.55, lng: 32.53, name: 'Khartoum UNHCR Registration', type: 'shelter', region: 'Sudan', desc: 'UNHCR registration and protection services for displaced families', contact: 'unhcr.org/sudan' },
  { lat: 13.45, lng: 22.45, name: 'El Fasher Food Distribution', type: 'food', region: 'Sudan', desc: 'WFP emergency food distribution point serving 50,000+ displaced people', contact: 'wfp.org/sudan' },
  { lat: 11.58, lng: 43.14, name: 'Djibouti Refugee Transit Camp', type: 'shelter', region: 'Horn of Africa', desc: 'UNHCR transit camp for refugees crossing from Ethiopia and Eritrea', contact: 'unhcr.org' },
  { lat: 31.50, lng: 34.46, name: 'Gaza MSF Clinic', type: 'clinic', region: 'Gaza', desc: 'MSF emergency medical point operating under extreme conditions', contact: 'msf.org' },
  { lat: 31.77, lng: 35.21, name: 'West Bank IRC Support Center', type: 'shelter', region: 'West Bank', desc: 'IRC protection and legal assistance services', contact: 'rescue.org' },
  { lat: 15.35, lng: 44.20, name: 'Sana\'a UNICEF Nutrition Center', type: 'clinic', region: 'Yemen', desc: 'UNICEF therapeutic feeding center for children with acute malnutrition', contact: 'unicef.org/yemen' },
  { lat: 12.80, lng: 45.03, name: 'Aden Food Distribution', type: 'food', region: 'Yemen', desc: 'WFP food basket distribution for conflict-affected families', contact: 'wfp.org/yemen' },
  { lat: -4.32, lng: 15.32, name: 'Kinshasa Refugee Reception', type: 'shelter', region: 'DRC', desc: 'UNHCR and CARE reception center for people fleeing eastern DRC conflict', contact: 'unhcr.org/drc' },
  { lat: -1.94, lng: 30.06, name: 'Kigali Learning Center', type: 'school', region: 'Rwanda', desc: 'Save the Children education program for refugee children', contact: 'savethechildren.org' },
  { lat: 23.81, lng: 90.41, name: 'Cox\'s Bazar UNHCR Camp', type: 'shelter', region: 'Bangladesh', desc: 'World\'s largest refugee settlement. UNHCR, IRC, and UNICEF operating', contact: 'unhcr.org/bangladesh' },
  { lat: 23.72, lng: 90.38, name: 'Cox\'s Bazar UNICEF School', type: 'school', region: 'Bangladesh', desc: 'Temporary learning spaces for 150,000+ Rohingya children', contact: 'unicef.org' },
  { lat: 12.35, lng: 1.51, name: 'Ouagadougou Food Point', type: 'food', region: 'Burkina Faso', desc: 'WFP emergency food assistance for internally displaced people', contact: 'wfp.org' },
  { lat: 12.65, lng: -8.00, name: 'Bamako Clinic — MSF', type: 'clinic', region: 'Mali', desc: 'MSF mobile health clinic serving conflict-displaced communities', contact: 'msf.org/mali' },
  { lat: 36.20, lng: 37.16, name: 'Aleppo IRC Center', type: 'clinic', region: 'Syria', desc: 'IRC health and protection services in northern Syria', contact: 'rescue.org' },
  { lat: 36.71, lng: 36.95, name: 'Azaz Shelter Camp', type: 'shelter', region: 'Syria', desc: 'UNHCR emergency shelter for internally displaced Syrians', contact: 'unhcr.org/syria' },
  { lat: 8.99, lng: 38.75, name: 'Addis Ababa Refugee Services', type: 'shelter', region: 'Ethiopia', desc: 'UNHCR and CARE services for refugees from South Sudan, Eritrea, and Somalia', contact: 'unhcr.org/ethiopia' },
  { lat: 4.85, lng: 31.58, name: 'Juba Food Distribution', type: 'food', region: 'South Sudan', desc: 'WFP food assistance in a region facing acute food insecurity', contact: 'wfp.org' },
  { lat: 2.04, lng: 45.34, name: 'Mogadishu Nutrition Clinic', type: 'clinic', region: 'Somalia', desc: 'UNICEF and IRC nutrition support for children under 5', contact: 'unicef.org/somalia' },
  { lat: 34.01, lng: 71.57, name: 'Peshawar Afghan Refugee Center', type: 'shelter', region: 'Pakistan', desc: 'UNHCR registration and support for Afghan refugees', contact: 'unhcr.org' },
  { lat: 34.52, lng: 69.18, name: 'Kabul WFP Distribution', type: 'food', region: 'Afghanistan', desc: 'WFP food distribution point — Afghanistan faces catastrophic food insecurity', contact: 'wfp.org/afghanistan' }
];

const TYPE_COLORS = {
  shelter: '#e63946',
  food: '#f4a261',
  clinic: '#4ecdc4',
  school: '#a8dadc'
};

let map = null;
let allMarkers = [];

function initMap() {
  const container = document.getElementById('map');
  if (!container || !window.L) return;

  map = L.map('map', {
    center: [15, 30],
    zoom: 3,
    zoomControl: true,
    scrollWheelZoom: false
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map);

  AID_LOCATIONS.forEach(loc => {
    const color = TYPE_COLORS[loc.type] || '#888';
    const icon = L.divIcon({
      className: '',
      html: `<div style="width:14px;height:14px;background:${color};border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.4)"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    const marker = L.marker([loc.lat, loc.lng], { icon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family:'DM Sans',sans-serif;min-width:200px;">
          <div style="font-size:0.65rem;letter-spacing:2px;text-transform:uppercase;color:${color};margin-bottom:0.3rem">${loc.region} · ${loc.type}</div>
          <strong style="font-size:0.95rem;display:block;margin-bottom:0.5rem">${loc.name}</strong>
          <p style="font-size:0.8rem;color:#555;margin-bottom:0.5rem;line-height:1.5">${loc.desc}</p>
          <a href="https://${loc.contact}" target="_blank" rel="noopener"
             onclick="if(window.track) track('map_${loc.type}_${loc.region.toLowerCase().replace(/ /g,'_')}')"
             style="font-size:0.75rem;color:${color};text-decoration:none;">→ Visit ${loc.contact}</a>
        </div>
      `);

    marker._type = loc.type;
    allMarkers.push(marker);
  });
}

function filterMap(type, btn) {
  if (window.track) track('map_filter_' + type);

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  allMarkers.forEach(m => {
    if (type === 'all' || m._type === type) {
      if (!map.hasLayer(m)) m.addTo(map);
    } else {
      map.removeLayer(m);
    }
  });
}

document.addEventListener('DOMContentLoaded', initMap);

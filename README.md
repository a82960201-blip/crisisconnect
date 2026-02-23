# CrisisConnect

A humanitarian aid platform connecting people to resources, verified NGOs, and real stories from crisis zones.

## Getting Started (Local)

Open `index.html` in any browser — or use VS Code Live Server for the best experience.

### VS Code Live Server
1. Open the `crisisconnect` folder in VS Code
2. Install the "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Visit `http://localhost:5500`

## Pages
- `index.html` — Homepage with map and crisis spotlight
- `donate.html` — Verified NGO donation directory
- `stories.html` — Human stories from crisis zones

## Admin Panel
- URL: `admin/login.html`
- Access code: **123098**
- Tracks: page views, link clicks, sessions

## Structure
```
crisisconnect/
├── index.html          # Homepage
├── donate.html         # Donation page
├── stories.html        # Stories page
├── css/
│   ├── main.css        # Main site styles
│   └── admin.css       # Admin panel styles
├── js/
│   ├── analytics.js    # Tracking engine
│   ├── data.js         # All site content (edit this)
│   ├── map.js          # Leaflet map
│   ├── main.js         # Homepage logic
│   ├── donate.js       # Donation page logic
│   └── stories.js      # Stories page logic
└── admin/
    ├── login.html      # Admin login (code: 123098)
    └── dashboard.html  # Analytics dashboard
```

## Customization
All content lives in `js/data.js` — edit `CRISES`, `NGOS`, and `STORIES` to update the site.

## Deploying
Drag the entire folder to [Netlify Drop](https://app.netlify.com/drop) — it's free and takes 30 seconds.

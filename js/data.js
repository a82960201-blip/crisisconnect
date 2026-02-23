// CrisisConnect — All site data
// Last updated: February 2026

const CRISES = [
  {
    region: "Sudan — East Africa",
    title: "World's Largest Displacement Crisis",
    description: "Since April 2023, over 12 million people have been displaced — the largest humanitarian crisis ever recorded. More than 30 million are in urgent need due to famine, conflict, and attacks on aid workers. Roads are dangerous. Families are separated. Aid is barely reaching those who need it most.",
    severity: "Critical — 2026",
    tags: ["refugees", "food", "health"]
  },
  {
    region: "Gaza — Middle East",
    title: "Catastrophic Humanitarian Emergency",
    description: "After more than 14 months of conflict, Gaza faces catastrophic conditions. Hospitals destroyed. Water systems collapsed. Families sheltering in tents with food and water scarce. The IRC reports over 1,000 people were killed seeking medical care in just the first 6 months of 2024.",
    severity: "Critical — 2026",
    tags: ["food", "health", "children"]
  },
  {
    region: "DR Congo — Central Africa",
    title: "A Region That Has Never Known Peace",
    description: "Eastern Congo has seen constant armed conflict for decades. Aid workers face kidnappings, checkpoints, and killings. Going to sleep and hoping to wake up alive has become a daily reality. The DRC is now one of the most dangerous places on earth for humanitarian workers.",
    severity: "Severe — 2026",
    tags: ["refugees", "health", "children"]
  },
  {
    region: "Haiti — Caribbean",
    title: "Gang Violence & Mass Displacement",
    description: "Gangs control most of Port-au-Prince and are expanding. Over 1.4 million Haitians are displaced. Nearly half the population faces acute food insecurity. At least 4,388 people were killed by gang violence in the first 9 months of 2025 alone.",
    severity: "Severe — 2026",
    tags: ["food", "shelter", "children"]
  },
  {
    region: "Afghanistan — South Asia",
    title: "Girls Dying in Silence",
    description: "In remote Afghan villages, girls face deadly pregnancy risks with no access to healthcare. A CARE report from February 2026 found that funding cuts have put millions of girls' futures at immediate risk. Women who once ran clinics can barely access one.",
    severity: "Severe — 2026",
    tags: ["health", "children"]
  },
  {
    region: "Sahel — West Africa",
    title: "43 Million in Invisible Crises",
    description: "Around 43 million people are affected by crises that remain largely invisible to the global public. Conflicts, hunger, and extreme weather events destroy lives across the Central African Republic, Niger, Chad, and Mali — while the world looks elsewhere.",
    severity: "Severe — 2026",
    tags: ["food", "refugees"]
  }
];

// Real stories sourced from ICRC, IRC, CARE, Save the Children — 2025/2026
const STORIES = [
  {
    name: "A mother in Darfur, Sudan",
    location: "Darfur → Displacement Camp",
    headline: "\"We had a good life and enough food back in Darfur. Here in the camp, it's very different.\"",
    excerpt: "At one point, she lost breastmilk because she wasn't eating enough. She doesn't know what she wants to do. Life in the camp is tough — but there is nothing to go back to. Her words are documented in the ICRC Humanitarian Outlook 2026.",
    source: "ICRC Humanitarian Outlook 2026"
  },
  {
    name: "A displaced family, Gaza",
    location: "Gaza Strip",
    headline: "\"Water was scarce. Food was scarce. My three children constantly suffered from malnutrition.\"",
    excerpt: "They were sheltering in tents. The family had been displaced multiple times. The situation, in their own words, was very difficult. They are among the millions documented by the IRC in the 2026 Watchlist Report.",
    source: "International Rescue Committee, 2026 Watchlist"
  },
  {
    name: "Daw Mohamed, 58 — Aid Worker",
    location: "Khartoum → North Kordofan, Sudan",
    headline: "\"I have seen the worst disasters in the world. But this one is different. It is personal and very painful.\"",
    excerpt: "A CARE senior director with 40 years of humanitarian service — including in Afghanistan, Somalia, Yemen, and Gaza — returned to Sudan in November 2025 to find his family. The journey from Port Sudan to El-Obeid, where his family had fled, took seven days by road through checkpoints and dangerous terrain.",
    source: "CARE International, January 2026"
  },
  {
    name: "Justin, 46 — Aid Worker",
    location: "Goma, Democratic Republic of Congo",
    headline: "\"Going to sleep and hoping to wake up alive feels like a gamble.\"",
    excerpt: "Justin has worked as a humanitarian worker in eastern DRC for over a decade. He has witnessed colleagues kidnapped, detained, robbed, and killed. Despite traveling through areas with dead bodies and burnt vehicles on the road, his family believes he must continue. He shared his story for World Humanitarian Day 2025.",
    source: "Save the Children, World Humanitarian Day 2025"
  },
  {
    name: "A Syrian family, returning home",
    location: "Syria — After 14 Years of War",
    headline: "\"We had plans for our family for the next hundred years. It never crossed our minds that there would be a war.\"",
    excerpt: "By 2025, 1.2 million Syrians had returned home from neighboring countries. But they returned to rubble — destroyed homes, broken infrastructure, and the trauma of over a decade of exile. This quote was documented by the ICRC from a returning family.",
    source: "ICRC Humanitarian Outlook 2026"
  },
  {
    name: "A displaced father, unknown region",
    location: "Active Conflict Zone",
    headline: "\"Life is not just about eating and drinking. Life is about security and not living in fear. Fear is killing us more than the lack of food.\"",
    excerpt: "He has children who cannot sleep. His family is dying — not just from hunger, but from terror and anxiety. Displacement and the constant threat of violence have taken something food aid cannot replace. Documented by ICRC field teams in 2025.",
    source: "ICRC Humanitarian Outlook 2026"
  },
  {
    name: "Nany Morales",
    location: "Venezuela → Ecuador",
    headline: "She fled Venezuela so her daughter could eat.",
    excerpt: "Nany made the devastating decision to leave her home country when food became impossible to find for her child. She eventually rebuilt her life in Ecuador through resilience, community, and sheer will. Her story was documented by CARE in early 2026.",
    source: "CARE International, January 2026"
  },
  {
    name: "Sita, young girl",
    location: "Remote village, Afghanistan",
    headline: "A girl facing deadly risks — with no one coming.",
    excerpt: "In remote Afghan villages, girls like Sita face life-threatening pregnancy risks with almost no access to healthcare. As of February 2026, CARE reports that funding cuts have left critical health programs shuttered, putting thousands of girls in immediate danger.",
    source: "CARE International, February 2026"
  }
];

const NGOS = [
  {
    name: "UNHCR",
    fullName: "UN Refugee Agency",
    description: "The world's leading organization protecting displaced people. Directly funds shelter, food, and protection for refugees across 135+ countries. As of 2026, responding actively in Sudan, Gaza, DRC, and Afghanistan.",
    rating: "★★★★★ Highest Rated — Charity Navigator",
    url: "https://www.unhcr.org/donate",
    categories: ["refugees"],
    tag: "Refugees & Displacement"
  },
  {
    name: "WFP",
    fullName: "World Food Programme",
    description: "Nobel Peace Prize-winning agency delivering food in emergencies. Responding to famine in Sudan, Yemen, and the Sahel. With global aid cuts in 2025, WFP is operating on reduced rations — your donation directly fills that gap.",
    rating: "★★★★★ Highest Rated — Charity Navigator",
    url: "https://donatenow.wfp.org",
    categories: ["food"],
    tag: "Food & Nutrition"
  },
  {
    name: "MSF",
    fullName: "Médecins Sans Frontières",
    description: "Independent medical teams in the world's most dangerous places — Gaza, DRC, Sudan, Haiti. They go where others won't. Over 600 attacks on health facilities were recorded between 2023–2024; MSF keeps going anyway.",
    rating: "★★★★★ Highest Rated — Charity Navigator",
    url: "https://www.msf.org/donate",
    categories: ["health"],
    tag: "Emergency Medical Aid"
  },
  {
    name: "UNICEF",
    fullName: "UN Children's Fund",
    description: "Vaccines, nutrition, education, and protection for children in every active crisis of 2026. In Sudan alone, millions of children are out of school and malnourished. UNICEF is on the ground.",
    rating: "★★★★★ Highest Rated — Charity Navigator",
    url: "https://www.unicef.org/donate",
    categories: ["children", "health"],
    tag: "Children & Health"
  },
  {
    name: "IRC",
    fullName: "International Rescue Committee",
    description: "On the frontlines in Sudan, Gaza, DRC, Afghanistan, and 40+ other countries. The IRC's 2026 Watchlist documents the worst crises the world is ignoring — and they're responding to all of them.",
    rating: "★★★★★ Highest Rated — Charity Navigator",
    url: "https://www.rescue.org/donate",
    categories: ["refugees", "health"],
    tag: "Crisis Response"
  },
  {
    name: "CARE",
    fullName: "CARE International",
    description: "Reached 58 million people across 120 countries in 2025. On the ground in Sudan, Gaza, Ukraine, Afghanistan, and the Sahel. As global aid budgets were cut in 2025, CARE stepped in where governments stepped back.",
    rating: "★★★★★ Highly Rated — Charity Navigator",
    url: "https://www.care.org/donate",
    categories: ["food", "refugees", "children"],
    tag: "Holistic Aid"
  },
  {
    name: "Save the Children",
    fullName: "Save the Children International",
    description: "Working in 120+ countries. In DRC, their aid workers risk their lives daily. In Nepal, funding cuts just eliminated education programs for 300+ girls. In Afghanistan, they support girls with nowhere else to turn.",
    rating: "★★★★☆ Highly Rated — Charity Navigator",
    url: "https://www.savethechildren.org/donate",
    categories: ["children", "food"],
    tag: "Children"
  },
  {
    name: "ICRC",
    fullName: "International Committee of the Red Cross",
    description: "Operates in 100+ armed conflicts. Lost 25 staff members in 2025 alone. When hospitals are bombed and aid is blocked, the ICRC finds a way through. The only organization with a mandate under international humanitarian law.",
    rating: "★★★★★ Highest Rated — Charity Navigator",
    url: "https://www.icrc.org/donate",
    categories: ["health", "refugees"],
    tag: "Armed Conflict Response"
  }
];

const MAP_RESOURCES = [
  { lat: 15.5007, lng: 32.5599, name: "Khartoum Relief Distribution", type: "food", description: "WFP emergency food distribution point. Sudan crisis — 12M displaced." },
  { lat: 19.6158, lng: 33.4299, name: "Port Sudan Coordination Hub", type: "shelter", description: "UNHCR registration & shelter services for displaced families." },
  { lat: 31.5, lng: 34.46, name: "Gaza Medical Point", type: "clinic", description: "MSF emergency medical services — operating under extreme conditions." },
  { lat: 34.52, lng: 69.18, name: "Kabul Women's Health Clinic", type: "clinic", description: "CARE mobile health unit — one of the last accessible to women." },
  { lat: -1.6596, lng: 29.2227, name: "Goma Emergency Center", type: "clinic", description: "Save the Children health & protection services, eastern DRC." },
  { lat: 14.6928, lng: -17.4467, name: "Dakar Refugee Services", type: "shelter", description: "UNHCR registration, shelter, and legal aid for displaced." },
  { lat: 12.36, lng: -1.53, name: "Ouagadougou Food Bank", type: "food", description: "Oxfam emergency food distribution — Sahel food crisis response." },
  { lat: 15.34, lng: 44.2, name: "Sana'a Children's Learning Space", type: "education", description: "UNICEF learning spaces for children affected by Yemen conflict." },
  { lat: 18.54, lng: -72.34, name: "Port-au-Prince Aid Point", type: "food", description: "IRC food & protection services — Haiti gang crisis response." },
  { lat: 30.06, lng: 31.25, name: "Cairo Refugee Support", type: "education", description: "UNHCR education & legal services for Sudan refugees in Egypt." },
  { lat: 36.20, lng: 37.16, name: "Aleppo Community Hub", type: "food", description: "World Vision food distribution — Syria return & recovery." },
  { lat: 48.45, lng: 35.06, name: "Dnipro Medical Point", type: "clinic", description: "CARE mobile health unit — Ukraine frontline healthcare." },
  { lat: 6.37, lng: 34.88, name: "Juba Nutrition Center", type: "clinic", description: "Save the Children therapeutic feeding — South Sudan." },
  { lat: 9.05, lng: 7.49, name: "Abuja Education Center", type: "education", description: "UNICEF catch-up learning for displaced Nigerian children." },
  { lat: 3.86, lng: 11.52, name: "Yaoundé Shelter Camp", type: "shelter", description: "IRC emergency shelter for people fleeing Cameroon conflict." }
];

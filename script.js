/* ============================================================
   AIRO — Main Script
   All repeated content is generated from data arrays below.
   To update content, just edit the arrays — no HTML changes needed.
   ============================================================ */

/* ========================= IMAGE SYSTEM ========================= */
// Replace any URL here to change the image globally
const images = {
  solar:    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
  esp32:    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400",
  dust:     "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400",
  co2:      "https://images.unsplash.com/photo-1532186773960-85649e5cb70b?w=400",
  charging: "https://images.unsplash.com/photo-1609939b190165b6a7a1b9a5d52b34a6?w=400",
  boost:    "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400",
  eggshell: "https://images.unsplash.com/photo-1569288063648-5b413b6b1c6c?w=400",
  carbon:   "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400",
  hepa:     "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
  fan:      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
  logo:     ""
};

/* ========================= NAVIGATION ========================= */
const navItems = [
  { label: "Home",       href: "#home" },
  { label: "Problem",    href: "#problem" },
  { label: "Solution",   href: "#solution" },
  { label: "Features",   href: "#features" },
  { label: "Components", href: "#components" },
  { label: "How It Works", href: "#how" },
  { label: "Dashboard",  href: "#dashboard" },
  { label: "Future",     href: "#future" }
];

/* ========================= PROBLEM CARDS ========================= */
const problems = [
  { icon: "🌫️", title: "Indoor Dust",       text: "Indoor dust negatively affects respiratory health and accumulates in living spaces." },
  { icon: "🏠", title: "Poor Indoor Air Quality", text: "Many homes and apartments have poor ventilation, trapping pollutants inside." },
  { icon: "📦", title: "Traditional Air Purifiers", text: "Existing air purifiers are bulky, require constant power, and are difficult to relocate." }
];

/* ========================= SOLUTION LIST ========================= */
const solutionPoints = [
  "Portable — easy to move between rooms",
  "Solar-powered — no wall outlet needed",
  "Compact — fits in small apartments",
  "Energy efficient — runs on renewable energy",
  "Continuously monitors air quality",
  "Environmentally friendly filtration"
];

/* ========================= FEATURES ========================= */
const features = [
  { icon: "☀️", title: "Solar Powered",        text: "Runs without relying solely on wall outlets." },
  { icon: "🎒", title: "Portable",             text: "Easy to carry between rooms." },
  { icon: "📊", title: "Air Quality Monitoring", text: "Real-time PM2.5 and CO₂ readings." },
  { icon: "🥚", title: "Biological Filter",    text: "Eggshell-based odor reduction." },
  { icon: "🛡️", title: "HEPA Filtration",      text: "Captures extremely fine particles." },
  { icon: "🌀", title: "Double Fan Technology", text: "Improved airflow using dual 5V fans." }
];

/* ========================= COMPONENTS ========================= */
const components = [
  { name: "Solar Panel",           image: images.solar,    icon: "☀️", description: "Converts sunlight into clean renewable energy." },
  { name: "ESP32 Dev Module",      image: images.esp32,    icon: "🧠", description: "The brain of the system — reads sensors and controls fans." },
  { name: "PMS5003 Dust Sensor",   image: images.dust,     icon: "🌫️", description: "Measures fine particulate matter (PM2.5) in real time." },
  { name: "MH-Z19C CO₂ Sensor",  image: images.co2,      icon: "💨", description: "Accurately detects carbon dioxide levels indoors." },
  { name: "Charging Module",       image: images.charging, icon: "🔋", description: "Safely charges the battery from the solar panel." },
  { name: "5V Boost Converter",    image: images.boost,    icon: "⚡", description: "Steps up voltage to power the ESP32 and fans." },
  { name: "Eggshell-Based Filter", image: images.eggshell, icon: "🥚", description: "Sustainable biological filter for odor reduction." },
  { name: "Activated Carbon Filter", image: images.carbon, icon: "⚫", description: "Absorbs gases, VOCs, and unpleasant smells." },
  { name: "HEPA Filter",           image: images.hepa,     icon: "🛡️", description: "Captures 99.97% of particles as small as 0.3 microns." },
  { name: "Dual 5V Fans",          image: images.fan,      icon: "🌀", description: "Two quiet fans for improved airflow through filters." }
];

/* ========================= TIMELINE STEPS ========================= */
const timelineSteps = [
  "Sunlight",
  "Solar Panel",
  "Battery Charging Module",
  "Boost Converter (5V)",
  "ESP32 Controller",
  "Sensors Monitor Air",
  "Fans Pull Air",
  "Eggshell Filter",
  "Activated Carbon",
  "HEPA Filter",
  "Clean Air Output"
];

/* ========================= DASHBOARD DATA ========================= */
// Change these values to update the dashboard automatically
const monitor = {
  pm25: 18,
  co2: 560,
  quality: "Excellent"
};

/* ========================= WHY OSAKA ========================= */
const osakaReasons = [
  { icon: "🏙️", title: "Dense Urban Population",  text: "Millions live in close quarters, increasing indoor pollution exposure." },
  { icon: "🏢", title: "Apartment Living",        text: "Limited space makes compact purifiers essential." },
  { icon: "🌬️", title: "Indoor Ventilation Concerns", text: "Modern apartments often have restricted natural airflow." },
  { icon: "🌸", title: "Seasonal Pollen",         text: "Spring hay fever forces residents to keep windows closed." },
  { icon: "🌫️", title: "Fine Dust (PM2.5)",       text: "Regional air quality fluctuates, especially in winter." },
  { icon: "🏡", title: "Indoor Environment Focus", text: "Improving indoor spaces has a direct impact on public health." }
];

/* ========================= OBJECTIVES ========================= */
const objectives = [
  { icon: "🎯", title: "Reduce Indoor Dust",            text: "Lower particulate matter levels in living spaces." },
  { icon: "💨", title: "Improve Indoor Air Quality",    text: "Deliver measurable improvements in PM2.5 and CO₂." },
  { icon: "🎒", title: "Create a Portable Purifier",    text: "Design a system that moves easily between rooms." },
  { icon: "☀️", title: "Promote Renewable Energy",      text: "Power the device using solar energy." },
  { icon: "🌱", title: "Eco-Friendly Filtration",       text: "Develop sustainable biological filter materials." }
];

/* ========================= FUTURE IMPROVEMENTS ========================= */
const futurePlans = [
  { icon: "📱", title: "Mobile App",             text: "Monitor air quality from your phone anywhere." },
  { icon: "🔋", title: "Battery Optimization",   text: "Extend runtime with smarter power management." },
  { icon: "🏠", title: "Smart Home Integration", text: "Connect with Alexa, Google Home, and HomeKit." },
  { icon: "🌐", title: "IoT Monitoring",         text: "Share data across multiple AIRO units." },
  { icon: "☀️", title: "Larger Solar Panel",     text: "Increase energy capture for faster charging." },
  { icon: "🤖", title: "AI Air Quality Prediction", text: "Predict pollution trends using machine learning." }
];

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

// Render navigation
function renderNav() {
  const navLinks = document.getElementById("navLinks");
  const footerLinks = document.getElementById("footerLinks");
  navLinks.innerHTML = navItems.map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join("");
  footerLinks.innerHTML = navItems.map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join("");
}

// Generic card renderer
function renderCards(containerId, items, type = "default") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = items.map(item => {
    if (type === "component") {
      return `
        <div class="card component-card fade-up">
          <div class="component-image">
            ${item.image
              ? `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
                 <span class="fallback" style="display:none">${item.icon}</span>`
              : `<span class="fallback">${item.icon}</span>`}
          </div>
          <div class="component-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        </div>`;
    }
    return `
      <div class="card fade-up">
        <div class="card-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`;
  }).join("");
}

// Render solution list
function renderSolution() {
  const list = document.getElementById("solutionList");
  list.innerHTML = solutionPoints.map(point => `<li>${point}</li>`).join("");
}

// Render timeline
function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = timelineSteps.map((step, i) => `
    <div class="timeline-step">
      <div class="timeline-dot"></div>
      <span class="timeline-step-num">Step ${i + 1}</span>
      <span class="timeline-step-title">${step}</span>
    </div>
  `).join("");
}

// Render hero particles
function renderParticles() {
  const container = document.getElementById("particles");
  for (let i = 0; i < 15; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.animationDuration = (6 + Math.random() * 6) + "s";
    container.appendChild(p);
  }
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function updateDashboard() {
  // PM2.5 gauge (0-100 range)
  const pmPercent = Math.min(monitor.pm25 / 100, 1);
  const pmDeg = pmPercent * 360;
  const pmColor = monitor.pm25 < 25 ? "#4ADE80" : monitor.pm25 < 50 ? "#FFD93D" : "#EF4444";
  document.getElementById("gaugePM").style.background =
    `conic-gradient(${pmColor} ${pmDeg}deg, #E5E7EB ${pmDeg}deg)`;
  document.getElementById("pmValue").textContent = monitor.pm25;

  // CO2 gauge (0-2000 range)
  const co2Percent = Math.min(monitor.co2 / 2000, 1);
  const co2Deg = co2Percent * 360;
  const co2Color = monitor.co2 < 800 ? "#4ADE80" : monitor.co2 < 1200 ? "#FFD93D" : "#EF4444";
  document.getElementById("gaugeCO2").style.background =
    `conic-gradient(${co2Color} ${co2Deg}deg, #E5E7EB ${co2Deg}deg)`;
  document.getElementById("co2Value").textContent = monitor.co2;

  // Quality badge
  const badge = document.getElementById("qualityBadge");
  badge.textContent = monitor.quality;
  document.getElementById("qualityText").textContent = monitor.quality;

  // Color based on quality
  const colors = {
    "Excellent": { bg: "linear-gradient(135deg, #4ADE80, #22C55E)", text: "#4ADE80" },
    "Good":      { bg: "linear-gradient(135deg, #6DDCFF, #3B82F6)", text: "#3B82F6" },
    "Moderate":  { bg: "linear-gradient(135deg, #FFD93D, #F59E0B)", text: "#F59E0B" },
    "Poor":      { bg: "linear-gradient(135deg, #EF4444, #DC2626)", text: "#EF4444" }
  };
  const c = colors[monitor.quality] || colors["Good"];
  badge.style.background = c.bg;
  document.getElementById("qualityText").style.color = c.text;
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll(".fade-up, .timeline-step").forEach(el => observer.observe(el));
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

/* ============================================================
   NAVBAR SCROLL EFFECT
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 4px 20px rgba(109, 220, 255, 0.15)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
}

/* ============================================================
   INITIALIZE
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Render all sections
  renderNav();
  renderCards("problemGrid", problems);
  renderSolution();
  renderCards("featuresGrid", features);
  renderCards("componentsGrid", components, "component");
  renderTimeline();
  renderCards("osakaGrid", osakaReasons);
  renderCards("objectivesGrid", objectives);
  renderCards("futureGrid", futurePlans);
  renderParticles();

  // Dashboard
  updateDashboard();

  // Animations & interactions
  initScrollAnimations();
  initMobileMenu();
  initNavbarScroll();

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
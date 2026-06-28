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
  eggshell: "https://images.unsplash.com/photo-1569288063648-5b6b3b1c1c6c?w=400",
  carbon:   "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400",
  hepa:     "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
  fan:      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400",
  logo:     "assets/media/icon.png",
  // Team member placeholder images
  team1:    "assets/media/salsa.JPG",
  team2:    "assets/media/talitha.JPG",
  team3:    "assets/media/ahmad.JPG",
  team4:    "assets/media/adel.JPG",
  team5:    "assets/media/zaahir.JPG",
  team6:    "assets/media/jejak.JPG",
  team7:    "assets/media/safana.JPG",
  // Documentation images
  doc1:     "assets/media/doc1.png",
  doc2:     "assets/media/doc2.png",
  doc3:     "assets/media/doc3.JPG",
  // Engineering development images
  eng1: "assets/media/wokwi-prototype.jpg",
  eng2: "assets/media/early-case.jpeg",
  eng3: "assets/media/late-case.jpeg",
  eng4: "assets/media/lab-research.jpeg",
  eng5: "assets/media/activated-case.png",
  eng6: "assets/media/complete-case.JPG"
};

/* ========================= NAVIGATION ========================= */
const navItems = [
  { label: "Home",         href: "#home" },
  { label: "Problem",      href: "#problem" },
  { label: "Solution",     href: "#solution" },
  { label: "Features",     href: "#features" },
  { label: "Components",   href: "#components" },
  { label: "How It Works", href: "#how" },
  { label: "Dashboard",    href: "#dashboard" },
  { label: "Team & Docs",  href: "#team" },   // ← NEW
  { label: "Future",       href: "#future" }
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

/* ========================= TEAM MEMBERS ========================= */
const teamMembers = [
  {
    name: "Salsabila Feni Putri Subijanto",
    role: "Principal Investigator, Project Manager & Laboratory Technician",
    description: "Led the research, coordinated project execution, and supervised laboratory testing and documentation.",
    image: images.team1,
    social: { github: "", email: "mailto:salsabilafps@gmail.com", linkedin: "" }
  },
  {
    name: "Talitha Athallah Setiawan",
    role: "Logistics & Finance Coordinator, Laboratory Technician & Public Relations Officer",
    description: "Managed logistics, budgeting, laboratory support, and external communications throughout the project.",
    image: images.team2,
    social: { github: "", email: "mailto:talithaathallahsetiawan@gmail.com", linkedin: "" }
  },
  {
    name: "Ahmad Haziq",
    role: "Lead Systems Engineer, Embedded Programmer, Product Designer & Web Designer",
    description: "Designed the product enclosure and hardware layout, assembled and wired the system, developed the embedded software, and created the project's website.",
    image: images.team3,
    social: { github: "https://github.com/red-1v", email: "mailto:ahmadhaziq649@gmail.com", linkedin: "" }
  },
  {
    name: "Asadel Khairul Ijlal",
    role: "Technical Resources Coordinator, Pre-Material Processing & Laboratory Technician",
    description: "Supported laboratory experiments and assisted with the preparation and management of technical resources.",
    image: images.team4,
    social: { github: "", email: "mailto:asadelkhairul@gmail.com", linkedin: "" }
  },
  {
    name: "Zaahir Maulana Mahruzar",
    role: "Document & Data Curator, Sample Preparation Specialist & Laboratory Technician",
    description: "Managed project documentation and research data, prepared experimental samples, and supported laboratory activities.",
    image: images.team5,
    social: { github: "", email: "#", linkedin: "" }
  },
  {
    name: "Jejak Anugrah Cendikia",
    role: "Raw Material Pre-processing Specialist, Technical Resources Coordinator & Laboratory Technician",
    description: "Prepared raw materials, coordinated technical resources, and assisted with laboratory testing and experimentation.",
    image: images.team6,
    social: { github: "", email: "mailto:jejakanugrah3@gmail.com", linkedin: "" }
  },
  {
    name: "Safana Rizki Tri Tunggal Dewi",
    role: "Secretary, Media Documentarian & Laboratory Technician",
    description: "Handled project administration, documented project activities through media, and supported laboratory operations.",
    image: images.team7,
    social: { github: "", email: "mailto:safanarizkii@gmail.com", linkedin: "" }
  }
];

/* ========================= DOCUMENTATION ========================= */
const documentation = [
  {
    image: images.doc1,
    date: "May 2026",
    title: "Project Planning Session",
    description: "The team discussing research objectives, development milestones, and project planning during an early coordination meeting."
  },
  {
    image: images.doc2,
    date: "June 2026",
    title: "Laboratory Research",
    description: "Team members conducting laboratory experiments and preparing the natural filtration materials for AIRO."
  },
  {
    image: images.doc3,
    date: "June 2026",
    title: "Completed AIRO Prototype",
    description: "The research team presenting the completed AIRO prototype following successful integration, testing, and validation."
  }
];

/* ========================= ENGINEERING DEVELOPMENT ========================= */
const engineeringDevelopment = [
  {
    image: images.eng1,
    date: "May 2026",
    title: "Circuit Simulation & Validation",
    description: "Developed and validated the embedded circuit using Wokwi before physical implementation, confirming sensor communication and hardware logic.",
    milestone: "System Simulation",
    progress: 35
  },
  {
    image: images.eng2,
    date: "May 2026",
    title: "Enclosure Assembly",
    description: "Constructed the prototype housing, installed the display and dual-fan system, and prepared the enclosure for final hardware integration.",
    milestone: "Mechanical Design",
    progress: 50
  },
  {
    image: images.eng3,
    date: "June 2026",
    title: "Internal Electronics Assembly",
    description: "Integrated the ESP32, sensors, power modules, and internal wiring into the enclosure, ensuring reliable electrical connections and efficient component placement.",
    milestone: "System Assembly",
    progress: 70
  },
  {
    image: images.eng4,
    date: "June 2026",
    title: "Natural Filter Research",
    description: "Conducted laboratory research to develop and evaluate the eggshell-based filtration material, supporting AIRO's sustainable air purification system.",
    milestone: "Laboratory Research",
    progress: 85
  },
  {
    image: images.eng5,
    date: "June 2026",
    title: "Functional Prototype",
    description: "Successfully powered and validated the complete system, displaying real-time environmental data after integrating the electronics with the filtration chamber.",
    milestone: "Prototype Testing",
    progress: 95
  },
  {
    image: images.eng6,
    date: "June 2026",
    title: "Final AIRO Prototype",
    description: "Completed the fully integrated AIRO prototype, combining the embedded monitoring system with the natural filtration module into the finished product.",
    milestone: "Project Completion",
    progress: 100
  }
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
  // 👇 ADD THESE TWO LINES 👇
  if (images.logo) {
    // Find ALL elements with the class "logo-img" and update them
    const allLogos = document.querySelectorAll(".logo-img");
    allLogos.forEach(logo => {
      logo.src = images.logo;
    });
  }
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
    
    // 1. Randomize horizontal starting position
    p.style.left = Math.random() * 100 + "%";
    
    // 2. Randomize animation duration (between 6s and 12s) to prevent synchronization
    const duration = 6 + Math.random() * 6;
    
    // 3. Apply a NEGATIVE animation delay.
    // This starts the particle at a random point in its animation cycle,
    // scattering them vertically across the screen immediately.
    const delay = -(Math.random() * duration);
    
    // Apply the randomized timing via inline styles
    p.style.animationDuration = `${duration}s`;
    p.style.animationDelay = `${delay}s`;
    
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
   ENGINEERING PROGRESS BAR ANIMATION
   ============================================================ */
function initEngineeringAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".eng-card").forEach(card => observer.observe(card));
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

/* ========================= SOCIAL ICON SVGs ========================= */
const socialIcons = {
  github: '<svg viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg>',
  email:  '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>'
};

/* ========================= RENDER TEAM ========================= */
function renderTeam() {
  const container = document.getElementById("teamGrid");
  if (!container) return;
  container.innerHTML = teamMembers.map(member => {
    const socialHTML = member.social ? `
      <div class="team-social">
        ${member.social.github  ? `<a href="${member.social.github}"  class="social-btn" aria-label="GitHub">${socialIcons.github}</a>`  : ''}
        ${member.social.email   ? `<a href="${member.social.email}"   class="social-btn" aria-label="Email">${socialIcons.email}</a>`   : ''}
        ${member.social.linkedin? `<a href="${member.social.linkedin}" class="social-btn" aria-label="LinkedIn">${socialIcons.linkedin}</a>` : ''}
      </div>` : '';

    return `
      <div class="team-card fade-up">
        <div class="team-image-wrapper">
          ${member.image
            ? `<img src="${member.image}" alt="${member.name}" loading="lazy"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
               <div class="fallback-avatar" style="display:none">👤</div>`
            : `<div class="fallback-avatar">👤</div>`}
        </div>
        <h3 class="team-name">${member.name}</h3>
        <span class="team-role">${member.role}</span>
        <p class="team-desc">${member.description}</p>
        ${socialHTML}
      </div>`;
  }).join("");
}

/* ========================= RENDER DOCUMENTATION ========================= */
function renderDocs() {
  const container = document.getElementById("docsGrid");
  if (!container) return;
  container.innerHTML = documentation.map(doc => `
    <article class="doc-card fade-up">
      <div class="doc-image">
        ${doc.image
          ? `<img src="${doc.image}" alt="${doc.title}" loading="lazy"
                 onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
             <div class="fallback-doc" style="display:none">📷</div>`
          : `<div class="fallback-doc">📷</div>`}
      </div>
      <div class="doc-content">
        <span class="doc-date">${doc.date}</span>
        <h3 class="doc-title">${doc.title}</h3>
        <p class="doc-desc">${doc.description}</p>
        <a href="${doc.image || '#'}" target="_blank" rel="noopener" class="doc-btn">
          View Full Image →
        </a>
      </div>
    </article>
  `).join("");
}

/* ========================= RENDER ENGINEERING DEVELOPMENT ========================= */
function renderEngineering() {
  const container = document.getElementById("engGrid");
  if (!container) return;

  container.innerHTML = engineeringDevelopment.map(item => {
    const milestoneHTML = item.milestone
      ? `<div class="eng-milestone">${item.milestone}</div>`
      : '';

    const progressHTML = (typeof item.progress === 'number')
      ? `
        <div class="eng-progress">
          <div class="eng-progress-header">
            <span>Progress</span>
            <span class="eng-progress-value">${item.progress}%</span>
          </div>
          <div class="eng-progress-bar">
            <div class="eng-progress-fill" style="--progress: ${item.progress}%"></div>
          </div>
        </div>`
      : '';

    return `
      <article class="eng-card fade-up">
        <span class="eng-accent-badge">Engineering</span>
        <div class="eng-image">
          ${item.image
            ? `<img src="${item.image}" alt="${item.title}" loading="lazy"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
               <div class="fallback-eng" style="display:none">🔧</div>`
            : `<div class="fallback-eng">🔧</div>`}
        </div>
        <div class="eng-content">
          <span class="eng-date">${item.date}</span>
          <h3 class="eng-title">${item.title}</h3>
          <p class="eng-desc">${item.description}</p>
          ${milestoneHTML}
          ${progressHTML}
        </div>
      </article>`;
  }).join("");
}

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

  // Team & Documentation
  renderTeam();
  renderDocs();
  renderEngineering();   // ← NEW

  // Dashboard
  updateDashboard();

  // Animations & interactions
  initScrollAnimations();
  initEngineeringAnimations();   // ← NEW
  initMobileMenu();
  initNavbarScroll();

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
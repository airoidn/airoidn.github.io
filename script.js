/**
 * AIRO — Main JavaScript
 * Handles: navbar, background fade, scroll reveal, stats, canvas, mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
  renderSiteContent();
  initNavbar();
  initBackgroundFade();
  initScrollReveal();
  initStatCounters();
  initHeroCanvas();
  initMobileMenu();
});


/* ──────────────────────────────────────────────────────────
   0. CONTENT RENDERING — centralized media and component data
   ────────────────────────────────────────────────────────── */
function renderSiteContent() {
  const content = window.AIRO_CONTENT || {};
  renderConfiguredMedia(content.media || {});
  renderHeroStats(content.heroStats || []);
  renderPowerNote(content.powerDisclaimer || '');
  renderComponents(content.components || []);
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[char]));
}

function renderConfiguredMedia(media) {
function applyImage(img, item) {
  // Reset classes first
  img.classList.remove('media-loaded', 'media-failed');
  
  // Set image attributes
  img.src = item.src;
  img.alt = item.alt || '';
  img.loading = item.loading || 'lazy';
  img.decoding = item.decoding || 'async';
  
  // Handle successful load
  img.onload = () => {
    img.classList.add('media-loaded');
    img.classList.remove('media-failed');
  };
  
  // Handle load error
  img.onerror = () => {
    img.classList.add('media-failed');
    img.classList.remove('media-loaded');
    console.warn(`🖼️ Failed to load: ${item.src}`);
  };
}

  document.querySelectorAll('[data-media-figure]').forEach((figure) => {
    const key = figure.dataset.mediaFigure;
    const item = media[key];
    if (!item || !item.src || item.enabled === false) return;

    const caption = item.creditUrl
      ? `${escapeHTML(item.caption)} · <a href="${escapeHTML(item.creditUrl)}" target="_blank" rel="noopener">${escapeHTML(item.creditText || 'Source')}</a>`
      : escapeHTML(item.caption || '');

    figure.innerHTML = `
      <img>
      ${caption ? `<figcaption class="problem-img-label">${caption}</figcaption>` : ''}
    `;
    applyImage(figure.querySelector('img'), item);
  });

  document.querySelectorAll('img[data-media-img]').forEach((img) => {
    const item = media[img.dataset.mediaImg];
    if (item && item.src && item.enabled !== false) applyImage(img, item);
  });

  document.querySelectorAll('[data-media-bg]').forEach((el) => {
    const item = media[el.dataset.mediaBg];
    if (item && item.src && item.enabled !== false) el.style.backgroundImage = `url("${item.src}")`;
  });
}

function renderHeroStats(stats) {
  const target = document.querySelector('[data-hero-stats]');
  if (!target || !stats.length) return;

  target.innerHTML = stats.map((stat) => {
    const suffix = stat.suffix ? `<sup>${escapeHTML(stat.suffix)}</sup>` : '';
    return `
      <div class="hero-stat">
        <div class="num">${escapeHTML(stat.value)}${suffix}</div>
        <div class="lbl">${escapeHTML(stat.label)}</div>
      </div>
    `;
  }).join('');
}

function renderPowerNote(note) {
  document.querySelectorAll('[data-power-note]').forEach((el) => {
    el.textContent = note;
    el.hidden = !note;
  });
}

const componentIcons = {
  solar: `
    <rect x="6" y="14" width="36" height="22" rx="3" stroke="currentColor" stroke-width="1.4"/>
    <line x1="16" y1="14" x2="16" y2="36" stroke="currentColor" stroke-width="0.9" opacity="0.45"/>
    <line x1="26" y1="14" x2="26" y2="36" stroke="currentColor" stroke-width="0.9" opacity="0.45"/>
    <line x1="36" y1="14" x2="36" y2="36" stroke="currentColor" stroke-width="0.9" opacity="0.45"/>
    <line x1="6" y1="25" x2="42" y2="25" stroke="currentColor" stroke-width="0.9" opacity="0.45"/>
    <line x1="12" y1="8" x2="16" y2="13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <line x1="24" y1="6" x2="24" y2="12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <line x1="36" y1="8" x2="32" y2="13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="24" cy="42" r="2" fill="currentColor"/>
  `,
  hepa: `
    <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="1.4"/>
    <circle cx="24" cy="24" r="10" stroke="currentColor" stroke-width="0.9" opacity="0.5"/>
    <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.22"/>
    <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
    <line x1="24" y1="8" x2="24" y2="14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="24" y1="34" x2="24" y2="40" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="8" y1="24" x2="14" y2="24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="34" y1="24" x2="40" y2="24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  `,
  battery: `
    <rect x="8" y="18" width="32" height="14" rx="3" stroke="currentColor" stroke-width="1.4"/>
    <rect x="40" y="21" width="4" height="8" rx="1" fill="currentColor" opacity="0.45"/>
    <rect x="12" y="20" width="7" height="10" rx="1" fill="currentColor" opacity="0.75"/>
    <rect x="21" y="20" width="7" height="10" rx="1" fill="currentColor" opacity="0.5"/>
    <rect x="30" y="20" width="3" height="10" rx="1" fill="currentColor" opacity="0.22"/>
  `,
  sensor: `
    <rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" stroke-width="1.4"/>
    <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.25"/>
    <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
    <path d="M19 19 A7 7 0 0 1 29 19" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <path d="M15 15 A13 13 0 0 1 33 15" stroke="currentColor" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.4"/>
  `,
  housing: `
    <rect x="14" y="8" width="20" height="34" rx="6" stroke="currentColor" stroke-width="1.4"/>
    <line x1="14" y1="18" x2="34" y2="18" stroke="currentColor" stroke-width="0.9" opacity="0.4"/>
    <line x1="14" y1="32" x2="34" y2="32" stroke="currentColor" stroke-width="0.9" opacity="0.4"/>
    <circle cx="24" cy="38" r="2" fill="currentColor" opacity="0.55"/>
    <line x1="19" y1="12" x2="29" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  `,
  carbon: `
    <path d="M24 6 L42 17 L42 31 L24 42 L6 31 L6 17 Z" stroke="currentColor" stroke-width="1.4" fill="none"/>
    <path d="M24 14 L36 21 L36 27 L24 34 L12 27 L12 21 Z" stroke="currentColor" stroke-width="0.9" opacity="0.45" fill="none"/>
    <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.25"/>
    <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
  `
};

function renderComponents(components) {
  const target = document.querySelector('[data-components-list]');
  if (!target || !components.length) return;

  target.innerHTML = components.map((component, index) => {
    const delay = index % 4 ? ` d${index % 4}` : '';
    const specs = (component.specs || []).map(([key, value]) => `
      <li><span class="spec-k">${escapeHTML(key)}</span><span class="spec-v">${escapeHTML(value)}</span></li>
    `).join('');

    return `
      <article class="component-card rv${delay}">
        <div class="card-index">${String(index + 1).padStart(2, '0')} / ${escapeHTML(component.category)}</div>
        <svg class="card-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          ${componentIcons[component.icon] || componentIcons.sensor}
        </svg>
        <h3 class="card-title">${escapeHTML(component.title)}</h3>
        <p class="card-desc">${escapeHTML(component.description)}</p>
        <ul class="card-specs">${specs}</ul>
        <div class="card-bar" aria-hidden="true"></div>
      </article>
    `;
  }).join('');
}

/* ──────────────────────────────────────────────────────────
   1. NAVBAR — hide on scroll-down, reveal on scroll-up
   ────────────────────────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  let prevY = window.scrollY;
  let ticking = false;
  const threshold = 60;
  const revealDelta = 8;

  function update(y) {
    const scrollingDown = y > prevY + revealDelta;
    const scrollingUp = y < prevY - revealDelta;

    nav.classList.toggle('nav-scrolled', y > threshold);

    if (scrollingDown && y > 120) {
      nav.classList.add('nav-hidden');
    }

    if (scrollingUp || y <= threshold) {
      nav.classList.remove('nav-hidden');
    }

    prevY = y;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        update(window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update(window.scrollY);
}

/* ──────────────────────────────────────────────────────────
   2. SECTION-BASED COLOR ANCHORS — CSS-driven background/text fade
   ────────────────────────────────────────────────────────── */
function initBackgroundFade() {
  const root = document.documentElement;
  const sections = [...document.querySelectorAll('section[id]')];
  if (!sections.length) return;

  const themes = {
    hero: {
      bg: 'rgb(238, 244, 255)',
      text: 'rgb(10, 22, 40)',
      muted: 'rgb(58, 79, 106)',
      statsText: 'rgb(10, 22, 40)',
      statsLabel: 'rgb(82, 102, 126)',
      navText: 'rgb(10, 22, 40)',
      navSurface: 'rgba(238, 244, 255, 0.74)',
      navBorder: 'rgba(10, 22, 40, 0.08)',
      theme: 'light'
    },
    problem: {
      bg: 'rgb(10, 22, 40)',
      text: 'rgb(232, 240, 255)',
      muted: 'rgb(176, 192, 212)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(176, 192, 212)',
      navText: 'rgb(232, 240, 255)',
      navSurface: 'rgba(4, 8, 15, 0.82)',
      navBorder: 'rgba(0, 229, 160, 0.12)',
      theme: 'dark'
    },
    solution: {
      bg: 'rgb(8, 14, 25)',
      text: 'rgb(232, 240, 255)',
      muted: 'rgb(151, 169, 190)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(151, 169, 190)',
      navText: 'rgb(232, 240, 255)',
      navSurface: 'rgba(4, 8, 15, 0.84)',
      navBorder: 'rgba(0, 229, 160, 0.12)',
      theme: 'dark'
    },
    components: {
      bg: 'rgb(8, 14, 25)',
      text: 'rgb(232, 240, 255)',
      muted: 'rgb(151, 169, 190)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(151, 169, 190)',
      navText: 'rgb(232, 240, 255)',
      navSurface: 'rgba(4, 8, 15, 0.84)',
      navBorder: 'rgba(0, 229, 160, 0.12)',
      theme: 'dark'
    },
    contact: {
      bg: 'rgb(4, 8, 15)',
      text: 'rgb(232, 240, 255)',
      muted: 'rgb(151, 169, 190)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(151, 169, 190)',
      navText: 'rgb(232, 240, 255)',
      navSurface: 'rgba(4, 8, 15, 0.88)',
      navBorder: 'rgba(0, 229, 160, 0.12)',
      theme: 'dark'
    }
  };

  let currentThemeId = '';
  let ticking = false;

  function applyTheme(themeId) {
    const theme = themes[themeId];
    if (!theme || themeId === currentThemeId) return;

    root.dataset.theme = theme.theme;
    root.style.setProperty('--theme-bg', theme.bg);
    root.style.setProperty('--theme-text', theme.text);
    root.style.setProperty('--theme-muted', theme.muted);
    root.style.setProperty('--stats-text', theme.statsText);
    root.style.setProperty('--stats-label', theme.statsLabel);
    root.style.setProperty('--nav-text', theme.navText);
    root.style.setProperty('--nav-surface', theme.navSurface);
    root.style.setProperty('--nav-border', theme.navBorder);
    currentThemeId = themeId;
  }

  function getActiveSection() {
    const anchor = window.innerHeight * 0.42;
    let active = sections[0].id;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= anchor && rect.bottom >= anchor) {
        active = section.id;
      }
    });

    return themes[active] ? active : 'hero';
  }

  function updateTheme() {
    applyTheme(getActiveSection());
  }

  function onScrollOrResize() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateTheme();
        ticking = false;
      });
      ticking = true;
    }
  }

  applyTheme(getActiveSection());
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize, { passive: true });
  window.addEventListener('hashchange', updateTheme);
}

/* ──────────────────────────────────────────────────────────
   3. SCROLL REVEAL — IntersectionObserver
   ────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  document.querySelectorAll('.rv').forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────────────────────
   4. STAT COUNTER ANIMATION
   ────────────────────────────────────────────────────────── */
function initStatCounters() {
  const cells = document.querySelectorAll('[data-target]');
  if (!cells.length) return;

  let triggered = false;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCell(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const dec = parseInt(el.dataset.decimal || '0', 10);
    const duration = 1600;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const val = target * easeOut(progress);
      el.textContent = val.toFixed(dec) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  const grid = document.querySelector('.stats-grid');
  if (grid) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          triggered = true;
          cells.forEach(animateCell);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(grid);
  }
}

/* ──────────────────────────────────────────────────────────
   5. HERO CANVAS — floating air-particle field (optimized)
   ────────────────────────────────────────────────────────── */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let animationId = null;
  let particles = [];
  let resizeTimeout;
  let frame = 0;

  function initParticles() {
    const N = Math.min(70, Math.floor(window.innerWidth / 15));
    particles = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.0004,
      vy: -(Math.random() * 0.0008 + 0.0002),
      op: Math.random() * 0.35 + 0.05,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function handleResize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    initParticles();
  }

  function onResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
  }

  function draw() {
    if (document.hidden) return;

    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
      if (p.x < -0.02) p.x = 1.02;
      if (p.x > 1.02) p.x = -0.02;

      const pulse = 0.5 + 0.5 * Math.sin(frame * 0.02 + p.phase);
      const alpha = p.op * pulse;

      ctx.beginPath();
      ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(41, 121, 255, ${alpha})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(draw);
  }

  handleResize();
  draw();

  window.addEventListener('resize', onResize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationId) cancelAnimationFrame(animationId);
      animationId = null;
    } else if (!animationId) {
      draw();
    }
  });
}

/* ──────────────────────────────────────────────────────────
   6. MOBILE MENU — accessible toggle
   ────────────────────────────────────────────────────────── */
function initMobileMenu() {
  const toggle = document.getElementById('nav-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  menu.addEventListener('click', (e) => {
    if (e.target === menu) closeMenu();
  });

  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
      toggle.focus();
    }
  });
}

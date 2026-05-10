/**
 * AIRO — Main JavaScript
 * Handles: navbar, background fade, scroll reveal, stats, canvas, mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackgroundFade();
  initScrollReveal();
  initStatCounters();
  initHeroCanvas();
  initMobileMenu();
});

/* ──────────────────────────────────────────────────────────
   1. NAVBAR — hide on scroll-down, reveal on scroll-up
   ────────────────────────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  
  let prevY = 0;
  let ticking = false;
  const threshold = 60;

  function update(y) {
    nav.classList.toggle('nav-scrolled', y > threshold);
    
    if (y > prevY && y > 100) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    prevY = y;
  }

  // Throttled scroll handler
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


// Add this helper after initBackgroundFade
function initProblemTextColors() {
  const problemSection = document.getElementById('problem');
  const textEls = ['#problem-heading', '#prob-t1', '#prob-t2', '#prob-t3']
    .map(s => document.querySelector(s))
    .filter(Boolean);
  
  if (!problemSection || !textEls.length) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const isInView = entry.isIntersecting;
        textEls.forEach(el => {
          if (isInView) {
            // Dark section = light text
            el.style.color = 'var(--dark-text)';
            el.style.opacity = isInView ? '1' : '0.75';
          } else {
            // Light section = dark text (hero area)
            el.style.color = 'var(--light-text)';
            el.style.opacity = '0.75';
          }
        });
      });
    },
    { threshold: 0.25 }
  );
  
  observer.observe(problemSection);
}

// Call this in DOMContentLoaded alongside other inits
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackgroundFade();      // ← Updated section-based version
  initProblemTextColors();   // ← NEW: handles problem text specifically
  initScrollReveal();
  initStatCounters();
  initHeroCanvas();
  initMobileMenu();
});

/* ──────────────────────────────────────────────────────────
   2. SECTION-BASED COLOR ANCHORS — Simple, reliable triggers
   ────────────────────────────────────────────────────────── */
function initBackgroundFade() {
  const bg = document.getElementById('bg');
  if (!bg) return;

  // Section themes: [sectionId, {bg, statsText, statsLabel, bodyText}]
  const themes = {
    'hero': {
      bg: 'rgb(238, 244, 255)',
      statsText: 'rgb(10, 22, 40)',
      statsLabel: 'rgb(106, 127, 150)',
      bodyText: 'rgb(10, 22, 40)'
    },
    'problem': {
      bg: 'rgb(10, 22, 40)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(136, 153, 170)',
      bodyText: 'rgb(232, 240, 255)'
    },
    'solution': {
      bg: 'rgb(8, 14, 25)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(136, 153, 170)',
      bodyText: 'rgb(232, 240, 255)'
    },
    'components': {
      bg: 'rgb(8, 14, 25)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(136, 153, 170)',
      bodyText: 'rgb(232, 240, 255)'
    },
    'contact': {
      bg: 'rgb(4, 8, 15)',
      statsText: 'rgb(232, 240, 255)',
      statsLabel: 'rgb(136, 153, 170)',
      bodyText: 'rgb(232, 240, 255)'
    }
  };

  const root = document.documentElement;
  let currentTheme = null;
  let isAnimating = false;

  function applyTheme(themeId, animate = true) {
    const theme = themes[themeId];
    if (!theme || themeId === currentTheme) return;
    
    if (!animate) {
      // Instant apply (for reduced motion or initial load)
      bg.style.background = theme.bg;
      root.style.setProperty('--stats-text', theme.statsText);
      root.style.setProperty('--stats-label', theme.statsLabel);
      currentTheme = themeId;
      return;
    }
    
    if (isAnimating) return;
    isAnimating = true;
    
    // Get current background for interpolation
    const currentBg = bg.style.background || themes.hero.bg;
    const currentMatch = currentBg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    const [cr, cg, cb] = currentMatch 
      ? [parseInt(currentMatch[1]), parseInt(currentMatch[2]), parseInt(currentMatch[3])]
      : [238, 244, 255];
    
    const targetMatch = theme.bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    const [tr, tg, tb] = targetMatch 
      ? [parseInt(targetMatch[1]), parseInt(targetMatch[2]), parseInt(targetMatch[3])]
      : [238, 244, 255];
    
    const duration = 500;
    const start = performance.now();
    
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      const r = Math.round(cr + (tr - cr) * eased);
      const g = Math.round(cg + (tg - cg) * eased);
      const b = Math.round(cb + (tb - cb) * eased);
      
      bg.style.background = `rgb(${r},${g},${b})`;
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Finalize CSS variables
        root.style.setProperty('--stats-text', theme.statsText);
        root.style.setProperty('--stats-label', theme.statsLabel);
        currentTheme = themeId;
        isAnimating = false;
      }
    }
    requestAnimationFrame(step);
  }

  // Simple scroll-based section detection (more reliable than IntersectionObserver for this use case)
  function onScroll() {
    const scrollY = window.scrollY;
    const viewportH = window.innerHeight;
    
    // Check which section is most visible in viewport
    for (const [sectionId, theme] of Object.entries(themes)) {
      const section = document.getElementById(sectionId);
      if (!section) continue;
      
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollY;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      // Trigger when section top is within top 40% of viewport
      const triggerPoint = sectionTop - viewportH * 0.4;
      
      if (scrollY >= triggerPoint - 50 && scrollY < triggerPoint + viewportH * 0.6) {
        applyTheme(sectionId);
        return;
      }
    }
  }

  // Initial apply
  applyTheme('hero', false);
  
  // Throttled scroll listener
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(onScroll, 50);
  }, { passive: true });
  
  // Also check on resize
  window.addEventListener('resize', onScroll, { passive: true });
  
  // Initial check
  onScroll();
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
          observer.unobserve(entry.target); // Only animate once
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
  
  // Debounced resize handler
  let resizeTimeout;
  function handleResize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    initParticles();
  }
  
  function onResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
  }
  
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

  let frame = 0;
  function draw() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
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
  
  // Initialize
  handleResize();
  draw();
  
  // Event listeners
  window.addEventListener('resize', onResize, { passive: true });
  
  // Pause animation when tab is hidden (performance)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationId) cancelAnimationFrame(animationId);
    } else {
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
    document.body.style.overflow = 'hidden'; // Prevent background scroll
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
  
  // Close on overlay click
  menu.addEventListener('click', (e) => {
    if (e.target === menu) closeMenu();
  });
  
  // Close on link click
  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
      toggle.focus();
    }
  });
}
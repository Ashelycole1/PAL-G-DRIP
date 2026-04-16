// Premium E-Commerce Scripts for Pal G Drip House

// --- THEME SWITCHER ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeUI(currentTheme);
  
  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
  });
}

function updateThemeUI(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' ? '<span>🌙</span> Dark Mode' : '<span>☀️</span> Light Mode';
}

// --- CURSOR ---
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  
  document.querySelectorAll('a, button, .modern-card, .btn, .cat-pill').forEach(el => {
    el.addEventListener('mouseenter', () => { 
      cursor.style.width = '60px'; 
      cursor.style.height = '60px'; 
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      cursor.style.backgroundColor = isLight ? 'rgba(94, 53, 177, 0.1)' : 'rgba(197, 160, 89, 0.15)';
    });
    el.addEventListener('mouseleave', () => { 
      cursor.style.width = '12px'; 
      cursor.style.height = '12px'; 
      cursor.style.backgroundColor = 'var(--accent)';
    });
  });
}

// --- SLIDESHOW ---
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// --- HEADER SCROLL ---
function initHeaderScroll() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

// --- REVEAL ---
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));
}

// --- INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCursor();
  initSlideshow();
  initHeaderScroll();
  initReveal();
});

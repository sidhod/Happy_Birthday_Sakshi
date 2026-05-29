// Set current year in footer
document.querySelector('.year').textContent = `© ${new Date().getFullYear()}`;

// Scroll reveal animation
const reveals = document.querySelectorAll('.section, .dark-section');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('nameInput').value.trim();
  const msg = document.getElementById('formMsg');
  msg.textContent = `Thanks ${name}! Your message was received. 🎉`;
  this.reset();
  setTimeout(() => msg.textContent = '', 4000);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  document.querySelectorAll('nav a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

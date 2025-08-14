/* Simple JS – mobile nav toggle & carousel */

/* Mobile navigation (optional) – show/hide links on small screens */
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.site-header');

header.addEventListener('click', e => {
  if (e.target.closest('nav')) return;
  nav.classList.toggle('open');
});

/* Very lightweight testimonial carousel */
const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
showSlide(current);
setInterval(nextSlide, 4000); // 4 s per slide

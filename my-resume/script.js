// Responsive Menu
const menuToggle = document.querySelector('#menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', function () {
    siteNav.classList.toggle('open');
    const isOpen = siteNav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Active Nav highlight
let currentPage = window.location.pathname.split('/').pop();
if (currentPage === '') {
  currentPage = 'index.html';
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(function (link) {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Person Switcher on index.html
function switchProfile(personId) {
  const p1 = document.getElementById('profile-person-1');
  const p2 = document.getElementById('profile-person-2');
  const btn1 = document.getElementById('btn-person-1');
  const btn2 = document.getElementById('btn-person-2');

  if (p1 && p2 && btn1 && btn2) {
    if (personId === 1) {
      p1.style.display = 'block';
      p2.style.display = 'none';
      btn1.classList.add('active');
      btn2.classList.remove('active');
    } else {
      p1.style.display = 'none';
      p2.style.display = 'block';
      btn2.classList.add('active');
      btn1.classList.remove('active');
    }
  }
}

// THIS IS THE LIGHTBOX AND SCROLL ANIMATION SCRIPT
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery img');
  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.innerHTML = '<span class="lightbox-close">&times;</span><img class="lightbox-img">';
  document.body.appendChild(modal);

  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      modal.querySelector('.lightbox-img').src = this.src;
      modal.classList.add('active');
    });
  });

  modal.addEventListener('click', () => modal.classList.remove('active'));
  modal.querySelector('.lightbox-close').addEventListener('click', (e) => {
    e.stopPropagation();
    modal.classList.remove('active');
  });
});
const observerOptions = {
  threshold: 0.05,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section, .gallery, img:not(.pfp)').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
/* THIS IS THE CLASS MANIPULATION AND EVENT LISTENER SCRIPT BUTTON
const headline = document.querySelector('#header h1');
  function addClassName() {
    headline.classList.add('fancy');
    console.log('Class added!');
}

function removeClassName() {
  headline.classList.remove('fancy');
  console.log('Class removed!');


const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");

firstButton.addEventListener("click", function() {
    alert("You clicked the first button!");
});
secondButton.addEventListener("click", function() {
    alert("You clicked the second button!");
});
*/
const navbar = document.querySelector('.navbar');
 function addClassName() {
      navbar.classList.add('fixed');
 }
 function removeClassName() {
      navbar.classList.remove('fixed');
 }
window.onscroll = function(){
  if (window.scrollY > 0) {
    addClassName();
  } else {
    removeClassName();
  }
};
// end of scroll script

const mainNav = document.querySelector('.dropdown-content');
const navLink = document.querySelectorAll('a');
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function(e) {
    alertMessage();
  });
}

function alertMessage() {
  alert('You clicked a navigation link!');
  setTimeout(() => { /* alert can't close programmatically */ }, 1);
}


// BURGER MENU SCRIPT
const burger = document.getElementById('burger');
const menu = document.querySelector('.dropdown');

burger.addEventListener('click', function() {
  menu.classList.toggle('active');
});

menu.addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
    menu.classList.toggle('active');
  }
});
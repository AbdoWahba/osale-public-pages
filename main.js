let items_allla = document.querySelectorAll(
  'body > *:not(.main-nav):not(script)'
);
console.log(items_allla);

function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  console.log('are you closed');
  document.getElementById('mySidenav').style.width = '0';
}

$('.carousel').carousel({
  interval: 3000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
});

$('#main-container').click(closeNav);

const slider = document.querySelector('.card--slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

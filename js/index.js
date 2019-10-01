// Your code goes here

// #1 -- "mouse enter"
const leftButton = document.querySelector('.btn');
leftButton.addEventListener('mouseenter', () => {
  leftButton.style.transform = 'scale(1.5)';
  leftButton.style.transition = 'all 0.5s';
});

// #2 -- "mouse leave "
leftButton.addEventListener('mouseleave', () => {
  leftButton.style.transform = 'scale(1.0)';
  leftButton.style.transition = 'all 0.5s';
});

//#3 -- "click"

document.querySelectorAll('.nav-link').forEach(el => {
  el.addEventListener('click', () => {
    el.style.color = 'lightblue';
  });
});

// #4 --"mouse over"
const welcomeGreen = document.querySelector('h2');
welcomeGreen.addEventListener(
  'mouseover',
  function(event) {
    event.target.style.color = 'green';
    setTimeout(function() {
      event.target.style.color = '';
    }, 500);
  },
  false,
);

// #5 -- "load"
window.addEventListener('load', e => {
  console.log('page is fully loaded');
});

// #6 -- "resize"

const vwBus = document.querySelector('.fun-bus');
window.addEventListener('resize', () => {
  vwBus.src = 'img/vwBus.jpg';
});

// #7 -- "scroll"
const body = document.querySelector('body');
window.addEventListener('scroll', () => {
  body.style.backgroundColor = 'magenta';
});

// #8 -- "dblclick"

const funBusLogo = document.querySelector('.logo-heading');

funBusLogo.addEventListener('dblclick', function(e) {
  funBusLogo.classList.toggle('large');
});
// #9 -- "mouse enter"
const footer = document.querySelector('footer');
footer.addEventListener('mouseenter', () => {
  footer.style.transform = 'scale(3.5)';
  footer.style.transition = 'all 0.5s';
});

// #10 -- "mouse leave "
footer.addEventListener('mouseleave', () => {
  footer.style.transform = 'scale(1.0)';
  footer.style.transition = 'all 0.5s';
});

//Prevent Default
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(i =>
  i.addEventListener('click', e => {
    e.preventDefault();
  }),
);

//Stop Propagation

const body2 = document.querySelector('body');
body2.addEventListener('click', () => {
  body2.style.backgroundColor = 'purple';
});
const homeColor = document.querySelector('.home');
homeColor.addEventListener('click', e => {
  homeColor.style.backgroundColor = 'blue';
  console.log(body);
  e.stopPropagation();
});

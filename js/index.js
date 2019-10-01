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

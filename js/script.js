const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active')
    let totalSeeds = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeeds * cost;
    totalPriceTag.textContent = totalPrice;

  }
});

menuButton.addEventListener('click', () => {
  console.log('Click to menu');
  menu.style.display = 'block';
  menu.classList.toggle('is-open');

})
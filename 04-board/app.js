const board = document.querySelector('#board');
const colors = ['#28C76F', '#9708CC', '#FCFF00', '#E96D71', '#3CD500', '#2376DD'];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
};

function setColor(e) {
  const element = e.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(e) {
  const element = e.target;
  element.style.backgroundColor = '';
  element.style.boxShadow = '';
};

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
};
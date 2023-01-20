function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color');
const color = document.querySelector('span.color')
const body=document.querySelector('body')

changeColor.addEventListener('click', (e) => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNum = document.querySelector('#controls>input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
  const boxesTable = []
  for (let i=0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.background = getRandomHexColor()
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;

    boxesTable.push(div)
  }
  return boxesTable
}

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(inputNum.value)
	boxes.append(...boxesToAdd)
})
console.log(inputNum.value)

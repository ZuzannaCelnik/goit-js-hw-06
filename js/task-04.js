let counterValue = 0

const addButton = document.querySelector('[data-action="increment"]');
const minusButton = document.querySelector('[data-action="decrement"]');
const displayCounter = document.querySelector('#value')


const addValue = (e) => {
    counterValue++
    displayCounter.textContent=counterValue
}

const minusValue = (e) => {
    counterValue--
    displayCounter.textContent=counterValue

}

addButton.addEventListener('click', addValue);
minusButton.addEventListener('click', minusValue);
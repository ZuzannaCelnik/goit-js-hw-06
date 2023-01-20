const displayName = document.querySelector('#name-output');
const inputName = document.querySelector('#name-input');

inputName.addEventListener('input', (e) => {
    displayName.textContent = e.target.value;
    if (e.target.value === '') {
        displayName.textContent='Anonymous'
    }
})

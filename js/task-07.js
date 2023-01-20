const size = document.querySelector('#font-size-control');
const output = document.querySelector('#text')

size.addEventListener('input', (e) => {
    output.style.fontSize = `${e.target.value}px`
})

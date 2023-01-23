const size = document.querySelector('input#font-size-control');
const output = document.querySelector('span#text')

output.style.fontSize='56px'

size.addEventListener('input', (e) => {
    output.style.fontSize = `${e.target.value}px`
})

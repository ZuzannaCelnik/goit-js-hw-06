const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`)

const itemsList = document.querySelectorAll('li.item')
itemsList.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`)
})
    

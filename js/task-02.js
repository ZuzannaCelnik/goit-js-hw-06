const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')

const itemsArray=[]

ingredients.forEach((el) => {
  const ingrid = document.createElement('li')
  ingrid.className='item'
  ingrid.textContent = el
  itemsArray.push(ingrid)
})

list.append(...itemsArray)
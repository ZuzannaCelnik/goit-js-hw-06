const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

const gallery = images
.map((image)=> `<li><img class="itemImg"src="${image.url}", width='400', alt="${image.alt}"></li>`)
.join('');

list.insertAdjacentHTML("afterbegin",gallery)


const pictures = document.querySelectorAll('.itemImg');

pictures.style.display = 'flex'
pictures.style.justifyContent = 'center'
pictures.style.boxSizing = 'border-box'
pictures.style.flexWrap = 'column-reverse'
pictures.style.gap = '20px'
pictures.style.listStyle = 'none'


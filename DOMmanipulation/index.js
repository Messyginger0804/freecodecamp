// DOM Manipulation part 2

// const title = document.querySelector('#main-heading');

// console.log(title);
// title.style.color = 'red'


// const listItems = document.querySelector('.list-items');

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '6rem';
// }

// console.log(listItems);



//======Creating Element================================

const ul = document.querySelector('ul');
const li = document.createElement('li');

/// adding elements
ul.appendChild(li);

// modifying content 

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = 'DCEU'


/// =====Modifying Attributes and Classes =================================

li.setAttribute('id', 'main-header')

li.removeAttribute('id')

const title = document.querySelector('#main-heading')
console.log(title.getAttribute('class') || 'fuck you')



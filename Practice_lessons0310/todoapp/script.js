// write to-do app

// use local storage to put the items in array
// use json parse to get items
// else initialize ampty array

// add event listener for the form submir
// push the items inside items Array

// save it in localStorage

// event listener for click button

const form = document.querySelector('form')
const input = document.querySelector('#item')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

let itemsArray = [];

if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'));
} else {
    itemsArray = []
}

// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse((localStorage.getItem('items')))

// using ternary 
// let itemsArrayNew = localStorage.getItem('items')
//     ? Json.parse(localStorage.getItem(items))
//     : [];

// list of atyims and append to html
const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

// add event listener for the form submir
form.addEventListener('submit', function (e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value),
        input.value = '';
})

// iterate over data
itemsArray.forEach((item) => {
    liMaker(item);
})

// event listener to button
button.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    itemsArray = [];
})
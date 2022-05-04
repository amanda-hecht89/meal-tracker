// import functions and grab DOM elements
const recipe = document.getElementById('list'); 
const form = document.getElementById('ingredient-list');
const button = document.getElementById('add');
const remove = document.getElementById('remove');
const listedingredients = document.getElementById('listed');


import { renderIngredient } from './utils.js';

// let state
let ingredientArray = [];
console.log(ingredientArray);
let totalstuff = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const totalList = new FormData(form);

    let ingredients = {
        name: totalList.get('food'),
        quantity: totalList.get('amount'),
        measurement: totalList.get('measure'),
    };
    ingredientArray.push(ingredients);
    console.log(ingredientArray);

    displayingredients();
    form.reset;
});

remove.addEventListener('click', () => {
    totalstuff.pop();
    displayingredients();
});

function displayingredients() {
    listedingredients.textcontent = '';
    for (let list of ingredientArray) {
        const li = renderIngredient(list);
        listedingredients.appendChild(li);
    }
}
//function displayingredients(list) {
  //  const li  = document.createElement('li');
    //li.textContent = `${list.quantity} ${list.measurement} ${list.name}`;
    //return li;


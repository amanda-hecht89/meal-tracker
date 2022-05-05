// import functions and grab DOM elements
const recipe = document.getElementById('list'); 
const form = document.getElementById('ingredient-list');
const button = document.getElementById('add');
const remove = document.getElementById('remove');
const listedingredients = document.getElementById('listed');
const save = document.getElementById('save-meal');
const meal = document.getElementById('meal-input');

import { renderIngredient } from './utils.js';

// let state
let mealsArray = [];
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
    totalstuff.push(ingredients);
  

    displayingredients();
    //form.reset();
});

remove.addEventListener('click', () => {
    totalstuff.pop();
    displayingredients();
});

function displayingredients() {
    listedingredients.textContent = '';
    for (let list of totalstuff) {
        const li = renderIngredient(list);
        listedingredients.appendChild(li);
    }
}
//function resetIngredients() {
  //  totalstuff = [];
    //listedingredients.textcontent = '';
//}

save.addEventListener('click', () => {
    const mealName = meal.value;
    const ingredcount = totalstuff.length;
    mealsArray.push({ mealName, ingredcount });
    renderMeals();
});

function renderMeals() {
    meal.textContent = '';
    for (let listed of mealsArray) {
        const li = renderMeals(listed);
        listedingredients.append(li);
    }
}
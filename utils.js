export function renderIngredient(list) {
    const li = document.createElement('li');
    li.textContent = `${list.quantity} ${list.measurement} ${list.name}`;
    return li;
}

export function renderSoloMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.mealName} - ${meal.ingredcount} ingredients`;
    return li;
}
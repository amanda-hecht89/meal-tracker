export function renderIngredient(list) {
    const li = document.createElement('li');
    li.textContent = `${list.quantity} ${list.measurement} ${list.name}`;
    return li;
}

export function renderMeals(listed) {
    const li = document.createElement('li');
    li.textContent = `${listed.quantity} ${listed.measurement} ${listed.name}`;
    return li;
}
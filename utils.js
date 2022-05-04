export function renderIngredient(list) {
    const li = document.createElement('li');
    li.textContent = `${list.quantity} ${list.measurement} ${list.name}`;
    return li;
}
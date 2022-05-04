export function renderIngredient(list) {
    const li = document.createElement('li');
    li.textContent = `${list.amount}` `(${list.measure}` of `${list.food}`;
    return li;
}
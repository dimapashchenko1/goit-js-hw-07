const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')

const createItemEl = value => {
  const itemEl = document.createElement('li');
  itemEl.textContent = value;
  return itemEl;
}

const elements = ingredients.map(createItemEl);

ingredientsList.append(...elements);
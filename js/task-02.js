const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
  const createEl = document.createElement('li')
  createEl.textContent = ingredient;
  ingredientsList.appendChild(createEl);
});
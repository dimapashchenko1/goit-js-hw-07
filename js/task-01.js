const totalItem = document.querySelectorAll('.item');
console.log(`В списке ${totalItem.length} категории`);

totalItem.forEach(element => (console.log(`
Категория: ${element.firstElementChild.textContent}
Количество элементов: ${element.querySelectorAll('li').length}`)));
//* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//* Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//* Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const listItems = document.querySelectorAll('#categories .item');
console.log('Number of categories:', listItems.length);
listItems.forEach(item => {
  const categoryTitle = item.querySelector('h2');
  const categoryItems = item.querySelectorAll('li');
  console.log('Category:', categoryTitle.textContent);
  console.log('Elements:', categoryItems.length);
});

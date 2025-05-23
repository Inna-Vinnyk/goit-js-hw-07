//* Напиши скрипт управління формою логіна.
//* 1. Відправлення форми form.login-form повинна відбуватися за подією submit.
//* 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
//* 3. Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
//* 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
//* 5. При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const userData = {
    email: email,
    password: password,
  };

  console.log('userData:', userData);

  form.reset();
});

// Задание 1

// Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
// "super-dropdown", необходимо использовать методы forEach и querySelectorAll
// и свойство classList у элементов.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 1");
console.log("--------------------------------------------------------------------");

const dropdownItem = document.querySelectorAll(".dropdown-item");
dropdownItem.forEach((el) => {
  el.classList.add("super-dropdown");
  console.log(el);
});
// --------------------------------------------------------------------
// Задание 2

// У элемента с классом btn необходимо убрать класс "btn-secondary", если он
// присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 2");
console.log("--------------------------------------------------------------------");

const btn = document.querySelectorAll(".btn");
btn.forEach((el) => {
  el.classList.toggle("btn-secondary");
  console.log(el);
});

// --------------------------------------------------------------------
// Задание 3

// Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует
// класс "menu".

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 3");
console.log("--------------------------------------------------------------------");

const menu = document.querySelectorAll(".menu");
menu.forEach((el) => {
  if (el.classList.contains("dropdown-menu")) el.classList.remove("dropdown-menu");
});

// --------------------------------------------------------------------
// Задание 4

// Используя метод insertAdjacentHTML добавьте после div a с классом "dropdown"
// следующую разметку: <a href="#">link</a>

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 4");
console.log("--------------------------------------------------------------------");

const dropdown = document.querySelectorAll(".dropdown");
dropdown[1].insertAdjacentHTML("beforeend", '<a href="#">link</a>');

// --------------------------------------------------------------------
// Задание 5

// У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 5");
console.log("--------------------------------------------------------------------");

const dropdownMenuButton = document.querySelector("#dropdownMenuButton");
dropdownMenuButton.id = "superDropdown";

// --------------------------------------------------------------------
// Задание 6

// Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут
// "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 6");
console.log("--------------------------------------------------------------------");

const ariaLabelledby = document.querySelectorAll('[aria-labelledby = "dropdownMenuButton"]');

ariaLabelledby.forEach((el) => {
  el.dataset.dd = 3;
});

// --------------------------------------------------------------------
// Задание 7

// Удалите атрибут type у элемента с классом "dropdown-toggle".

// --------------------------------------------------------------------
console.log("--------------------------------------------------------------------");
console.log("Задание 7");
console.log("--------------------------------------------------------------------");

const dropdownToggle = document.querySelectorAll(".dropdown-toggle");

dropdownToggle.forEach((el) => {
  el.removeAttribute("type");
});
// --------------------------------------------------------------------

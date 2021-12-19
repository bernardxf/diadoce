const menu = document.getElementById('menu');
const menuHamburguer = document.getElementById('menu-hamburguer');

menuHamburguer.onclick = function () {
  menu.classList.toggle('active');
};

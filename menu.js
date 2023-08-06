const menu = document.getElementById("menu-burger");
const lista = document.getElementById("lista");

menu.addEventListener("click", () => {
    lista.classList.toggle("menu-show");
  });
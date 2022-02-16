//Removendo elementos do DOM
const items = document.querySelector(".items")
//items.remove();

//Removendo somente um elemento
items.firstElementChild.remove();

//Removendo ultimo filho da ul
items.lastElementChild.remove();

//Mudando texto do item
items.children[0].textContent = "Olá";

//Mudando a cor do botão
const button = document.querySelector(".btn");
button.style.background = "Blue";

//Mudando cor do texto
button.style.color = "Red";

//Mudando fonte do texto
button.style.fontSize = "15px";
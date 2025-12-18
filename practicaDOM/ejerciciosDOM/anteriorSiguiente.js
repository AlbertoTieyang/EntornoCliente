const lista = document.createElement("ul");

const elemento1 = document.createElement("li");
elemento1.textContent = "Elemento 1";

const elemento2 = document.createElement("li");
elemento2.textContent = "Elemento 2";

const elemento3 = document.createElement("li");
elemento3.textContent = "Elemento 3";

lista.append(elemento1, elemento2, elemento3);
document.body.append(ul);

console.log("Anterior:" + elemento2.previousElementSibling.textContent);
console.log("Siguiente:" + elemento2.nextElementSibling.textContent);
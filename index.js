import { cargarCartas } from "./components/tablero/tablero.js";
import { header } from "./components/header/header.js"; // 🔹 Importar el header

let DOM = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "div-contenedor";

// Agregar el header correctamente
let headerElement = header(); // Llamar la función
contenedor.appendChild(headerElement);

// Footer
let footer = document.createElement("div");
footer.className = "div-footer";
contenedor.appendChild(footer);

// Progreso
let progreso = document.createElement("div");
progreso.className = "div-progreso";
contenedor.appendChild(progreso);

// Tablero de cartas
let tablero = document.createElement("div");
tablero.className = "div-tablero";
tablero.appendChild(cargarCartas());
contenedor.appendChild(tablero);

// Agregar el contenedor al DOM
DOM.appendChild(contenedor);

// Evento para marcar cartas
let todasLasCartasDelDOM = document.querySelectorAll('.carta');
todasLasCartasDelDOM.forEach(cadaCarta => {
    cadaCarta.addEventListener("click", () => {
        cadaCarta.classList.add("marcado");
    });
});

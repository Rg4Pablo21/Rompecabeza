import { cargarCartas } from "./components/tablero/tablero.js";

cargarCartas();
let DOM = document.querySelector("#root");

let contenedor = document.createElement("div");
contenedor.className="contenedor";

let header= document.createElement("div");
contenedor.appendChild(header);
header.className="header"

let footer = document.createElement("div");
contenedor.appendChild(footer);
footer.className="footer"

let tablero = document.createElement("div");
contenedor.appendChild(tablero);
tablero.className="tablero";
tablero.appendChild(cargarCartas());


let progreso =document.createElement("div");
contenedor.appendChild(progreso);
progreso.className="progreso"




DOM.appendChild(contenedor);

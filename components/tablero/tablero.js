import { todas_las_cartas } from "./data.js";

//Cargar cada elemento de consola
function item(contenido){
    let div = document.createElement('div');
    div. className = "div-item";
    div.textContent = contenido;

    return div;
}

function cargarCartas (){
    let div = document.createElement('div');
    div.className = "div-tablero";
    todas_las_cartas.forEach((letra) => {
        div.appendChild(item(letra));
    });
    return div;
}
export {cargarCartas}

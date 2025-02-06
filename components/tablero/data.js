function mezclarCartas() {
    let carta_par_1 = ["🐧","👻","💀","🤬","🙈","💩","🐥","🐷"];
    let carta_par_2 = ["🐧","👻","💀","🤬","🙈","💩","🐥","🐷"];
    let todas_las_cartas = carta_par_1.concat(carta_par_2);

    for (let a = todas_las_cartas.length - 1; a > 0; a--) {
        let b = Math.floor(Math.random() * (a + 1));
        [todas_las_cartas[a], todas_las_cartas[b]] = [todas_las_cartas[b], todas_las_cartas[a]];
    }

    return todas_las_cartas; 
}

console.log(mezclarCartas());   

let todas_las_cartas = mezclarCartas();
export { todas_las_cartas };

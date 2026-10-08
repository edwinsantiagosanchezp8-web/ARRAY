const leerNombres = cantidad => {
    let nombres = [];
    for(let i = 0; i < cantidad; i++){
        nombres.push(prompt("Nombre " + (i + 1) + ":"));
    }
    return nombres;
}
const rotarDerecha = (lista, k) => {
    let nuevaLista = [];
    k = k % lista.length;
    for(let i = 0; i < lista.length; i++){
        let posicion = i - k;
        if(posicion < 0){
            posicion += lista.length;
        }
        nuevaLista.push(lista[posicion]);
    }
    return nuevaLista;
}
let cantidad = Number(prompt("¿Cuántos nombres?"));
let nombres = leerNombres(cantidad);
let k = Number(prompt("¿Cuántas posiciones quiere rotar?"));
let nuevaLista = rotarDerecha(nombres, k);
console.log("Original: " + nombres);
console.log("Rotada: " + nuevaLista);


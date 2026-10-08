const leerNumeros = cantidad => {
    let numeros = [];
    for(let i = 0; i < cantidad; i++){
        numeros.push(Number(prompt("Número " + (i + 1) + ":")));
    }
    return numeros;
}
const obtenerUltimo = numeros => {
    return numeros[numeros.length - 1];
}
const mostrarMedio = numeros => {
    let medio = Math.floor(numeros.length / 2);
    if(numeros.length % 2 == 0){
        console.log("Medios: " + numeros[medio - 1] + " y " + numeros[medio]);
    }else{
        console.log("Medio: " + numeros[medio]);
    }
}
let cantidad = Number(prompt("¿Cuántos números?"));
while(cantidad < 1){
    cantidad = Number(prompt("La cantidad debe ser mayor o igual a 1:"));
}
let numeros = leerNumeros(cantidad);
console.log("Primero: " + numeros[0]);
console.log("Último: " + obtenerUltimo(numeros));
mostrarMedio(numeros);

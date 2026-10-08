const calcularConIva = precio => {
    return Math.round(precio * 1.19);
}
const aplicarIvaConMap = precios => {
    return precios.map(precio => calcularConIva(precio));
}
const aplicarIvaConFor = precios => {
    let nuevosPrecios = [];

    for(let i = 0; i < precios.length; i++){
        nuevosPrecios.push(calcularConIva(precios[i]));
    }

    return nuevosPrecios;
}
const calcularTotal = precios => {
    let total = 0;
    for(let i = 0; i < precios.length; i++){
        total += precios[i];
    }
    return total;
}
let precios = [];
let cantidad = Number(prompt("¿Cuántos precios?"));
for(let i = 0; i < cantidad; i++){
    precios.push(Number(prompt("Precio " + (i + 1) + ":")));
}
let preciosMap = aplicarIvaConMap(precios);
let preciosFor = aplicarIvaConFor(precios);
console.log("Precios sin IVA: " + precios);
console.log("Con IVA usando map: " + preciosMap);
console.log("Total con IVA: $" + calcularTotal(preciosMap));
console.log("Con IVA usando for: " + preciosFor);

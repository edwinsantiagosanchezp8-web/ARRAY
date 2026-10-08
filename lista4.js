const leerVentas = dias => {
    let ventas = [];
    for(let i = 0; i < dias.length; i++){
        ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
    }
    return ventas;
}
const calcularTotal = ventas => {
    let total = 0;
    for(let i = 0; i < ventas.length; i++){
        total += ventas[i];
    }
    return total;
}
const mostrarReporte = (dias, ventas) => {
    console.log("Reporte de ventas:");
    for(let i = 0; i < dias.length; i++){
        console.log(dias[i] + ": $" + ventas[i]);
    }
    console.log("Total semanal: $" + calcularTotal(ventas));
}
let dias = [
    "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
];
let ventas = leerVentas(dias);
mostrarReporte(dias, ventas);

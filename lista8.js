let dias = [
  "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"
];
let ventas = [];
for (let i = 0; i < dias.length; i++) {
  let venta = Number(prompt("Venta del " + dias[i] + ":"));
  ventas.push(venta);
}
let suma = 0;
for (let i = 0; i < ventas.length; i++) {
  suma = suma + ventas[i];
}
let promedio = Math.round(suma / ventas.length);
let cantidad = 0;
console.log("Promedio diario: $" + promedio);
console.log("Días por encima del promedio:");
for (let i = 0; i < ventas.length; i++) {
  if (ventas[i] > promedio) {
    console.log(dias[i] + ": $" + ventas[i]);
    cantidad++;
  }
}
console.log("Total: " + cantidad + " días");
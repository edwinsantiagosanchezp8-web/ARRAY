let dias = [
  "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"
];
let ventas = [];
for (let i = 0; i < dias.length; i++) {
  let venta = Number(prompt("Venta del " + dias[i] + ":"));
  ventas.push(venta);
}
let posicionMayor = 0;
for (let i = 1; i < ventas.length; i++) {
  if (ventas[i] > ventas[posicionMayor]) {
    posicionMayor = i;
  }
}
let posicionMenor = 0;
for (let i = 1; i < ventas.length; i++) {
  if (ventas[i] < ventas[posicionMenor]) {
    posicionMenor = i;
  }
}
let diferencia = ventas[posicionMayor] - ventas[posicionMenor];
console.log(
  "Mejor día: " +
  dias[posicionMayor] +
  " ($" +
  ventas[posicionMayor] +
  ")"
);
console.log(
  "Peor día: " +
  dias[posicionMenor] +
  " ($" +
  ventas[posicionMenor] +
  ")"
);
console.log("Diferencia: $" + diferencia);
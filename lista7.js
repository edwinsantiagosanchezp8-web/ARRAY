let calificaciones = [];
for (let i = 0; i < 10; i++) {
  let nota = Number(prompt("Calificación " + (i + 1) + ":"));
  while (nota < 1 || nota > 5) {
    console.log("Calificación inválida");
    nota = Number(prompt("Calificación " + (i + 1) + ":"));
  }
  calificaciones.push(nota);
}
let contadores = [0, 0, 0, 0, 0];
for (let i = 0; i < calificaciones.length; i++) {
  let posicion = calificaciones[i] - 1;
  contadores[posicion]++;
}
let mayor = 0;
for (let i = 1; i < contadores.length; i++) {
  if (contadores[i] > contadores[mayor]) {
    mayor = i;
  }
}
for (let i = 0; i < contadores.length; i++) {
  let asteriscos = "";
  for (let j = 0; j < contadores[i]; j++) {
    asteriscos = asteriscos + "*";
  }
  console.log(
    "Estrellas " +
    (i + 1) +
    ": " +
    asteriscos +
    " (" +
    contadores[i] +
    ")"
  );
}
console.log("Más frecuente: " + (mayor + 1) + " estrellas");
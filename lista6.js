let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"];
function existeEnLista(lista, valor) {
  let encontrado = false;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == valor) {
      encontrado = true;
    }
  }
  return encontrado;
}
let entraron = 0;
let rechazados = 0;
let nombre = prompt("Nombre: ");
while (nombre != "fin") {
  if (existeEnLista(invitados, nombre)) {
    console.log(nombre + " puede entrar");
    entraron++;
  } else {
    console.log(nombre + " no está en la lista");
    rechazados++;
  }
  nombre = prompt("Nombre: ");
}
console.log("Entraron: " + entraron);
console.log("Rechazados: " + rechazados);
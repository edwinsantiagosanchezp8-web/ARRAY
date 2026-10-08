let palabras = [];
let cantidad = Number(prompt("¿Cuántas palabras?"));
for (let i = 0; i < cantidad; i++) {
  let palabra = prompt("Palabra " + (i + 1) + ":");
  palabras.push(palabra);
}
let invertidas = [];
for (let i = palabras.length - 1; i >= 0; i--) {
  invertidas.push(palabras[i]);
}
let original = "";
let invertido = "";
for (let i = 0; i < palabras.length; i++) {
  original = original + palabras[i];
  if (i < palabras.length - 1) {
    original = original + ", ";
  }
}
for (let i = 0; i < invertidas.length; i++) {
  invertido = invertido + invertidas[i];
  if (i < invertidas.length - 1) {
    invertido = invertido + ", ";
  }
}
console.log("Original: " + original);
console.log("Invertido: " + invertido);
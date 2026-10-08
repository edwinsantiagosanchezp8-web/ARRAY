let numeros = [];
for (let i = 0; i < 8; i++) {
  let numero = Number(prompt("Número " + (i + 1) + ":"));
  numeros.push(numero);
}
let pares = [];
let impares = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}
let textoPares = "";
let textoImpares = "";
for (let i = 0; i < pares.length; i++) {
  textoPares = textoPares + pares[i];
  if (i < pares.length - 1) {
    textoPares = textoPares + ", ";
  }
}
for (let i = 0; i < impares.length; i++) {
  textoImpares = textoImpares + impares[i];
  if (i < impares.length - 1) {
    textoImpares = textoImpares + ", ";
  }
}
if (pares.length == 0) {
  textoPares = "(ninguno)";
}
if (impares.length == 0) {
  textoImpares = "(ninguno)";
}
console.log("Pares (" + pares.length + "): " + textoPares);
console.log("Impares (" + impares.length + "): " + textoImpares);
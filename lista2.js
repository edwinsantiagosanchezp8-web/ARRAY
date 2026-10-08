const leerNotaValida = numero => {
    let nota = Number(prompt("Nota " + numero + ":"))
    while(nota < 0 || nota > 5){
        nota = Number(prompt("Nota inválida. Nota " + numero + ":"));
    }
    return nota;
}
const calcularPromedio = notas => {
    let suma = 0;
    for(let i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    return suma / notas.length;
}
const unirConComas = lista => {
    let texto = "";
    for(let i = 0; i < lista.length; i++){
        texto += lista[i];
        if(i < lista.length - 1){
            texto += ", ";
        }
    }
    return texto;
}
let notas = [];
for(let i = 1; i <= 5; i++){
    notas.push(leerNotaValida(i));
}
let promedio = calcularPromedio(notas);
console.log("Notas: " + unirConComas(notas));
console.log("Promedio: " + promedio.toFixed(1));
if(promedio >= 3){
    console.log("El grupo aprobó");
}else{
    console.log("El grupo no aprobó");
}
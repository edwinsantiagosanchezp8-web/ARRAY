const existeEnLista = (lista, valor) => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i] == valor){
            return true;
        }
    }
    return false;
}
const eliminarRepetidos = numeros => {
    let nuevos = [];
    for(let i = 0; i < numeros.length; i++){
        if(!existeEnLista(nuevos, numeros[i])){
            nuevos.push(numeros[i]);
        }
    }
    return nuevos;
}
let numeros = [];
for(let i = 1; i <= 10; i++){
    numeros.push(Number(prompt("Número " + i + ":")));
}
let nuevos = eliminarRepetidos(numeros);
console.log("Original: " + numeros);
console.log("Sin repetidos: " + nuevos);
console.log("Repetidos eliminados: " + (numeros.length - nuevos.length)); 

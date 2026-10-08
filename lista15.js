function obtenerEnvioGratis(distancias) {
    return distancias.filter(function(distancia) {
        return distancia <= 3;
    });
}
function contarConEnvio(distancias) {
    let cantidad = 0;

    for (let i = 0; i < distancias.length; i++) {
        if (distancias[i] > 3 && distancias[i] <= 10) {
            cantidad = cantidad + 1;
        }
    }
    return cantidad;
}
function buscarPrimeroFuera(distancias) {
    return distancias.find(function(distancia) {
        return distancia > 10;
    });
}
function unirConComas(lista) {
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto = texto + lista[i];

        if (i < lista.length - 1) {
            texto = texto + ", ";
        }
    }
    return texto;
}
let cantidad = Number(prompt("¿Cuántos pedidos?"));
let distancias = [];
for (let i = 0; i < cantidad; i++) {
    distancias.push(
        Number(prompt("Distancia del pedido " + (i + 1) + " (km):"))
    );
}
let enviosGratis = obtenerEnvioGratis(distancias);
let cantidadPagados = contarConEnvio(distancias);
let primeroFuera = buscarPrimeroFuera(distancias);
console.log(
    "Envíos gratis: " +
    unirConComas(enviosGratis)
);
console.log(
    "Pedidos con envío pagado: " +
    cantidadPagados
);
if (primeroFuera === undefined) {
    console.log("Todos los pedidos están en cobertura");
} else {
    console.log(
        "Primer pedido fuera de cobertura: " +
        primeroFuera +
        " km"
    );
}
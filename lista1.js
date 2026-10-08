const leerProductos = cantidad => {
    let productos = [];
    for(let i = 0; i < cantidad; i++){
        productos.push(prompt("Producto " + (i + 1) + ":"));
    }
    return productos;
}
const mostrarLista = productos => {
    console.log("Lista del mercado:");
    for(let i = 0; i < productos.length; i++){
        console.log((i + 1) + ". " + productos[i]);
    }
    console.log("Total: " + productos.length + " productos");
}
let cantidad = Number(prompt("¿Cuántos productos?"));
let productos = leerProductos(cantidad);
mostrarLista(productos);


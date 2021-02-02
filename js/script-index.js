$(document).ready(function () {

    cargarProductosHTMLIndex();
    cargarHTMLCarrito();
    mostrarProductosCarritoHTML();
    agregarProductoTotalCarrito();

});






const stockProductosRandom = (stockProductos, cantidad = 1) => {

    const resultado = [];
    for (let i = 0; i < cantidad;) {
        const random = Math.floor(Math.random() * stockProductos.length);
        if (resultado.indexOf(stockProductos[random]) !== -1) {
            continue;
        };
        resultado.push(stockProductos[random]);
        i++;
    };
    return resultado;
};




function cargarProductosHTMLIndex() {

    let productosMostrar = stockProductosRandom(stockProductos, 9);


    productosMostrar.forEach(producto => {


        const {
            imagen,
            nombre,
            precio,
            id,
            descripcion
        } = producto;

        let large = `
        <div id="${id}" class="col-5 col-md- col-lg-3 card producto">
            <img id="${id}" src="${imagen}" alt="Denim Jeans" style="width:100%">
            <h1 class="nombre-producto" id="${id}">${nombre}</h1>
            <p class="precio-producto" id="${id}">${precio}</p>
            <p class="descripcion" id="${id}">${descripcion}</p>
            <p><button class="botonCompra botonCompraIndex" id="${id}">Añadir al carro</button></p>
        </div>`

        $(".contenedor-index-productos").append(large);



    });


}









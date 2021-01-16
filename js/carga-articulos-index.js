$( document ).ready(function() {

    cargarProductosHTML();

});




function cargarProductosHTML(){

    console.log(stockProductos);

    stockProductos.forEach(producto => {


        const { imagen, nombre, precio, id, descripcion } = producto;

        let large = `
        <div id="${id}" class="col-5 col-md-4 col-lg-3 card producto">
            <img id="${id}" src="${imagen}" alt="Denim Jeans" style="width:100%">
            <h1 class="nombre-producto" id="${id}">${nombre}</h1>
            <p class="precio-producto" id="${id}">${precio}</p>
            <p class="descripcion" id="${id}">${descripcion}</p>
            <p><button class="botonCompra" id="${id}">Añadir al carro</button></p>
        </div>`

        $(".contenedor-novedades-items").append(large);


        
    });

}

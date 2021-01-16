$( document ).ready(function() {

    cargarProductosHTML();

});






$(document).on('click','.producto',function(e){
    agregarMainInfo(e.target.id);


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



function insertarMapEspecifico() {

    $(".mapa-containers").append(large);
}




function agregarMainInfo(idProducto){
    
    const { imagen, nombre, precio, id, descripcion } = obtenerProductoID(idProducto);

    console.log(nombre);


    let large = `<div class="row contenedor-novedad flex-wrap">


                    <div class="col-12 col-md-12 col-lg-8  contenedor-imagen">
                        <img class="card-img-top img-fluid imagen-item" src="http://placehold.it/500x250" alt="">
    
    
                    </div>
    
    
                    <div class="col-12 col-md-12 col-lg-4">
                        <div class="card-body">
                            <h3 class="card-title">${nombre}</h3>
                            <h4>${precio}</h4>
                            <p class="card-text">${descripcion}</p>
                            <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
    
                            <div class="Cantidad">Ingrese cantidad []</div>
                            <p><button class="botonCompra" id="${id}">Añadir al carro</button></p>
    
                        </div>
                    </div>
    
                </div>`



    $(".contenedor-novedad").remove();

    $(".contenedor-novedades").append(large);


}



function obtenerProductoID(id){

    return stockProductos.find( producto => producto.id == id );


}
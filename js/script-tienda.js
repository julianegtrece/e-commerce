//declaraciones

let pageCategory = 'todo';
let stockProductosCategory;
let pageNumber = 1;
let pageSize = 9;
let pageCont = Math.ceil(stockProductos.length / pageSize);
let carritoProductos = [];
let TotalProductos=0;





// $(document).ready(function () {
//     cargarProductosHTML();

// });


window.onload=function () {
    cargarProductosHTML();
    cargarHTMLCarrito();


    carritoProductos = JSON.parse(localStorage.getItem('carrito')) || [];
    
    if (carritoProductos.length!=0){

        borrarProductosHTMLCarrito();
        mostrarProductosCarritoHTML();
        cantidadDeProductosCarritoIcono();
        agregarProductoTotalCarrito();

    }


}



$(document).on('click', '.imagen-producto', function (e) {
    $('.modal').modal('show');
    agregarMainInfo(e.target.id);
    obtenerProductoID(e.target.id);


});

//PAGINACION 1,2,3...
$(document).on('click', '.botonPaginacion', function (e) {
    e.preventDefault();

    console.log(e.target.id);
    borrarProductosHTML();

    if (isNaN(e.target.id)) {
        if (e.target.id == 'back') {
            previousPage();
            cargarProductosHTML();

        } else {
            nextPage();
            cargarProductosHTML();

        }
    } else {

        console.log("Numero")
        pageNumber = e.target.id;
        cargarProductosHTML();

    }
});



//CATEGORIAS
$(document).on('click', '.paginationCategory', function (e) {

    e.preventDefault();


    pageNumber = 1;

    switch (e.target.id) {

        case 'todo':

            console.log('todo');
            pageCategory = 'todo';
            borrarProductosHTML();
            cargarProductosHTML();
            break;
        case 'hombres':
            console.log('hombres');
            pageCategory = 'hombres';
            borrarProductosHTML();
            cargarProductosHTML();
            break;
        case 'mujeres':
            console.log('mujeres');
            pageCategory = 'mujeres';
            borrarProductosHTML();
            cargarProductosHTML();
            break;
        case 'ninos':
            console.log('ninos');
            pageCategory = 'ninos';
            borrarProductosHTML();
            cargarProductosHTML();
            break;
        default:
            console.log('default');
    }



});


//Agregar item al carrito 

$(document).on('click', '.botonCompra', function (e) {

    console.log(e.target.id);
    borrarProductosHTMLCarrito();
    agregarProductoCarrito(e.target.id);
    cantidadDeProductosCarritoIcono();
    guardarStorage();



});

//Modificar Cantidad Precio Productos


$(document).on('change', '.inputCantidadProductos', function (e) {

    borrarProductosHTMLCarrito();
    carmbiarCantidadPrecioconID(e.target.id, $(this).val());
    guardarStorage();


});



$(document).on('click', '.botonBorrarItem', function (e) {

    borrarProductosHTMLCarrito();
    borrarProductosCarritoconID(e.target.id);
    cantidadDeProductosCarritoIcono();
    guardarStorage();




});


$(document).on('click', '.botonBorrarTodo', function (e) {

    borrarTodosLosProductos();
    borrarProductosHTMLCarrito();
    cantidadDeProductosCarritoIcono();
    guardarStorage();
    console.log("borradodoooo");

});



function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(carritoProductos));
}





function cantidadDeProductosCarritoIcono(){
    $(".badge-carrito-warning").text(carritoProductos.length);

}




function borrarTodosLosProductos(){

    carritoProductos = [];
        borrarProductosHTMLCarrito();

    mostrarProductosCarritoHTML();

}


function borrarProductosCarritoconID(id){

    carritoProductos = carritoProductos.filter(producto=> producto.id != id);
    mostrarProductosCarritoHTML();
    agregarProductoTotalCarrito();



}



function carmbiarCantidadPrecioconID(id, cantidad) {



    const productos = carritoProductos.map(producto => {
        if (producto.id == id) {
            producto.cantidad= cantidad;
            producto.total = producto.precio *cantidad;

            return producto;
        } else {
            return producto;
        }

    });

    carritoProductos = [...productos];
    mostrarProductosCarritoHTML();
    agregarProductoTotalCarrito();


}





function agregarProductoCarrito(id) {
    let productoComprado = obtenerProductoID(id);

    const existeProducto = carritoProductos.some(producto => producto.id == productoComprado.id);


    if (existeProducto) {
        const productos = carritoProductos.map(producto => {
            if (producto.id == productoComprado.id) {
                producto.cantidad++;
                producto.total += producto.precio;

                return producto;
            } else {
                return producto;
            }

        });

        carritoProductos = [...productos];



    } else {
        productoComprado.cantidad = 1;
        productoComprado.total = productoComprado.precio;
        carritoProductos.push(productoComprado);

    }


    console.log(carritoProductos);



    mostrarProductosCarritoHTML();
    agregarProductoTotalCarrito();

}


//funcion que solo muestra los elementos de carrito 


function mostrarProductosCarritoHTML() {
    carritoProductos.forEach(producto => {
        const {
            imagen,
            nombre,
            precio,
            id,
            descripcion,
            cantidad,
            total
        } = producto;

        let productos = `
        <tr>
        <td>
            <div class="row">

                <div class="col-6">
                    <img src="http://placehold.it/70x70" alt="">

                </div>

                <div class="col-6">
                    <p>${nombre}</p>

                </div>

            </div>

        </td>
        <td>
            <div class="quantity">
                <input class="inputCantidadProductos" type="number" min="1" max="9" step="1" value="${cantidad}" id="${id}">
            </div>
        </td>
        <td>$${total}</td>
        <td>
            <div class="row">
                <div class="col d-flex align-content-center">
                    <div class="botonBorrarItem" id="${id}">X</div>

                </div>

            </div>
        </td>

    </tr>        
    `

        $(".body-carrito").append(productos);



    });
}


function borrarProductosHTMLCarrito() {

    $(".body-carrito").empty();

}


function agregarProductoTotalCarrito() {
    let precioTotal= 0;

    carritoProductos.forEach(producto => {
        precioTotal += producto.total;
    });

    let totalHTML = `
    <tr>
        <td>Total</td>
        <td></td>
        <td colspan="2">$${precioTotal}</td>
    </tr>`;

    $(".body-carrito").append(totalHTML);
}



//devuelve un array segun la paginacion y el tamanio de la pagina 
function paginate(array, page_size, page_number) {

    return array.slice((page_number - 1) * page_size, page_number * page_size);

}


//se encarga de sumarle + 1 al page numbre

function nextPage() {
    if (pageNumber == 3) {
        pageNumber = 3;
    } else {
        pageNumber++;
    }
}

function previousPage() {

    if (pageNumber == 1) {
        pageNumber = 1;
    } else {
        pageNumber--;
    }

}


function productosCategorizado(category) {

    if (category == "todo") {

        return stockProductos;

    } else {
        const productosCategorizado = stockProductos.filter(producto => producto.categoria == category);
        console.log(productosCategorizado);
        return productosCategorizado;
    }



}





//Categoriza los productos segun la categoria y los muestra 9 por paginas

function cargarProductosHTML() {

    console.log(stockProductos);

    let productosMostrarCategorizado = productosCategorizado(pageCategory);


    productosMostrar = paginate(productosMostrarCategorizado, pageSize, pageNumber);

    console.log(productosMostrar);

    productosMostrar.forEach(producto => {




        const {
            imagen,
            nombre,
            precio,
            id,
            descripcion
        } = producto;

        let large = `
        <div id="${id}" class="col-5 col-md-4 col-lg-3 card producto">
            <img class="imagen-producto" id="${id}" src="${imagen}" alt="Denim Jeans" style="width:100%">
            <h1 class="nombre-producto" id="${id}">${nombre}</h1>
            <p class="precio-producto" id="${id}">${precio}</p>
            <p class="descripcion" id="${id}">${descripcion}</p>
            <p class= "botonCompraBox"><button class="botonCompra" id="${id}">Añadir al carro</button></p>
        </div>`

        $(".contenedor-novedades-items").append(large);



    });

}


function borrarProductosHTML() {
    $(".contenedor-novedades-items").empty();

}



function insertarMapEspecifico() {

    $(".mapa-containers").append(large);
}




function agregarMainInfo(idProducto) {

    const {
        imagen,
        nombre,
        precio,
        id,
        descripcion
    } = obtenerProductoID(idProducto);

    console.log(nombre);


    let large = `<div class="container-fluid contenedor row d-flex justify-content-center">

                    <div class="col-12 col-md-12 col-lg-8  contenedor-imagen">
                    <section class="row contenedorslidesmodal">
                    <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleControls1" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleControls1" data-slide-to="1"></li>
                            <li data-target="#carouselExampleControls1" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <a href="http://placehold.it/680x570" target="_blank">
                                    <img src="http://placehold.it/680x570" alt="...">
                                </a>
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="http://placehold.it/680x570" target="_blank">
                                    <img src="http://placehold.it/680x570" alt="...">
                                </a>
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item">
                                <a href="http://placehold.it/680x570" target="_blank">
                                    <img src="http://placehold.it/680x570" alt="...">
                                </a>
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </a>
                    </div>
                </section>
                    </div>
    
    
                    <div class="col-12 col-md-12 col-lg-4 contenedor-informacion">
                        <div class="card-body">
                            <h3 class="acrdt-itle">${nombre}</h3>
                            <h4 class= "card-precio">${precio}</h4>
                            <p class="card-text">${descripcion}</p>    
                            <div class="cantidad">Ingrese cantidad []</div>
                            <p class="boton-compra-card"><button class="botonCompra " id="${id}">Añadir al carro</button></p>
    
                        </div>
                    </div>
    
                </div>`





    $(".modal-body").empty();
    $(".modal-body").append(large);


}



function obtenerProductoID(id) {

    return stockProductos.find(producto => producto.id == id);


}






//SIDEBAR 

$(document).on('click', '.carrito-compras', function (e) {

    e.preventDefault(); //EVITO QUE SE MUEVA LA PAGINA AL HACER CLICK
    $(".sideNav").css({"width":"450px"});

});


$(document).on('click', '.closeBtn', function (e) {
    e.preventDefault();
    $(".sideNav").css({"width":"0px"});

});



//Desactiva todo input de numeros en la cantidad, solo se controla las 


$('body').on("keypress", "[type='number']", function (e) {
    e.preventDefault();

});
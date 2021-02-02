function cargarHTMLCarrito(){

    let large = `
    <nav class="sideNav">

            <div class="container-fluid">
                <div class="d-flex justify-content-end">
                    <a href="#" class="closeBtn">&times;</a>

                </div>
            </div>

            <div class="container-fluid">


                <table class="table table-striped ">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">
                                <div class="row">Producto</div>
                            </th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">
                                <i class="fa fa-trash-o botonBorrarTodo" style="font-size:20px"></i>
                            </th>

                        </tr>
                    </thead>

                    <tbody class="body-carrito">





                    </tbody>
                </table>

            </div>


            <!-- <a href="#" class="closeBtn">&times;</a> -->



            <div class="container-fluid d-flex justify-content-center align-content-center">

                <div class="row">
                    <button type="button" class="btn btn-secondary btn-lg btn-block">Realizar Compra</button>

                </div>

            </div>



        </nav>
    `
    $("body").append(large);

}
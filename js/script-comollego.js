$(".boton-location").on("click", function (e) {
    console.log(e.target.id);


    agregarMaps(e.target.id);
});




$(".sectionBtonLocation").on("click", function (e) {
    console.log(e.target.id);
    agregarMaps(e.target.id);
});









function agregarMaps(id) {
    let large;

    console.log(id);
    switch (id) {
        case 'blocation1':
            console.log('1');
            large = '<div class="row mapa-container"><div class="col-8"><iframe class="gmaps"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.129184324772!2d-58.38496167620342!3d-34.60252814218717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sTeatro%20Col%C3%B3n!5e0!3m2!1ses!2sar!4v1608322355760!5m2!1ses!2sar"width="600" height="600" frameborder="0" style="border:0;" allowfullscreen=""aria-hidden="false" tabindex="0"></iframe></div><div class="col-4"><p>Indicaciones Microcentro</p><p>Galeria 01 al fondo.</p></div></div>';

            insertarMapEspecifico(large);
            break;
        case 'blocation2':
            console.log('2');
            large = '<div class="row mapa-container"><div class="col-8"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.948315725084!2d-58.471823184102696!3d-34.63074636643719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc98f24f6e22d%3A0xe9ae999643a7cd9!2sRivadavia%20%26%20Av.%20Nazca%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1610564103886!5m2!1ses!2sar" width="600" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div><div class="col-4"><p>Indicaciones Flores</p><p>Galeria 01 al fondo.</p></div></div>';

            insertarMapEspecifico(large);

            break;
        case 'blocation3':
            console.log('3');
            large = '<div class="row mapa-container"><div class="col-8"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.115553400503!2d-58.47386108410265!3d-34.62652006621321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc98d99a396db%3A0x94d696b291f53014!2sAvellaneda%2C%20Flores!5e0!3m2!1ses!2sar!4v1610564465363!5m2!1ses!2sar" width="600" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div><div class="col-4"><p>Indicaciones Avellaneda</p><p>Galeria 01 al fondo.</p></div></div>';

            insertarMapEspecifico(large);

            break;
        default:
            console.log('ID desconocido');
    }

}



function insertarMapEspecifico(large) {

    $(".mapa-container").remove();

    $(".mapa-containers").append(large);
}
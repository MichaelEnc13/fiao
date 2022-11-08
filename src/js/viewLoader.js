/* 
    Con esta función es posible crear app dinamicas cargando modulos en contenedores especificos
*/
function viewLoader(viewData) {
    v = viewData
        // esto lee la pagina actual en la que estamos
    var currentPage = location.pathname.substring(1);
    var title = v.title && v.modal != true ? v.title : currentPage; //este se usa para modificar el titulo de la pestaña denotando la sección actual
    document.title = title ? "nombrepagina | " + title : "titulo"; //aqui se aplica el title a la pestaña 
    var path = v.path ? v.path : console.warn("Se debe especificar la ruta de la vista"); //se lee la ruta de la vista o modulo que se quiere cargar 
    var params = v.params ? "?" + v.params : ""; //parametros, si son necesarios para cargar una vista
    /* 
        El view container es el contenedor en el cual se va a cargar la vista.
        Si se quiere se puede crear un contenedor con un ID "viewLoader" para que sea más facil de reconocer, 
        pero en otro caso se puede usar el nombre deseado.
        en el codigo inferior, se usa el contendor "viewLoader" por defecto en caso de que se no especifique ninguno en las
        opciones.
    */
    var viewContainer = v.viewContainer ? v.viewContainer : "#viewLoader"; //Si no se especifica una vista, se carga por defecto
    /* 
        Esta funcion callback se le puede pasar en el objeto para que se ejecute una vez que se cargue la vista solicitada
    */
    var callback = v.callback; //funcion opcional 
    /* 
        Este "modal" se usa para especificar si la vista se cargará dentro de un contenedor de modales
        dentro de la condicion se van a especificar todas las opciones que se requieran para que funcione correctamente la modal
         Si se quiere se puede usar "modalTitle" dentro de un contenedor "modal" para denotar la informacion
         que será cargada dentro de la misma, esto es opcional
    */
    var modal = v.modal ? v.modal : false; //decidir si la vista es modal o no
    var modalTitle = v.modalTitle ? v.modalTitle : ""; //titulo de la vista modal

    if (modal) { //mostrar las modales si es necesario
        //  $("#modal__header__title").text(modalTitle);
        // $("#modal_loader").css("display", "block");
        // $(".overlay").css("display", "block");
    } else {
        // $(".spinner").addClass("spinner-show");

    }

    /* 
Aqui se ejecutan todo el código con la informacion pasada en las opciones
    
    */

    $(viewContainer).load(`views/${path}${params}`, function(res) { //cargar la vista 
        if (typeof(callback) == "function") { callback(); }

        // $(".spinner").removeClass("spinner-show");

    });

    /*  
    Esto se usa para cambiar el estado de la URL:
    Ejemplo: si estamos en la dirección www.pagina.com/inicio
    -queremos cargar una vista completa de "contacto",
    con el parametro title especificamos esa ruta
    para que se nos cambie a 
   
     history.replaceState(null, "", "contacto") -->   www.pagina.com/contacto
    */

    history.replaceState(null, "", title)


}
$(document).on("click", ".view_client_info", function(e) {
    var id = e.target.dataset.id;
    viewLoader({
        title: "client",
        path: "client/client.php",
        params: `read&id=${id}`,
        callback: () => {
            init_table();
        }

    })
});
$(document).on("click", "#router-home", function(e) {
    viewLoader({
        title: "home",
        path: "home/home.php",
        params:"#globalContainer",
        callback: () => {
            init_table();
        }

    })
});
$(document).on("click", "#router-add", function(e) {
    viewLoader({
        title: "home",
        path: "home/home.php",
        params:"#globalContainer",
        callback: () => {
            init_table();
        }

    })
});
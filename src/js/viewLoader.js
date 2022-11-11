/* 
    Con esta función es posible crear app dinamicas cargando modulos en contenedores especificos
*/
function viewLoader(viewData) {
    v = viewData
        // esto lee la pagina actual en la que estamos
    var currentPage = location.pathname.substring(1);
    var indexPage = v.modal == true ? currentPage : v.indexPage;
    var title = v.title && v.modal != true ? v.title : currentPage; //este se usa para modificar el titulo de la pestaña denotando la sección actual
    document.title = title ? "Fiao | " + title : "titulo"; //aqui se aplica el title a la pestaña 
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
        $("#modal__title").text(modalTitle);
        $("#modal").css("display", "block");
        //$("#overlay").css("display", "block");
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

    history.replaceState(null, '', indexPage)


}

const start_session = (session_name, session_value) => {
    $.ajax({
        type: "POST",
        url: "api/controller/session.controller.php",
        data: { newSession: true, session_name: session_name, session_value: session_value }

    });

}

const stop_session = (session_name) => { //detiene las session especificada en el parametro
    $.ajax({
        type: "POST",
        url: "api/controller/session.controller.php",
        data: { stopSession: true, session_name: session_name }

    });

}

function load_client_info(id) {
    viewLoader({
        indexPage: "client",
        title: "Cliente",
        path: "client/client.php",
        params: `client&id=${id}`,
        callback: () => {
            start_session("cid", id)
            init_table();
        }

    })

}


const ovon = () => {

    $("#overlay").css("display", "block");
}
const ovoff = () => {
    $("#modal").css("display", "none");
    $("#overlay").css("display", "none");
}

$(document).on("click", "#router-home", function(e) {
    viewLoader({
        indexPage: "home",
        title: "Inicio",
        path: "home/home.php",
        callback: () => {
            init_table();
            stop_session("cid")
        }

    })
});
$(document).on("click", "#router-add", function(e) {
    viewLoader({
        title: "Nuevo cliente",
        indexPage: "new",
        path: "new/new.php",

        callback: () => {

        }

    })
});


$(document).on("click", function(e) {
    let action = e.target.id ? e.target.id : e.target.classList[0];
    let id;

    switch (action) {
        case "close_modal":
            $("#modal").css("display", "none");
            $("#overlay").css("display", "none");
        case "overlay":
            $("#modal").css("display", "none");
            $("#overlay").css("display", "none");
            break;
        case "view_client_info": //ver la informacion del cliente registrado

            id = e.target.dataset.cid;
            load_client_info(id)
            break;
        case "payment":
            ovon();
            id = e.target.dataset.cid;
            start_session("cid", id)
            viewLoader({
                modal: true,
                modalTitle: "Aplicar pago",
                viewContainer: "#modal__body",
                path: "client/add_payment.php"



            })
            break;
        case "new_debt":
            ovon();
            id = e.target.dataset.cid;
            start_session("cid", id)
            viewLoader({
                modal: true,
                modalTitle: "Agregar deuda",
                viewContainer: "#modal__body",
                path: "client/add_debt.php"



            })
            break;
    }


});
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

function load_nav() {
    viewLoader({
        path: "nav.php",
        viewContainer: "#nav_container"
    })

}

function hide_nav() {
    $("#nav_container").html("");
}

function load_client_info(id) {
    spinnerOn()
    viewLoader({
        indexPage: "client",
        title: "Cliente",
        path: "client/client.php",
        params: `client&id=${id}`,
        callback: () => {
            spinnerOff()
            start_session("cid", id)
            init_table(180);
        }

    })

}


function load_login() {
    viewLoader({
        title: "Iniciar sesión",
        path: "signin/signin.php",
        indexPage: "signin"
    })
}

function load_register() {
    viewLoader({
        title: "Registrarse",
        path: "signup/signup.php",
        indexPage: "signup"
    })
}

function load_home() {
    spinnerOn()
    viewLoader({
        indexPage: "home",
        title: "Inicio",
        path: "home/home.php",
        callback: () => {
            spinnerOff()
            init_table();
            stop_session("cid")
        }

    })
}

function load_me() {
    spinnerOn()
    viewLoader({
        indexPage: "me",
        title: "Inicio",
        path: "me/me.php",
        callback: () => {
            spinnerOff()


        }

    })
}

function load_chart() {
    spinnerOn()
    viewLoader({
        indexPage: "history",
        title: "Gráfica",
        path: "history/history.php",
        callback: () => {
            spinnerOff()
            init_chart()


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

const spinnerOn = () => {
    $(".spinner").css("display", "block");
}
const spinnerOff = () => {
    $(".spinner").css("display", "none");
}
$(document).on("click", "#router-home", function(e) {
    load_home();
});
$(document).on("click", "#router-me", function(e) {
    load_me();
});
$(document).on("click", "#router-chart", function(e) {
    load_chart();
});
$(document).on("click", "#router-add", function(e) {
    spinnerOn();
    viewLoader({
        title: "Nuevo cliente",
        indexPage: "new",
        path: "new/new.php",

        callback: () => {
            spinnerOff();
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
        case "load_login": //carga el login desde el registro
            load_login();
            break;
        case "load_register": //carga el registro desde el login
            load_register();
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
                path: "client/add_debt.php",
                params: `cid=${id}`



            })
            break;
    }


});
const init_table = (y = window.screen.height > 896 ? 350 : 250) => {
    $('#table').DataTable({
        destroy: true,
        scrollY: y,
        order: [0, 'DESC']

    });
    $('.adminTable').DataTable({
        destroy: true,
        scrollY: 150,
        order: [0, 'DESC']

    });
}

init_table()




$(document).on("click", function(e) {

    let id = e.target.id;
    let getErr;
    let form;
    let data;


    switch (id) {

        case "create_account":
            form = document.querySelector(".form#register");
            data = new FormData(form);
            spinnerOn()
            data.append("create_user", true)
            $.ajax({
                type: "POST",
                url: "api/controller/users.controller.php",
                data,
                contentType: false,
                processData: false,
                success: function(res) {
                    getErr = res.match("ERR_") ? res.match("ERR_")[0] : false;
                    if (getErr != "ERR_") { //exito
                        load_login();
                        //console.log(res);
                    } else { //errores
                        switch (getErr) {
                            case "ERR_1048":
                                //swal("Hay campos ",)
                                break;
                        }
                    }

                    spinnerOff()

                }
            });
            break;
        case "login":
            form = document.querySelector(".form#login");
            data = new FormData(form);
            data.append("login", true)
            spinnerOn()
            $.ajax({
                type: "POST",
                url: "api/controller/users.controller.php",
                data,
                contentType: false,
                processData: false,
                success: function(res) {
                    getErr = res.match("ERR_") ? res.match("ERR_")[0] : false;
                    if (getErr != "ERR_") {

                        switch (res) {
                            case "1":
                                load_home();
                                load_nav()
                                break;
                            case "":
                                swal("Contraseña incorrecta", "Verifica los campos", "error")
                                break;
                        }
                        console.log(res);
                    } else {
                        switch (res) {
                            case "ERR_001":
                                swal("Usuario no existe", "Verifica los campos", "error")
                                console.log(res);
                                break;
                        }
                    }
                    spinnerOff()



                }
            });
            break;
        case "logout":

            data = {
                logout: true
            }
            $.ajax({
                type: "POST",
                url: "api/controller/users.controller.php",
                data,

                success: function(res) {
                    if (true) {

                        load_login();
                        hide_nav()
                    }
                }
            });
            break;
        case "addClient":
            form = document.querySelector(".form#newClient");
            data = new FormData(form);
            data.append("addClient", true)
            console.log(form);
            console.log(data);
            spinnerOn()
            $.ajax({
                type: "POST",
                url: "api/controller/client.controller.php",
                data,
                contentType: false,
                processData: false,
                success: function(res) {
                    getErr = res.match("ERR_") ? res.match("ERR_")[0] : false;
                    if (getErr != "ERR_") {
                        load_client_info(res)
                        console.log(res);
                    } else {
                        switch (getErr) {
                            case "ERR_1048":
                                //swal("Hay campos ",)
                                break;
                        }
                    }
<<<<<<< HEAD

=======
>>>>>>> miguel
                    spinnerOff()


                }
            });

            break;
        case "delete_client":
            id = e.target.dataset.cid ;
            data ={ id:id,delete_client:true}
            console.log(data);
            spinnerOn()
            $.ajax({
                type: "POST",
                url: "api/controller/client.controller.php",
                data,
                success: function(res) {
                    console.log(res)
                    spinnerOff()
                }
            });



            break;
        case "add_new_debt":
            form = document.querySelector(".form#newDebt");
            data = new FormData(form);
            cid = e.target.dataset.cid;
            data.append("cid", cid)
            data.append("add_new_debt", true)
            $.ajax({
                type: "POST",
                url: "api/controller/client.controller.php",
                data,
                contentType: false,
                processData: false,
                success: function(res) {
                    getErr = res.match("ERR_") ? res.match("ERR_")[0] : false;
                    if (getErr != "ERR_") {
                        load_client_info(cid)
                        ovoff();
                        console.log(res);
                    } else {
                        switch (getErr) {
                            case "ERR_1048":
                                //swal("Hay campos ",)
                                break;
                        }
                    }



                }
            });



            break;
        case "apply_payment":
            form = document.querySelector(".form");
            data = new FormData(form);
            cid = e.target.dataset.cid;
            data.append("cid", cid)
            data.append("apply_payment", true)
            $.ajax({
                type: "POST",
                url: "api/controller/client.controller.php",
                data,
                contentType: false,
                processData: false,
                success: function(res) {
                    getErr = res.match("ERR_") ? res.match("ERR_")[0] : false;
                    if (getErr != "ERR_") {
                        load_client_info(cid)
                        ovoff();
                        console.log(res);
                    } else {
                        switch (getErr) {
                            case "ERR_1048":
                                //swal("Hay campos ",)
                                break;
                        }
                    }



                }
            });
            break;
    }




})
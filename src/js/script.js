const init_table = (y = 200) => {
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


    switch (id) {
        case "addClient":
            var form = document.querySelector(".form");
            var data = new FormData(form);
            data.append("addClient", true)
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
                            //console.log(res);
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

        case "add_new_debt":
            var form = document.querySelector(".form");
            var data = new FormData(form);
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
            var form = document.querySelector(".form");
            var data = new FormData(form);
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
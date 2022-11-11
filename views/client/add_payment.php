<?php

if(session_status()!=2)session_start();
$id = isset($_GET["id"]) ? $_GET['id']:$_SESSION['cid'];


?>
<div class="new_payment">
    <form class="form" onsubmit="return false">
        <div class="form-control">
            <label for="">Ingresa el monto</label>
            <input type="text" name="amount" class="input" placeholder="$$$">
        </div>
        <button class="btn" id="apply_payment" data-cid="<?php echo $id ?>">Aplicar</button>
    </form>

</div>
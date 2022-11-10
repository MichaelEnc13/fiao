<?php

$id = isset($_GET['id']) ? $_GET['id'] : null;


?>
<div class="new_payment">
    <form class="form" onsubmit="return false">
        <div class="form-control">
            <label for="">Ingresa el monto</label>
            <input type="text" class="input" placeholder="$$$">
        </div>
        <button class="btn">Aplicar</button>
    </form>

</div>
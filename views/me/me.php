<?php
if (session_status() != 2) session_start();
$name = $_SESSION['user']['fname'];
$lname = $_SESSION['user']['lname'];
$username = $_SESSION['user']['username'];
$commerce = $_SESSION['user']['commerce'];
?>

<div class=" data_view_container">
    <div class="data_view_container__header">
        <h2>Mi cuenta</h2>

    </div>
    <div class="account_data">

        <div class="data data__commerce ">


            <h3>Comercio</h3>
            <span class="data__info"><?php echo $commerce ?></span>

        </div>

        <div class="data data--name">
            <h3>Nombre</h3>
            <span class="data__info"><?php echo $name . " " . $lname ?></span>

        </div>

        <div class="data data--username">
            <h3>Usuario</h3>
            <span class="data__info"><?php echo $username ?></span>

        </div>
        <div class="data data--username">
            <h3>Manual de usuario</h3>
            <span class="data__info"></span>

        </div>

    </div>

    <div class="branding_info">
        <p>Version: <?php echo $version ?></p>
        <p>Desarrollado por <a href="https://dotsellsolutions.com" target="_blank"><span class="brand">Dotsell solutions</span></a></p>
    </div>

</div>
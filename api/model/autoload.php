<?php 

spl_autoload_register(function($class){
    include $class.".class.php"; 
});

date_default_timezone_set("America/Santo_Domingo");
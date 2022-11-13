<?php 
if(session_status() != 2) session_start();
/*  if(!isset($_SESSION['user'])):
    header("Location:signin");
 endif; */
 
 if (!isset($_SESSION['user']) and substr($_SERVER['REQUEST_URI'], -6) !== "signin") :
    header("location: signin");
endif; 
$version = 1.4;
 
?>
 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style.css<?php echo "?version=".$version?>">
    <link rel="stylesheet" href="src/libs/all.min.css">
    <script src="src/libs/jquery.min.js"></script>
    <link rel="stylesheet" href="src/libs/datatable.css">
    <link rel="stylesheet" href="src/libs/spinner.min.css">
    <link rel="shortcut icon" href="src/assets/iconos/favicon.png" type="image/x-icon">
    <script src="src/js/app.js"></script>
    <link rel="manifest" href="manifest.json<?php echo "?version=".$version?>">
    <title>Fiao</title>
</head>
<body>
    
<!-- <?php  include "views/spinner.php"?> -->
<div class="globalContainer">
<?php  include "views/overlay.php"?>
<?php  include "views/modal.php"?>

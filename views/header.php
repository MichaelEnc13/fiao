<?php 
if(session_status() != 2) session_start();
$_SESSION['uid'] = 1;
$version = 1.4;
?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/css/style.css<?php echo "?version=".$version?>">
    <link rel="stylesheet" href="src/libs/all.min.css">
    <script src="src/libs/jquery.min.js"></script>
    <link rel="stylesheet" href="src/libs/datatable.css">
    <link rel="shortcut icon" href="src/assets/iconos/favicon.png" type="image/x-icon">
    <script src="src/js/app.js"></script>
    <link rel="manifest" href="manifest.json<?php echo "?version=".$version?>">
    <title>Fiao</title>
</head>
<body>
    
<div class="globalContainer">
<?php  include "views/overlay.php"?>
<?php  include "views/modal.php"?>

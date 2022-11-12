<?php

include "../model/autoload.php";
if (session_status() != 2) session_start();

if (isset($_POST['create_user'])) :
   $fname = $_POST['fname'];
   $lname = $_POST['lname'];
   $user = $_POST['user'];
   $password = $_POST['password'];
   $commerce = $_POST['commerce'];
   $done = User::create($fname, $lname, $user, $password, $commerce);

   if ($done['status']) :
      echo  $done['status'];
   else :
      echo "ERR_" . $done['error'][1];
   endif;
endif;

if (isset($_POST['login'])) :

   $user = $_POST['user'];
   $password = $_POST['password'];
   $done = User::login($user);
   $data = $done['data']->fetch();

   //var_dump($data);
   if ($data) :
      $pass_hash = $data['password'];

      if (password_verify($password, $pass_hash)) :
         $_SESSION['user'] =  $data;
         echo $done['status'];
      else :
         echo  false;
      endif;
   else :
      echo "ERR_001"; //usuario no existe
   endif;
endif;

if (isset($_POST['logout'])) :
   unset($_SESSION['user']);
   $_SESSION = array();
   return true;
endif;

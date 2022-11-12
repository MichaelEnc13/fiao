<?php
include "../model/autoload.php";
if (session_status() != 2) session_start();
$uid = $_SESSION['user']['id'] ;
$date = date("d-m-Y");
if (isset($_POST['addClient'])) :
   $name = $_POST['name'];
   $tel = $_POST['tel'];
   $dir = $_POST['dir'];
   $done = Client::create($name, $tel, $dir, $uid);

   if ($done['status']) :
      echo  $done['lastId'];
   else :
      echo "ERR_" . $done['error'][1];
   endif;
endif;

if (isset($_POST['add_new_debt'])) :
   $cid = $_POST['cid'];
   $amount = $_POST['amount'];
   $descr = $_POST['descr'];

   $done = Client::create_debt($amount, $descr, $date, $cid, $uid);

   if ($done['status']) :
      $exist_total = Client::get_total($cid)['data']->fetch()['amount'];
      if ($exist_total == null) :
         //crea un registro de los totales si este no existe
         Client::create_total($amount, $cid);
      else :
         //actualiza los totales en la base de datos
         Client::update_total($amount, true, $cid);
      endif;
      
      echo  $done['status'];
   else :
      echo "ERR_" . $done['error'][1];
   endif;
endif;
 
if (isset($_POST['apply_payment'])) :
   $cid = $_POST['cid'];
   $amount = $_POST['amount'];
 

   $done = Client::update_total($amount, false, $cid);

   if ($done['status']) :
      //verificar si la diferencia da 0
    //  $exist_total = Client::get_total($cid)['data']->fetch()['amount'];
      
      
      echo  $done['status'];
   else :
      echo "ERR_" . $done['error'][1];
   endif;
endif;

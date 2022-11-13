<?php

include "autoload.php";
if (session_status() != 2) session_start();
class Client
{

    public static function create($name, $tel, $dir, $uid)
    {
        $query = "INSERT INTO client (name,tel,dir,uid) VALUES (?,?,?,?)";
        $array = array($name, $tel, $dir, $uid);
        return Db::queries($query, $array);
    }

    public static function get_clients()
    {
        $query = "SELECT * FROM client WHERE uid = ?";
        $array = array($_SESSION['user']['id']);
        return Db::queries($query, $array);
    }

    public static function get_client_info($id)
    {
        $query = "SELECT * FROM client WHERE id=? AND uid = ?";
        $array = array($id,$_SESSION['user']['id']);
        return Db::queries($query, $array);
    }

    public static function create_debt($amount, $descr, $date,$cid,$uid)
    {
        $query = "INSERT INTO sold (amount,description,date,cid,uid) VALUES (?,?,?,?,?)";
        $array = array($amount, $descr, $date, $cid ,$uid);
        return Db::queries($query, $array);
    }



    public static function get_client_debt($id){
        $query = "SELECT * FROM sold WHERE cid = ? AND uid = ?";
        $array = array($id,$_SESSION['user']['id']);
        return Db::queries($query, $array);
    }
    public static function get_total($id){
        $query = "SELECT sum(amount) as amount FROM total WHERE cid = ? AND uid = ?";
        $array = array($id,$_SESSION['user']['id']);
        return Db::queries($query, $array);
    }

    public static function create_total($amount,$cid){
    
        $query = "INSERT INTO total (amount,cid,uid) VALUES (?,?,?)";
        $array = array($amount, $cid,$_SESSION['user']['id']);
        return Db::queries($query, $array);
    }

   
    public static function update_total($amount,$action,$id){
        $query = $action == true? "UPDATE total SET amount  = amount + ? WHERE cid = ? AND uid = ?":
        "UPDATE total SET amount  = amount - ? WHERE cid = ? AND uid = ?";
        $array = array($amount,$id,$_SESSION['user']['id']);
        return Db::queries($query, $array);
    }

    public static function get_sold($month,$year){//Grafico para las ventas fiadas
        $query = "SELECT sum(amount) as amount FROM sold WHERE month = ? AND year = ? AND uid = ?";
        $array = array($month,$year,$_SESSION['user']['id']);
        return Db::queries($query, $array);
    }

}

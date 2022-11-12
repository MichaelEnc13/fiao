<?php 
include "autoload.php";
if (session_status() != 2) session_start();
class User
{

    public static function create($fname,$lname,$user,$password,$commerce)
    {
        $query = "INSERT INTO users (fname,lname,username,password,commerce) VALUES (?,?,?,?,?)";
        $hash = password_hash($password,PASSWORD_BCRYPT);
        $array = array($fname,$lname,$user,$hash,$commerce);
        return Db::queries($query, $array);
    }

    public static function login($user){
        $query = "SELECT * FROM users WHERE username= ? ";
        $array = array($user);
        return Db::queries($query, $array);
    }

 


}
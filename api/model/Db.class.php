<?php

class Db
{


    private const USER_LOCAL = "root";
    private const PASS_LOCAL = "";
    private const SERVER_LOCAL = "mysql:hostname=localhost;dbname=fiao";
    
    private const USER = "u790594714_fiao";
    private const PASS = "DotsellSolPass2022@";
    private const SERVER = "mysql:hostname=localhost;dbname=u790594714_fiao";


    private static function connect()
    {

        if ($_SERVER['REMOTE_ADDR'] == "::1") :

            return new PDO(Db::SERVER_LOCAL, Db::USER_LOCAL, Db::PASS_LOCAL);
        else :
            return new PDO(Db::SERVER, Db::USER, Db::PASS);
        endif;
    }

    public static function queries($query, $values)
    {
        $conn =  Db::connect();
        $cmd = $conn->prepare($query);
        $done = $cmd->execute(is_array($values) ? $values : null);
        return array(
            "status" => $done,
            "data" => $cmd,
            "error" => $cmd->errorInfo(),
            "lastId" => $conn->lastInsertId()

        );
    }
}

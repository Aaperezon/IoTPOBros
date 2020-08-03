<?php
require "Connection.php";
$bindings = [];
$result=null;
if($pdo!=null){
    error_log("Connection is not null");
    $parameters = ['id'];
    for($i = 0; $i < sizeof($parameters); $i++){
        if(!isset($_GET[$parameters[$i]])){
            $result = "Parameter ".$parameters[$i]." missing";
            break;
        }
        else{
            $bindings[] = $_GET[$parameters[$i]];
        }
    }
    if($result==null){
        $sql = 'DELETE FROM experiment WHERE id = ?';
        $stmt = $pdo->prepare($sql);
        if($stmt->execute($bindings)){
            $result = "Deletion Success";
        }
        else{
            $result = "Deletion Error";
        }
    }
}
else{
    $result = "Connection Error";
}
echo json_encode($result);
?>
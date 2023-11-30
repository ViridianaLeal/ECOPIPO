<?php
$server="localhost";
$user="root";
$pass="";
$bd="negocio";

$cx=mysqli_connect($server,$user,$pass,$bd);

if(!$cx){
    echo "No conectado";
}else{
    echo "conectado";
}
?>






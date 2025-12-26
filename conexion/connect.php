<?php
$host = "localhost";
$user = "root";
$pass = "";
$bd = "maidoc";

$conexion = new mysqli($host, $user, $pass, $bd);

if ($conexion->connect_errno) {
    echo "Error de conexión a la base de datos: (". $conexion->connect_errno . ") " . $conexion->connect_error;
    exit;
}

echo "Conexión correcta a la base de datos '$bd'";

$conexion->close();
?>
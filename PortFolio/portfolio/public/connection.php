<?php

$server   = "localhost";
$username = "root";
$password = "";
$db       = "db_clientaddressbook";

// Create a connection
$connection = mysqli_connect( $server, $username, $password, $db );

// Check Connection
if (!$connection) {
    die( "Connection failed: " . mysqli_connect_error() );
}

// echo "Connected successfully!";

?>
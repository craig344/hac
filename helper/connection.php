<?php
$servername = "13.127.178.97";
$username = "admin";
$password = "pass123@";
$dbname = "simpleCanteen";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error)
	die("<br/>Connection failed: " . mysqli_connect_error());
else{
    //echo "<br/>Connected successfully";
}
	//0pndvbM3pc6UDEJk@123

?>
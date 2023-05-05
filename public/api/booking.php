<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Select all bookings from the database
$sql = "SELECT * FROM bookings";
$result = $conn->query($sql);

// Create an array to store the bookings
$bookings = array();

if ($result->num_rows > 0) {
  // Loop through each booking and add it to the array
  while($row = $result->fetch_assoc()) {
    $bookings[] = $row;
  }
}

// Close the database connection
$conn->close();

// Return the bookings as JSON
echo json_encode($bookings);
?>

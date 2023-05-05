<?php
// Replace with your own MySQL database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydatabase";

// Create a connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for errors
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fetch the booking data from the database
$sql = "SELECT id, name, date, time FROM bookings";
$result = $conn->query($sql);

// Convert the result set to a PHP array
$bookings = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $bookings[] = $row;
  }
}

// Close the database connection
$conn->close();

// Return the booking data as a JSON-encoded array
header('Content-Type: application/json');
echo json_encode($bookings);
?>

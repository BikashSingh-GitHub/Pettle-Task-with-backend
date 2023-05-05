<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    exit(0);
}

// Connect to the database
$conn = mysqli_connect('localhost', 'root', '', 'bookings');

// Check connection
if (!$conn) {
    die('Database connection failed: ' . mysqli_connect_error());
}

// Query the database for all bookings
$sql = 'SELECT * FROM bookings ORDER BY id DESC';
$result = mysqli_query($conn, $sql);

// Check if there are any bookings
if (mysqli_num_rows($result) > 0) {
    // Store the bookings in an array
    $bookings = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($bookings, $row);
    }

    // Return the bookings as JSON
    header('Content-Type: application/json');
    echo json_encode($bookings);
} else {
    // Return an error message as JSON
    header('Content-Type: application/json');
    echo json_encode(array('message' => 'No bookings found'));
}

// Close the database connection
mysqli_close($conn);
?>

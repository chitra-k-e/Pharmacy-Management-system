<!-- <?php 
    $email = $_POST['email'];
    $pass = $_POST['password'];
 
    $conn = new mysqli('localhost','root','','login');
    if($conn->connect_error)
    {
        die('Connection Failed : '.$conn->connect_error);
    }
    else
    {
        $stmt = $conn->prepare("insert into login(email, password) values(?,?)");
        $stmt->bind_param("ss",$email,$pass);
        $stmt->execute();
        echo"login successful";
        $stmt->close();
        $conn->close();
    }
?> -->

<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "your_password";
$database = "login";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Hash the password (recommended for security)
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user data into the database
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>

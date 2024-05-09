<!-- <?php
    $e = $_POST['email'];
    $p = $_POST['pass'];

    $con = mysqli_connect("localhost","root","","login");
    $sql = "INSERT INTO details (email,pass) values('$e','$p')";
    $r = mysqli_query($con,$sql);
    if($r){
        echo "details saved";
    }
    else{
        echo "details not saved";
    }
?> -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $e = $_POST['email'];
    $p = $_POST['pass'];

    // Validate and sanitize input
    $e = filter_var($e, FILTER_SANITIZE_EMAIL);

    // Connect to the database
    $con = mysqli_connect("localhost", "root", "", "login");

    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Prepare and bind the SQL statement
    $sql = "INSERT INTO details (email, pass) VALUES (?, ?)";
    $stmt = mysqli_prepare($con, $sql);

    // Bind parameters
    mysqli_stmt_bind_param($stmt, "ss", $e, $p);

    // Execute the statement
    if (mysqli_stmt_execute($stmt)) {
        echo "Details saved successfully";
    } else {
        echo "Error: " . mysqli_error($con);
    }

    // Close statement and connection
    mysqli_stmt_close($stmt);
    mysqli_close($con);
}
?>

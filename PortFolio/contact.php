<?php
//start session
session_start();

//include header
include('Navbar.php');

//connect to database
include('connection.php');

$nameError = NULL;
$emailError = NULL;

//validate contact form

if( isset( $_POST["submit"] ) ) {
    function validateFormData($formData) {
        $formData = trim( stripslashes( htmlspecialchars($formData) ) );
        return $formData;
    }

    // check to see if inputs are empty
    // create variables with form data
    // wrap data with our function

    $name = "";
    $email = "";
    $subject = "";
    $message = "";

    //if box is empty
    if( !$_POST["name"] ) {
        $nameError = "Please enter your name <br>";
    } else {
        $name = validateFormData($_POST["name"]);
    }

    if( !$_POST["email"] ) {
        $emailError = "Please enter your Email <br>";
    } else {
        $email = validateFormData($_POST["email"]);
    }

    // check to see if each variable has data
    if( $name && $email && $message) {

        $query = "INSERT INTO websiteusers (id, name, email, subject, message)
            VALUES (NULL, '$name', '$email', '$subject', '$message')";
            // echo $query;

            if( mysqli_query ( $connection, $query ) ) {
                echo "<div class='alert alert-success'>New record in database!</div>";
            } else {
                echo "Error:". $query . "<br>" . mysqli_error($connection);
            }

        }

// // if "email" variable is filled out, send email
// if (isset($_REQUEST['email'])) {

// //Email information
// $to = "someone@example.com";
// $email = $_REQUEST['email'];
// $subject = $_REQUEST['subject'];
// $message = $_REQUEST['message'];

// //Send email
// mail($to, $subject, $message, "From:" . $email);

// //Email response
// echo "Thank you for contacting us!"; }

    mysqli_close($connection);

}



?>

<!DOCTYPE html>


<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Contact</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="../bootstrap-5.3.2-dist/css/bootstrap.css">
    <link rel="stylesheet" href="../Bootstrap/bootstrap-5.3.2-dist/icons/font/bootstrap-icons.css">-->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="Portfolio.css">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->

</head>

<body>


        <!-- <div class="ctch1"><br>Let's start a project<hr> Together!</div> -->

        <!-- <div class="side"> Let's<br> create<br> together!</div> -->

         <!-- Contact Section -->
  <div class="w3-padding-32 w3-content w3-text-grey" id="contact" style="margin-bottom:64px">
    <h2>Contact Me</h2>
    <hr class="w3-opacity">
    <div class="w3-section">
      <p class="ctcicons"><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Goodlands, Mauritius</p>
      <p class="ctcicons"><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: 12345678</p>
      <p class="ctcicons"><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
      <a href="./CV_compressed.pdf" download><button class="w3-button w3-light-grey w3-padding-large w3-margin-top">
      <i class="fa fa-download"></i> Download Resume
    </button></a>
    <a href="./Certificate.pdf" download><button class="w3-button w3-light-grey w3-padding-large w3-margin-top">
      <i class="fa fa-download"></i> Download Udemy Certificate
    </button></a>

    <br><br><br>

    <p>Let's create together! Send me a message:</p>
    <form action="<?php echo htmlspecialchars ( $_SERVER["PHP_SELF"] ); ?>" method="post">
        <small class="text-danger"><?php echo $nameError; ?></small>
        <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" name="name"></p>

        <small class="text-danger"><?php echo $emailError ; ?></small>
        <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" name="email"></p>
        <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" name="subject"></p>
      <label class="msgArea">Message</label><br>
                <textarea class="w3-input w3-padding-16 w3-border" rows="10" cols="80" name="message"></textarea>
        <br>
    
        <button class="w3-button w3-light-grey w3-padding-large" name="submit" type="submit">
            
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>

    </div>
 
  
</svg>
</div>


    <!--Load the CDN first-->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>

    <!--If CDN fails to load, serve up the local version-->
    <script>window.jQuery || document.write('<script src="../Jquery/jquery-3.7.1.js"><\/script>');</script>

    <!-- jQuery UI -->
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>

    <!-- <script src="../JS/script2.js"></script> -->

    <!--Bootstrap JS-->

    <!--CDN-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>

    <!--Local-->
    <!-- <script src="../Bootstrap/bootstrap-5.3.2-dist/js/bootstrap.bundle.min.js"></script> -->

</body>

</html>
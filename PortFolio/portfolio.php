<?php
//start session
session_start();

//include header/contact
include('Navbar.php');

//connect to database
include('connection.php');

?>

<!DOCTYPE html>


<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>My Portfolio</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="../bootstrap-5.3.2-dist/css/bootstrap.css">
    <link rel="stylesheet" href="../Bootstrap/bootstrap-5.3.2-dist/icons/font/bootstrap-icons.css"> -->
    <link rel="stylesheet" href="./CSS/Portfolio.css">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->

</head>

<body>


<div class="row align-items-center">
            <div class="col-12">
                <div>
                <img src="MeRounded.png" alt="me" class="center"></div>
            </div>

            <div class="Introh1">
                <p>Hello World!</p>
            </div>

            <div class="title">UX/UI designer & Front-End Developer</div>

            <div class="descript"><p>I am an enthusiastic junior front-end developer and UX/UI designer.<br>
                With a basic understanding of HTML, CSS, and JavaScript, I am eager to learn and grow in a collaborative environment.<br>
                I am passionate about creating user-friendly interfaces and excited to tackle new challenges in the tech field!</p></div>

                <div class="ctcbtn d-flex justify-content-center"><button onclick="document.location='contact.php'" class="button" style="vertical-align:middle"><span>Get in touch </span></button></div>

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
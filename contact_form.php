<?php

    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $from = 'From: Test Website';
    $to = 'sunho92@gmail.com';
    $subject = 'Test Website Submission';

    mail($to,$subject,$message);
    header("Location: contact_form.php?mailsend");
?>
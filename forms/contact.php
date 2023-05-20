<?php
  // Get form input
  $name = $_POST['name'];
  $email = $_POST['email'];
  $sub = $_POST['subject'];
  $message = $_POST['message'];

  // Set email parameters
  $to = 'vineetkushwah6325@gmail.com';  // Replace with your email address
  $subject = 'New Contact Form Submission' + $sub;
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";

  // Compose the email body
  $email_body = "Name: $name\n\n";
  $email_body .= "Email: $email\n\n";
  $email_body .= "Subject: $sub\n\n";
  $email_body .= "Message:\n$message";

  // Send the email
  $success = mail($to, $subject, $email_body, $headers);

  // Redirect to a thank you page
if ($success) {
    header('Location: thank_you.html');
} else {
    echo 'Oops! Something went wrong.';
  }
?>

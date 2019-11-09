<?php

  $contact_name = $_POST["contact_name"];
  $need = $_POST["need"];
  $phone_email = $_POST["phone_email"];
  $contact_method = $_POST["contact_method"];
  $message = $_POST["message"];

  $to      = 'chriscjamison@gmail.com';
  $subject = "Message from " . $contact_name . ", sent from ameliaxavier.com";
  $message = 
    "From:     " . $contact_name . "\n\n" . 
    "Reach At: " . $contact_method . "\n" . 
    "Message:  " . "\n" . $message;
  $headers = 'From: chriscjamison@gmail.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

 if ($phone_email !== "phone")  {
    $to = $contact_method;
    $subject =  "Amelia Xavier received your message";
    $message =  "Greetings " . $contact_name . ".\n\n" . 
                "I recently recieved a message from you and I thank you for " . 
                "taking a brave step to contact me." . "\n\n" . 
                "I will read your message and respond to you within two business days." . "\n\n" . 
                "Below this line is a copy ot the message you sent. Please hold onto this message to keep for your records." . "\n\n" . 
                "\"" . $_POST["message"] . "\"\n\n" . 
                "Thank you for contacting me. Know that I will everything I can to help sheppard you towards " .  
                "a better state of wellbeing." . "\n\n\n" .
                "Signed, " . "\n\n" . 
                "Amelia Xavier" . "\n" . 
                "Amelia Xavier Counseling" . "\n" . 
                "Austin, TX";
    $headers =  "From: chriscjamison@gmail.com" . "\r\n" . 
                "X-Mailer: PHP/" . phpversion(); 

    mail($to, $subject, $message, $headers);
  }
?>

<html>
  <script>window.location.href = "http://chriscjamison.com/amelia/#article=6&position=3";</script>
</html>
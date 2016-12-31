<?php

  $cntct_name = $_POST["cntct_name"];
  $need = $_POST["need"];
  $phone_email = $_POST["phone_email"];
  $cntct_method = $_POST["cntct_method"];
  $msg = $_POST["msg"];

  $to      = 'chriscjamison@gmail.com';
  $subject = "Message from " . $cntct_name . ", sent from ameliaxavier.com";
  $message = 
    "From:     " . $cntct_name . "\n\n" . 
    "Reach At: " . $cntct_method . "\n" . 
    "Message:  " . "\n" . $msg;
  $headers = 'From: no_reply@aroundtown30.com' . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);

  if ($phone_email === "email")  {
    $to = $cntct_method;
    $subject =  "You requested to have Amelia Xavier contact you.";
    $message =  "Greetings " . $cntct_name . ".\n\n" . "I recently recieved a message from you and I thank you for " . 
                "taking a brave step to contact me." . "\n\n" . 
                "I will read your message and respond to you within two business days." . "\n\n" . 
                "Below this line is a copy ot the message you sent. Please hold onto this message to keep for your records." . "\n\n" . 
                "\"" . $msg . "\"\n\n" . 
                "Thank you for contacting me. Know that I will everything I can to help sheppard you towards " .  
                "a better state of wellbeing." . "\n\n" .
                "Signed, " . "\n\n" . 
                "Amelia Xavier" . "\n\n" . 
                "Amelia Xavier Counseling" . "\n\n" . 
                "Austin, TX";
    $headers =  "From: chriscjamison@gmail.com" . "\r\n" . 
                "X-Mailer: PHP/" . phpversion(); 

    mail($to, $subject, $message, $headers);

  }
?>

<html>
  <script>window.location.href = "http://localhost/amelia/sc/resp/index.htm#sctn_6?pos=2";</script>
</html>
<?php

$trimmed = array_map('trim', $_POST);

/*

Fields:

- name
- email
- message


*/

$name = $trimmed['name'];
$email = $trimmed['email'];
$msg = $trimmed['message'];

$to = 'thisisjacob@gmail.com';
$subject = 'Message from website';
$headers = "From: Cobacious.com <server@cobacious.com>";

$message = "A new message has arrived from cobacious.com!\n\n";
$message .= "*****************************************************\n";
$message .= "From: $name\n";
$message .= "Email: $email\n";
$message .= "*****************************************************\n\n";
$message .= $msg . "\n\n";
$message .= "*****************************************************\n";

mail($to, $subject, $message, $headers);

$return['name'] = $name;

echo json_encode($return);

?>
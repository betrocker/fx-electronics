<?
$return = array();

$to      = 'nobody@example.com';
$subject = 'the subject';
$headers = 'From: webmaster@example.com' . "\r\n" .
		'Content-type: text/html' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = 'Calling the master<br/><br/>';
if($_REQUEST['name'])
	$message .= 'Name: '.$_REQUEST['name']."<br/>";
if($_REQUEST['phone'])
	$message .= 'Phone: '.$_REQUEST['phone']."<br/>";
if($_REQUEST['addr'])
	$message .= 'Address: '.$_REQUEST['addr'].'<br/>';

$success = mail($to, $subject, $message, $headers);
if (!$success) {
	$return['error'] = true;
  $return['error_msg'] = error_get_last();
}


die(json_encode($return));
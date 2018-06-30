<?
$return = array();

$to      = 'nobody@example.com';
$subject = 'the subject';
$headers = 'From: webmaster@example.com' . "\r\n" .
		'Content-type: text/html' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message = 'New application to replace the phone<br/><br/>';
if($_REQUEST['name'])
	$message .= 'Name: '.$_REQUEST['name']."<br/>";
if($_REQUEST['imei'])
	$message .= 'IMEI: '.$_REQUEST['imei'].'<br/>';
if($_REQUEST['contact'])
	$message .= 'Phone or email: '.$_REQUEST['contact'].'<br/>';

$success = mail($to, $subject, $message, $headers);
if (!$success) {
	$return['error'] = true;
  $return['error_msg'] = error_get_last();
}


die(json_encode($return));
<?php
$frm_name  = "Youname";
$recepient = "youmail@ya.ru";
$sitename  = "Название Сайта";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
$title = trim($_POST["title"]);

$message = "
Имя: $name <br>
Телефон: $phone <br>
Сообщение: $title
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

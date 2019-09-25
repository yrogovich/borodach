<?php
$to = 'work-biznesrost24@yandex.by, borodabarber2018@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Заявка с сайта '.$_SERVER['SERVER_NAME'] . ' ' . $_POST['form']; //Заголовок сообщения

$message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>';
        $message .= '<p>'.$_POST['form'].'</p>';
        $message .= '<p>'.$_POST['url'].'</p>';
        if(isset($_POST['user_name']) && $_POST['user_name'] !== '')
            $message .= '<h2>Личная информация</h2>';
        if(isset($_POST['user_name']) && $_POST['user_name'] !== '')
            $message .= '<p>Имя: '.$_POST['user_name'].'</p>';
        if(isset($_POST['user_age']) && $_POST['user_age'] !== '')
            $message .= '<p>Возраст: '.$_POST['user_age'].'</p>';
        if(isset($_POST['user_level']) && $_POST['user_level'] !== '')
            $message .= '<p>Уровень квалификации: '.$_POST['user_level'].'</p>';
        if(isset($_POST['user_work_time']) && $_POST['user_work_time'] !== '')
            $message .= '<p>Опыт работы: '.$_POST['user_work_time'].'</p>';
        if(isset($_POST['user_skills']) && $_POST['user_skills'] !== '')
            $message .= '<p>Чему хотели бы научиться: </p>';
            foreach($_POST['user_skills'] as $value) {
                $message .= '<p>'.$value.'</p>';
            }
         if(isset($_POST['gift_size']) && $_POST['gift_size'] !== '')
            $message .= '<p>Размер скидки: '.$_POST['gift_size'].'</p>';
        if(isset($_POST['user_phone']) && $_POST['user_phone'] !== '')
            $message .= '<p>Телефон: '.$_POST['user_phone'].'</p>';
        if(isset($_POST['user_email']) && $_POST['user_email'] !== '')
            $message .= '<p>Email: '.$_POST['user_email'].'</p>';
        if(isset($_POST['user_message']) && $_POST['user_message'] !== '')
            $message .= '<p>Сообщение: '.$_POST['user_message'].'</p>';

$message .= '                 
            </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: form@".$_SERVER['SERVER_NAME']."\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
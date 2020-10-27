<?php
if ($_POST) { // если передан массив POST
	$name = "Менеджеру сайта www.topbaza.ru"; // пишем данные в переменные и экранируем спецсимволы
	$town_from = htmlspecialchars($_POST["town-from"]);
	$town_to = htmlspecialchars($_POST["town-to"]);

	$town_from2 = htmlspecialchars($_POST["town-from-2"]);
	$town_to2 = htmlspecialchars($_POST["town-to-2"]);

	$town_from3 = htmlspecialchars($_POST["town-from-3"]);
	$town_to3 = htmlspecialchars($_POST["town-to-3"]);

	$town_from4 = htmlspecialchars($_POST["town-from-3"]);
	$town_to4 = htmlspecialchars($_POST["town-to-3"]);

	$date_where = htmlspecialchars($_POST["datepicker1"]);
	$date_where2 = htmlspecialchars($_POST["datepicker2"]);
	$date_where3 = htmlspecialchars($_POST["datepicker3"]);
	$date_where4 = htmlspecialchars($_POST["datepicker4"]);

	$time_where = htmlspecialchars($_POST["time"]);
	$time_where2 = htmlspecialchars($_POST["time-2"]);
	$time_where3 = htmlspecialchars($_POST["time-3"]);
	$time_where4 = htmlspecialchars($_POST["time-4"]);

	$passenger = htmlspecialchars($_POST["passengers"]);
	$passenger2 = htmlspecialchars($_POST["passengers-2"]);
	$passenger3 = htmlspecialchars($_POST["passengers-3"]);
	$passenger4 = htmlspecialchars($_POST["passengers-4"]);

	$light_plane = htmlspecialchars($_POST["light-plane"]);
	$middle_plane = htmlspecialchars($_POST["middle-plane"]);
	$busy_plane = htmlspecialchars($_POST["busy-plane"]);
	$avialiners = htmlspecialchars($_POST["avialiners"]);

	$fio = htmlspecialchars($_POST["fio"]);
	$tel = htmlspecialchars($_POST["tel"]);
	$email = htmlspecialchars($_POST["email"]);

	$radio_gr1 = htmlspecialchars($_POST["rad1"]);
	$radio_gr2 = htmlspecialchars($_POST["rad2"]);
	$radio_gr3 = htmlspecialchars($_POST["rad3"]);
	$radio_gr4 = htmlspecialchars($_POST["rad4"]);


	$planes = [$light_plane,$middle_plane,$busy_plane,$avialiners];


	$resPlane = 0;
	for ($i = 1; $i <= 4; $i++){ 
    	if(!$planes[$i] == 0) $resPlane = $planes[$i];
    	else continue;
  	} 

	$wishes = htmlspecialchars($_POST["wishes"]);

	if (empty($town_from) == false)
	{
		$message = "Город вылета:".$town_from."\n".
					"Город прилета: ".$town_to."\n".
					"Дата вылета: ".$date_where."\n".
					"Время вылета: ".$time_where."\n".
					"Действие: ".$radio_gr1."\n".
					"Количество пассажиров: ".$passenger."\n"."\n".

					"ФИО: ".$fio."\n".
					"Телефон: ".$tel."\n".
					"E-mail: ".$email."\n".

					"Пожелания: ".$wishes."\n".
					"Самолет: ".$resPlane."\n"."\n";

	} 
	if (empty($town_from2) == false and empty($town_from) == false){
		$message = "Город вылета:".$town_from."\n".
				"Город прилета: ".$town_to."\n".
				"Дата вылета: ".$date_where."\n".
				"Время вылета: ".$time_where."\n".
				"Действие: ".$radio_gr1."\n".
				"Количество пассажиров: ".$passenger."\n"."\n".

				"Второй перелет:"."\n".
				"Город вылета:".$town_from2."\n".
				"Город прилета: ".$town_to2."\n".
				"Дата вылета: ".$date_where2."\n".
				"Время вылета: ".$time_where2."\n".
				"Действие: ".$radio_gr2."\n".
				"Количество пассажиров: ".$passenger2."\n"."\n".

				"ФИО: ".$fio."\n".
				"Телефон: ".$tel."\n".
				"E-mail: ".$email."\n".

				"Пожелания: ".$wishes."\n".
				"Самолет: ".$resPlane."\n"."\n";
	}

	if (empty($town_from2) == false and empty($town_from) == false and empty($town_from3) == false){
		$message = "Город вылета:".$town_from."\n".
				"Город прилета: ".$town_to."\n".
				"Дата вылета: ".$date_where."\n".
				"Время вылета: ".$time_where."\n".
				"Действие: ".$radio_gr1."\n".
				"Количество пассажиров: ".$passenger."\n"."\n".

				"Второй перелет:"."\n".
				"Город вылета:".$town_from2."\n".
				"Город прилета: ".$town_to2."\n".
				"Дата вылета: ".$date_where2."\n".
				"Время вылета: ".$time_where2."\n".
				"Действие: ".$radio_gr2."\n".
				"Количество пассажиров: ".$passenger2."\n"."\n".

				"Третий перелет:"."\n".
				"Город вылета:".$town_from3."\n".
				"Город прилета: ".$town_to3."\n".
				"Дата вылета: ".$date_where3."\n".
				"Время вылета: ".$time_where3."\n".
				"Действие: ".$radio_gr3."\n".
				"Количество пассажиров: ".$passenger3."\n"."\n".

				"ФИО: ".$fio."\n".
				"Телефон: ".$tel."\n".
				"E-mail: ".$email."\n".

				"Пожелания: ".$wishes."\n".
				"Самолет: ".$resPlane."\n"."\n";
	}

	if (empty($town_from2) == false and empty($town_from) == false and empty($town_from3) == false and empty($town_from4) == false){
		$message = "Город вылета:".$town_from."\n".
				"Город прилета: ".$town_to."\n".
				"Дата вылета: ".$date_where."\n".
				"Время вылета: ".$time_where."\n".
				"Действие: ".$radio_gr1."\n".
				"Количество пассажиров: ".$passenger."\n"."\n".

				"Второй перелет:"."\n".
				"Город вылета:".$town_from2."\n".
				"Город прилета: ".$town_to2."\n".
				"Дата вылета: ".$date_where2."\n".
				"Время вылета: ".$time_where2."\n".
				"Действие: ".$radio_gr2."\n".
				"Количество пассажиров: ".$passenger2."\n"."\n".

				"Третий перелет:"."\n".
				"Город вылета:".$town_from3."\n".
				"Город прилета: ".$town_to3."\n".
				"Дата вылета: ".$date_where3."\n".
				"Время вылета: ".$time_where3."\n".
				"Действие: ".$radio_gr3."\n".
				"Количество пассажиров: ".$passenger3."\n"."\n".

				"Четвертый перелет:"."\n".
				"Город вылета:".$town_from4."\n".
				"Город прилета: ".$town_to4."\n".
				"Дата вылета: ".$date_where4."\n".
				"Время вылета: ".$time_where4."\n".
				"Действие: ".$radio_gr4."\n".
				"Количество пассажиров: ".$passenger4."\n"."\n".

				"ФИО: ".$fio."\n".
				"Телефон: ".$tel."\n".
				"E-mail: ".$email."\n".

				"Пожелания: ".$wishes."\n".
				"Самолет: ".$resPlane."\n"."\n";
	}

	$json = array(); // подготовим массив ответа
	/*if (!$town_from or !$town_to or !$time_where or !$date_where) { // если хоть одно поле оказалось пустым
		$json['error'] = 'Вы заполнили не все поля! Обмануть решили? =)'; // пишем ошибку в массив
		echo json_encode($json); // выводим массив ответа 
		die(); // умираем
	}*/

	function mime_header_encode($str, $data_charset, $send_charset) { // функция преобразования заголовков в верную кодировку 
		if($data_charset != $send_charset)
		$str=iconv($data_charset,$send_charset.'//IGNORE',$str);
		return ('=?'.$send_charset.'?B?'.base64_encode($str).'?=');
	}

	/* супер класс для отправки письма в нужной кодировке */
	class TEmail {
	public $to_email = 'a-comm@yandex.ru';
	//public $to_email = 'varaksinaalla@mail.ru';
	public $to_name = 'Менеджеру сайта www.topbaza.ru';
	public $data_charset='UTF-8';
	public $send_charset='windows-1251';
	public $body='';
	public $type='text/plain';

	function send(){
		$dc=$this->data_charset;
		$sc=$this->send_charset;
		$enc_to=mime_header_encode($this->to_name,$dc,$sc).' <'.$this->to_email.'>';
		$enc_subject=mime_header_encode($this->subject,$dc,$sc);
		$enc_from=mime_header_encode($this->from_name,$dc,$sc).' <'.$this->from_email.'>';
		$enc_body=$dc==$sc?$this->body:iconv($dc,$sc.'//IGNORE',$this->body);
		$headers='';
		$headers.="Mime-Version: 1.0\r\n";
		$headers.="Content-type: ".$this->type."; charset=".$sc."\r\n";
		$headers.="From: ".$enc_from."\r\n";
		return mail($enc_to,$enc_subject,$enc_body,$headers);
	}

	}

	$emailgo= new TEmail; // инициализируем супер класс отправки
	$emailgo->from_email= ''; // от кого
	$emailgo->from_name= 'Пользователь с сайта www.topbaza.ru';
	$emailgo->to_email= 'a-comm@yandex.ru'; // кому
	//$emailgo->to_email= 'varaksinaalla@mail.ru'; // кому
	$emailgo->to_name= $name;
	$emailgo->subject= 'Запрос с сайта www.topbaza.ru'; // тема
	$emailgo->body= $message; // сообщение
	$emailgo->send(); // отправляем

	$json['error'] = 0; // ошибок не было

	echo json_encode($json); // выводим массив ответа
} else { // если массив POST не был передан
	echo 'GET LOST!'; // высылаемs
}
?>
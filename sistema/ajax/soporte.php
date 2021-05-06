

<?php

require_once "../modelos/Soporte.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/Applications/MAMP/htdocs/CursoPhp/PHPMAILER/phpmailer/src/Exception.php';
require '/Applications/MAMP/htdocs/CursoPhp/PHPMAILER/phpmailer/src/PHPMailer.php';
require '/Applications/MAMP/htdocs/CursoPhp/PHPMAILER/phpmailer/src/SMTP.php';


$soporte=new Soporte();

$idsoporte=isset($_POST["idsoporte"])? limpiarCadena($_POST["idsoporte"]):"";
$nombres=isset($_POST["nombres"])? limpiarCadena($_POST["nombres"]):"";
$apellidos=isset($_POST["apellidos"])? limpiarCadena($_POST["apellidos"]):"";
$fechaentrada=isset($_POST["fechaentrada"])? limpiarCadena($_POST["fechaentrada"]):"";
$direccion=isset($_POST["direccion"])? limpiarCadena($_POST["direccion"]):"";
$cantidadequipos=isset($_POST["cantidadequipos"])? limpiarCadena($_POST["cantidadequipos"]):"";
$valortotal=isset($_POST["valortotal"])? limpiarCadena($_POST["valortotal"]):"";
$identificador=isset($_POST["identificador"])? limpiarCadena($_POST["identificador"]):"";
$correo=isset($_POST["correo"])? limpiarCadena($_POST["correo"]):"";
$respuesta=isset($_POST["respuesta"])? limpiarCadena($_POST["respuesta"]):"";
$telefono=isset($_POST["telefono"])? limpiarCadena($_POST["telefono"]):"";
$tipopago=isset($_POST["tipopago"])? limpiarCadena($_POST["tipopago"]):"";
$descripcion=isset($_POST["descripcion"])? limpiarCadena($_POST["descripcion"]):"";
$valorunidad=isset($_POST["valorunidad"])? limpiarCadena($_POST["valorunidad"]):"";
$adjuntar=isset($_POST["adjuntar"])? limpiarCadena($_POST["adjuntar"]):"";

switch ($_GET["op"]){
	case 'guardaryeditar':

		if (!file_exists($_FILES['adjuntar']['tmp_name'][$i]) || !is_uploaded_file($_FILES['adjuntar']['tmp_name'][$i]))
		{
			$adjuntar=$_POST["adjuntaractual"];
		}	

		$total = count($_FILES['adjuntar']['tmp_name']);

			for( $i=0 ; $i < $total ; $i++ ) {

				$tmpFilePath = $_FILES['adjuntar']['tmp_name'][$i];
				$ext = explode(".", $_FILES["adjuntar"]["name"][$i]);

				if ($tmpFilePath != "")
				{
					//todo: tipos permidos
					if ($_FILES['adjuntar']['type'][$i] == "image/jpg" 
						|| $_FILES['adjuntar']['type'][$i] == "image/jpeg"
						|| $_FILES['adjuntar']['type'][$i] == "image/png"
						|| $_FILES['adjuntar']['type'][$i] == "text/plain"
						//TODO: MIME TYPES solo permite antiguos
						|| $_FILES['adjuntar']['type'][$i]== "application/msword")
					{
						$adjuntar = $nombres.'-'.$fechaentrada.rand(). '.' .end($ext);
						$newFilePath = "../files/soporte/" . $adjuntar;
						move_uploaded_file($tmpFilePath, $newFilePath);	
					}
		  		}
			}
		   /* if (!file_exists($total) || !is_uploaded_file($total))
		{
			$adjuntar=$_POST["adjuntaractual"];
		}
		else 
		{
			$ext = explode(".", $_FILES["adjuntar"]["name"]);
			if ($_FILES['adjuntar']['type'] == "image/jpg" 
            || $_FILES['adjuntar']['type'] == "image/jpeg" 
            || $_FILES['adjuntar']['type'] == "image/png")
			{
				$adjuntar = $nombres.'-'.$fechaentrada. '.' . end($ext);
				move_uploaded_file($_FILES["adjuntar"]["tmp_name"], 
                "../files/soporte/" . $adjuntar);
			}
		}  */
		
		

		if (empty($idsoporte)){
			$rspta=$soporte->insertar(
				$nombres,$apellidos,$fechaentrada,$direccion,$cantidadequipos,$valortotal= $valorunidad * $cantidadequipos,$identificador,$correo,$respuesta,$telefono,$tipopago,$descripcion,$valorunidad,$adjuntar);
			echo $rspta ? "Registrado\n" : "No se pudo registrar";

			//TODO: ENVIAR CORREO 

//https://mail.google.com/mail/u/0/#settings/fwdandpop
//https://myaccount.google.com/lesssecureapps


    if(isset($nombres) && isset($correo) && isset($descripcion)){

        $mail = new PHPMailer();                              // Passing `true` enables exceptions
        try {
			//Server settings
			$mail->do_debug = 0;
            $mail->SMTPDebug = 0;                                 // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';                   // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'shernajis@gmail.com';                 // SMTP username
            $mail->Password = 'hacker2012.L2';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                    // TCP port to connect to


            //Recipients
            $mail->setFrom($correo, 'Mailer desde');
            $mail->addAddress($correo, 'Mailer este');     // Add a recipient
            //$mail->addAddress('ellen@example.com');               // Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            $mail->addAttachment('../files/soporte/'.$adjuntar);         // Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Correo de contacto';
            $mail->Body    = 'Nombre: ' . $nombres . '<br/>Correo: ' . $correo . '<br/>' . $descripcion;
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo 'Mensaje enviado';
        } catch (Exception $e) {
            echo 'Error: ', $mail->ErrorInfo;
        }

    }else{
        return;
    }



		
			/* $mensaje = "SLTECHNOLOGY: El ticket a sido abierto";

			ini_set( 'display_errors', 1 );
			error_reporting( E_ALL );
			$from = "stevenhernandezj@gmail.com";
			$to = $correo;
			$subject = strtoupper($mensaje);
			$message = "$descripcion";
			$headers = "From:" . $from. "\r\n" .'X-Mailer: PHP/' . phpversion();
			$headers .= "MIME-Version: 1.0\r\n";
			$headers .= "Content-type: text/html\r\n";
			if (mail($to,$subject,$message, $headers))
				{
					echo "\r\n mensaje enviado";
				}
				else
				{
					echo "\r\n Error: mensaje no enviado";
				} */
	
			
		}
		else {
			$rspta=$soporte->editar($idsoporte,$nombres,$apellidos,$fechaentrada,$direccion,$cantidadequipos,$valortotal= $valorunidad * $cantidadequipos,$identificador,$correo,$respuesta,$telefono,$tipopago,$descripcion,$valorunidad,$adjuntar);
			echo $rspta ? "Registro actualizado".'<br>' : "Registro no actualizado";

			//TODO: ENVIAR CORREO si edita


			if(isset($nombres) && isset($correo) && isset($descripcion)){
				//mandar correo
				$name = $nombres;
				$email = $correo;
				$comment = $descripcion;
		
				$mail = new PHPMailer();                              // Passing `true` enables exceptions
				try {
					//Server settings
					$mail->do_debug = 0;
            		$mail->SMTPDebug = 0;                                 // Enable verbose debug output
					$mail->isSMTP();                                      // Set mailer to use SMTP
					$mail->Host = 'smtp.gmail.com';                   // Specify main and backup SMTP servers
					$mail->SMTPAuth = true;                               // Enable SMTP authentication
					$mail->Username = 'shernajis@gmail.com';                 // SMTP username
					$mail->Password = 'hacker2012.L2';                           // SMTP password
					$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
					$mail->Port = 587;                                    // TCP port to connect to
		
					//Recipients
					$mail->setFrom($correo, 'Mailer desde');
					$mail->addAddress($correo, 'Mailer este');     // Add a recipient
					//$mail->addAddress('ellen@example.com');               // Name is optional
					//$mail->addReplyTo('info@example.com', 'Information');
					//$mail->addCC('cc@example.com');
					//$mail->addBCC('bcc@example.com');
		
					$adjuntar2 = 'Factura.pdf';
					//Attachments
					$mail->addAttachment('/Users/alexanderjimenez/Downloads/'.$adjuntar2);         // Add attachments
					//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		
					//Content
					$mail->isHTML(true);                                  // Set email format to HTML
					$mail->Subject = 'Correo de contacto cierre';
					$mail->Body    = 'Nombre: ' . $nombres . '<br/>Correo: ' . $correo . '<br/>' .'<strong>' . $respuesta. '<strong>';
					//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
		
					$mail->send();
					echo 'Mensaje enviado';
				} catch (Exception $e) {
					echo 'Error: ', $mail->ErrorInfo;
				}
		
			}else{
				return;
			}
		
			/* ini_set( 'display_errors', 1 );
			error_reporting( E_ALL );
			$from = "stevenhernandezj@gmail.com";
			$to = $correo;
			$subject = "SLTECHNOLOGY: El ticket a sido cerrado";
			$file = "";
			$message = "$descripcion";
			$headers = "From:" . $from.'X-Mailer: PHP/' . phpversion();
			$headers .= "MIME-Version: 1.0\r\n";
         	$headers .= "Content-type: text/html\r\n";
			if (mail($to,$subject,$message, $headers))
					{
						echo "\r\n mensaje enviado";
					}
					else
					{
						echo "\r\n Error: mensaje no enviado";
					} */
		}
    break;
    

	case 'mostrar':
		$rspta=$soporte->mostrar($idsoporte);
 		//Codificar el resultado utilizando json
 		echo json_encode($rspta);
	break;


	case 'listar':
		$rspta=$soporte->listar();
 		//Vamos a declarar un array
		 $data= Array();
		 

 		while ($reg=$rspta->fetch_object()){
			if($reg->tipo_comprobante=='Ticket'){
				$url='../reportes/exTicket.php?id=';
			}
			else{
				$url='../reportes/exFacturaSoporte.php?id=';
			}

 			$data[]=array(
 				"0"=>($reg->soporte)?'<button aria-label="Editar" class="btn-sm btn-warning" style="color:white" onclick="mostrar('.$reg->idsoporte.')"><i class="fas fa-pencil-ruler"></i></button>':
					 '<button  aria-label="Editar" class="btn btn-warning" onclick="mostrar('.$reg->idsoporte.')"><i class="fas fa-pencil-ruler"></i></button>

					<a href="mailto:'.$reg->correo.'?cc=stevenhernandezj@gmail.com&bcc=&subject=Factura SLTECHNOLOGY&body=
						Señor@ usuario, '.$reg->nombres." ".$reg->apellidos.'%0d%0a%0d%0a
						Con '.$reg->cantidadequipos.' 
						equipos entrados en la fecha '.$reg->fechaentrada.', que vienen de la direccion '.$reg->direccion.'       
						 con el problema/configuracion indicada : '.$reg->descripcion.' tendra un valor a cobrar en su totalidad de $'.$reg->valortotal.'&Attachment=/Applications/MAMP/htdocs/sistema/public/images/bg.jpg
					 "class="btn btn-primary"><i class="fas fa-envelope-square"></i></a> 

					

					 <a href="https://api.whatsapp.com/send?phone=+57
					 '.$reg->telefono.'&text=Hola, 
					 '.$reg->nombres." ".$reg->apellidos.'%20qué%20tal?%20te%20enviamos%20la%20factura%20al%20correo:%20
					 '.$reg->correo.',%20el%20numero%20de%20tu%20servicio%20es,%20
					 '.$reg->idsoporte.'%20que%20tengas%20un%20buen%20dia%20y%20gracias%20por%20acudir%20a%20nosotros%20SOMOS%20SLTECHNOLOGY. 
					 "class="btn btn-success"><i class="fab fa-whatsapp"></i></a>

	

					 <a target="_blank" href="'.$url.$reg->idsoporte.'"> <button aria-label="Imprimir" class="btn btn-info"><i class="fas fa-file-invoice-dollar"></i></button></a>

					 <a href="https://www.google.com/maps/place/'.$reg->direccion.'"><button aria-label="Ubicacion" class="btn btn-danger"><i class="fas fa-map-marker-alt"></i></button></a>
					 ',
                     "1"=>$reg->nombres." ".$reg->apellidos,
                     "2"=>$reg->fechaentrada,
                     "3"=>$reg->direccion,
                     "4"=>$reg->cantidadequipos,
                     "5"=>'$ '.$reg->valortotal,
                     "6"=>$reg->identificador,
					 "7"=>$reg->correo,
					 "8"=>`<label for="text1">Respuesta</label><textarea id="text1" name="text1" type="text" class="form-control" placeholder="Sin descripción" >'.$reg->respuesta.'</textarea>`,
                     "9"=>$reg->telefono,
                     "10"=>$reg->tipopago,
					 "11"=>'<label for="text">Descripcion</label><textarea id="text" name="text" type="text" class="form-control" placeholder="Sin descripción" >'.$reg->descripcion.'</textarea>',
                     "12"=>'$ '.$reg->valorunidad,
                 //carpeta usuarios estaran las imagenes
				 "13"=>"
				 <p>$reg->adjuntar</p>
				 <img alt='' src='../files/soporte/".$reg->adjuntar."' onclick='this.width=500;this.height=500;' onmouseout='this.width=70;this.height=70;' width='70' height='70' >",
 				);
 		}
 		$results = array(
 			"sEcho"=>1, //Información para el datatables
 			"iTotalRecords"=>count($data), //enviamos el total registros al datatable
 			"iTotalDisplayRecords"=>count($data), //enviamos el total registros a visualizar
 			"aaData"=>$data);
		 echo json_encode($results);

	break;

}
?>

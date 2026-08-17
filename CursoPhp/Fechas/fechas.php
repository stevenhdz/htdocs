<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Fechas</title>
	<style>
		body{
			background-color: #5276af;
			height: 100%;
		}
		#container{
			background: white;
			margin: 100px auto;
			padding: 100px;
			text-align: center;
		}
	</style>
</head>
<body>
<p></p>
    <pre>
 Día

d	Día del mes, 2 dígitos con ceros iniciales	01 a 31
D	Una representación textual de un día, tres letras	Mon hasta Sun
j	Día del mes sin ceros iniciales	1 a 31
l ('L' minúscula)	Una representación textual completa del día de la semana	Sunday hasta Saturday
N	Representación numérica ISO-8601 del día de la semana (añadido en PHP 5.1.0)	1 (para lunes) hasta 7 (para domingo)
S	Sufijo ordinal inglés para el día del mes, 2 caracteres	st, nd, rd o th. Funciona bien con j
w	Representación numérica del día de la semana	0 (para domingo) hasta 6 (para sábado)
z	El día del año (comenzando por 0)	0 hasta 365

 Semana

W	Número de la semana del año ISO-8601, las semanas comienzan en lunes	Ejemplo: 42 (la 42ª semana del año)

 Mes

F	Una representación textual completa de un mes, como January o March	January hasta December
m	Representación numérica de un mes, con ceros iniciales	01 hasta 12
M	Una representación textual corta de un mes, tres letras	Jan hasta Dec
n	Representación numérica de un mes, sin ceros iniciales	1 hasta 12
t	Número de días del mes dado	28 hasta 31

 Año

L	Si es un año bisiesto	1 si es bisiesto, 0 si no.
o	Año según el número de la semana ISO-8601. Esto tiene el mismo valor que Y, excepto que si el número de la semana ISO (W) pertenece al año anterior o siguiente, se usa ese año en su lugar. (añadido en PHP 5.1.0)	Ejemplos: 1999 o 2003
Y	Una representación numérica completa de un año, 4 dígitos	Ejemplos: 1999 o 2003
y	Una representación de dos dígitos de un año	Ejemplos: 99 o 03

 Hora

a	Ante meridiem y Post meridiem en minúsculas	am o pm
A	Ante meridiem y Post meridiem en mayúsculas	AM o PM
B	Hora Internet	000 hasta 999
g	Formato de 12 horas de una hora sin ceros iniciales	1 hasta 12
G	Formato de 24 horas de una hora sin ceros iniciales	0 hasta 23
h	Formato de 12 horas de una hora con ceros iniciales	01 hasta 12
H	Formato de 24 horas de una hora con ceros iniciales	00 hasta 23
i	Minutos con ceros iniciales	00 hasta 59
s	Segundos con ceros iniciales	00 hasta 59
u	Microsegundos (añadido en PHP 5.2.2). Observe que date() siempre generará 000000 ya que toma un parámetro de tipo integer, mientras que DateTime::format() admite microsegundos si DateTime fue creado con microsegundos.	Ejemplo: 654321
v	Milisegundos (añadido en PHP 7.0.0). La misma observación se aplica para u.	Example: 654

 Zona Horaria

e	Identificador de zona horaria (añadido en PHP 5.1.0)	Ejemplos: UTC, GMT, Atlantic/Azores
I (i mayúscula)	Si la fecha está en horario de verano o no	1 si está en horario de verano, 0 si no.
O	Diferencia de la hora de Greenwich (GMT) sin colon entre horas y minutos	Ejemplo: +0200
P	Diferencia con la hora de Greenwich (GMT) con dos puntos entre horas y minutos (añadido en PHP 5.1.3)	Ejemplo: +02:00
T	Abreviatura de la zona horaria	Ejemplos: EST, MDT ...
Z	Índice de la zona horaria en segundos. El índice para zonas horarias al oeste de UTC siempre es negativo, y para aquellas al este de UTC es siempre positivo.	-43200 hasta 50400
 
 Fecha/Hora Completa

c	Fecha ISO 8601 (añadido en PHP 5)	2004-02-12T15:19:21+00:00
r	Fecha con formato » RFC 2822	Ejemplo: Thu, 21 Dec 2000 16:01:07 +0200
U	Segundos desde la Época Unix (1 de Enero del 1970 00:00:00 GMT)	Vea también time()

%	Literal %	%
Y	Años, numérico, al menos 2 dígitos empezando con 0	01, 03
y	Años, numérico	1, 3
M	Meses, numérico, al menos 2 dígitos empezando con 0	01, 03, 12
m	Meses, numérico	1, 3, 12
D	Días, numérico, al menos 2 dígitos empezando con 0	01, 03, 31
d	Días, numérico	1, 3, 31
a	Número total de días como resultado de una operación con DateTime::diff(), o de lo contrario (unknown)	4, 18, 8123
H	Horas, numérico, al menos 2 dígitos empezando con 0	01, 03, 23
h	Horas, numérico	1, 3, 23
I	Minutos, numérico, al menos 2 dígitos empezando con 0	01, 03, 59
i	Minutos, numérico	1, 3, 59
S	Segundos, numérico, al menos 2 dígitos empezando con 0	01, 03, 57
s	Segundos, numérico	1, 3, 57
R	Signo "-" cuando es negativo, "+" cuando es positivo	-, +
r	Signo "-" cuando es negativo, vacío cuando es positivo	-,
    </pre>
	<div id="container">
		<?php
    
        $mes = array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
		echo "Fecha: " . date("l") . " " . date("d") . " de " . $mes[date("m")-1] . " de " . date("Y") . "<br>";
		echo "Son las " . date("h:i:sa");
			

		$date = date(' Y-m-d h:i:s');
		echo '<br>';
		echo "Fecha:" . $date;

		$date1 = date(' d-m-Y h:i:s');
		echo '<br>';
		echo "Fecha:" . $date1;


		$date2 = '1608945920';
		$date3 = time();
		$date1 = date(' Y-m-j h:i:s A',$date3); //timestamp hora en miliseconds
		echo '<br>';
		echo "Fecha:" . $date1;


		echo '<br>';
		date_default_timezone_set('America/Bogota');
		echo date_default_timezone_get() . ' => ' . date('Y-m-d h:i:s A') . ' => ' . date('T');

		//aumento de dias o meses o horas  fecha 
		echo '<br>';
		$fecha_actual = date("d-m-Y");
		echo date("d-m-Y",strtotime($fecha_actual."+ 1 days")); 
		echo '<br>';
		echo date("d-m-Y",strtotime($fecha_actual."- 1 days")); 
		echo '<br>';
		echo date("d-m-Y",strtotime($fecha_actual."+ 1 month")); 
		echo '<br>';
		echo date("d-m-Y",strtotime($fecha_actual."- 1 month")); 
		echo '<br>';
		echo date("d-m-Y h:i:s",strtotime($fecha_actual."+ 1 hours")); 
		echo '<br>';
		echo date("d-m-Y h:i:s",strtotime($fecha_actual."- 1 hours")); 
		echo '<br>';
		echo date("d-m-Y h:i:s",strtotime($fecha_actual."+ 1 minutes")); 
		echo '<br>';
		echo date("d-m-Y h:i:s",strtotime($fecha_actual."- 1 minutes")); 
		echo '<br>';
		echo date("d-m-Y",strtotime($fecha_actual."- 1 week")); 
		echo '<br>';
		echo date("d-m-Y",strtotime($fecha_actual."- 1 year"));




		//diferencia entre dos fechas
		echo '<br>';
		$datetime1 = new DateTime('2009-10-11');
		$datetime2 = new DateTime('2009-10-13');
		$interval = $datetime1->diff($datetime2);
		echo $interval->format('%a dias');
		

		//fechas completas
		$date6 = time();
		$date7 = date('r',$date6); 
		$date8 = date('c',$date6);
		$date9 = date('U',$date6);
		echo '<br>';
		echo "Fecha:" . $date7;
		echo '<br>';
		echo "Fecha:" . $date8;
		echo '<br>';
		echo "Fecha:" . $date9;

		$dia = date("d");
	$diaComp = date("d/m/Y");
	echo "Hoy es: ".$diaComp."<br />";
	if ($dia > 29) {
		echo "Hoy no prestamos servicio";
	}
	else {
		echo "Hoy es un día normal de servicio";
	}


		?>
	</div>
</body>
</html>

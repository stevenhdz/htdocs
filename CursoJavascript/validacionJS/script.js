function foco() {
	document.getElementById('num1').focus();
}

function calcular() {


	var v1 = parseFloat(num1.value); 
	
	rta = validarReal(num1.value);
	if (rta == "") {
		alert("El campo salario debe ser numérico decimal !");
		num1.focus();
		return false;
	}
	var v2 = parseFloat(num2.value);
	
	rta = validarReal(num2.value);
	if (rta == "") {
		alert("El campo salario debe ser numérico decimal !");
		num2.focus();
		return false;
	}
	
	var tot = v1 + v2;

	resultado.value = tot
/*ESTE ES EL CODIGO QUE SE UTILIZA PARA LAS OPERACIONES MATEMATICAS*/
	
} // fin funcion validar

function Resta() {
	
	var v1 = parseFloat(num1.value);
	
	rta = validarReal(num1.value);
	if (rta == "") {
		alert("El campo salario debe ser numérico decimal !");
		num1.focus();
		return false;
	}
	
	var v2 = parseFloat(num2.value);
	var res = v1 -v2;

	resultado.value = res

	
} // fin funcion Resta

function Multiplicacion() {
	
	var v1 = parseFloat(num1.value);
	rta = validarReal(num1.value);
	if (rta == "") {
		alert("El campo salario debe ser numérico decimal !");
		num1.focus();
		return false;
	}
	
	var v2 = parseFloat(num2.value);
	var mul = v1 *v2;

	resultado.value = mul

	
} // fin funcion Multiplicacion

function Division() {
	
	var v1 = parseFloat(num1.value);
	var v2 = parseFloat(num2.value);
	var div = v1 / v2;

	resultado.value = div

	
} // fin funcion Division

function Division() {
	
	var v1 = parseFloat(num1.value);
	var v2 = parseFloat(num2.value);
	var div = v1 / v2;

	resultado.value = div

	
} // fin funcion Division


function validarReal(val) {
	if (!/^(?:\+|-)?\d+\.\d*$/.test(val)) {
		return "";
	}
	else {
		return val;
	}
}
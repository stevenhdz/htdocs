function foco() {
	document.getElementById('nombre').focus();
}

function mostrar() {
	var nombre = document.getElementById("nombre");
	var email = document.getElementById("email");
	var salario= document.getElementById("salario");
	var fechaPag= document.getElementById("fechaPag");
	var nivEstudios = document.getElementById("nivEstudios");
	var dep = document.getElementsByName("dep");
	var otroDep = document.getElementById("otroDep");
	var DepOt = document.getElementById("DepOt");

	if (nombre.value.length == 0 || /^\s+$/.test(nombre.value)) {
		alert("El nombre no debe esta vacío !!!");
		nombre.focus();
		return false;
	}

	m = validarEmail(email.value);
	if (m === "") {
		alert("El correo no cumple con el formato establecido !!!");
		email.focus();
		return false;
	}

	rta = validarReal(salario.value);
	if (rta == "") {
		alert("El campo salario debe ser numérico decimal !");
		salario.focus();
		return false;
	}

// para validar fecha
	res = validarFecha(fechaPag.value);
	if (res == "") {
		alert("La fecha no cumple con el formato establecido");
		fechaPag.focus();
		return false;
		}

//para validar la lista desplegable no se quede vacia

	if (nivEstudios.selectedIndex == 0) {
		alert("No ha seleccionado Nivel de Estudios");
		nivEstudios.focus();
		return false;
		}		

//validar que tiene que seleccionar un boton de opcion

	sel = false;
	for (l = 0; l < dep.length; l++) {
		if (dep[l].checked) {
			sel = true;
			break;
		}
	}
	if (!sel) {
		alert("No ha seleccionado Su deporte preferido");
		return false;
	}		
		
//validar que la caja de texto otro se tenga que digitar lago

	if (DepOt.checked) {
		if (otroDep.value.length == 0 || /^\s+$/.test(otroDep.value)) {
			alert("Debe digitar otro Deporte");
			otroDep.focus();
			return false;
		}
	}		

	document.getElementById("frm").submit();
}

function validarEmail(dato) {
	if (!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(dato)) {
		return "";
	}
	else {
		return dato;
	}
}

function validarReal(val) {
	if (!/^(?:\+|-)?\d+\.\d*$/.test(val)) {
		return "";
	}
	else {
		return val;
	}
}

function validarFecha(val) {
	if (!/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/.test(val)) {
		return "";
	}
	else {
		return val;	
	}
}

// expresiones regulares, dirección: http://regexlib.com/
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
/* 
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
	}	 */	

	document.getElementById("frm").submit();
}
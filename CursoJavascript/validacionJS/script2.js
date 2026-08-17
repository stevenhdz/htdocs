function foco() {
	document.getElementById('num1').focus()
}


function calcular() {
    let rta
	let v1 = parseFloat(num1.value)

    //valida que sea decimal
    rta = validarReal(num1.value)
	if (rta == "") {
		alert("El numero debe ser decimal !")
		num1.focus()
		return false
	}

	let v2 = parseFloat(num2.value)

    rta = validarReal(num2.value)
	if (rta == "") {
		alert("El numero debe ser decimal !")
		num2.focus()
		return false
	}
	
	let tot = v1 + v2

	resultado.value = tot

	
} // fin funcion validar


function validarReal(val) {
	if (!/^(?:\+|-)?\d+\.\d*$/.test(val)) {
		return ""
	}
	else {
		return val
	}
}
function foco() {
    document.getElementById("nombre").focus();
}

function mostrar() {
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var sexo = document.getElementsByName("sexo");
    var salario = document.getElementById("salario");
    var dias = document.getElementById("dias");
    var date = document.getElementById("date");
    var lenguaje = document.getElementById("lenguaje");

    if (nombre.value.length == 0 || /^\s+$/.test(nombre.value)) {
        alert(" Nombre esta vacio !!!");
        nombre.focus();
        return false;
    } else if (!letras(nombre.value)) {
        alert(" Solo letras y sin espacios !!!");
        nombre.focus();
        nombre.value = "";
        return false;
    }

    if (estatura.value.length == 0) {
        alert("Estatura esta vacio !");
        estatura.focus();
        estatura.value = "";
        return false;
    } else if (!validarReal(estatura.value)) {
        alert(" Solo decimal con dos digitos !!!");
        estatura.focus();
        estatura.value = "";
        return false;
    }

    let f = false;
    for (let l = 0; l < sexo.length; l++) {
        if (sexo[l].checked) {
            f = true;
            break;
        }
    }
    if (!f) {
        alert("No ha seleccionado sexo");
        return false;
    }

    if (validarReal(salario.value) == "") {
        alert("El campo salario debe ser numérico decimal !");
        salario.focus();
        salario.value = "";
        return false;
    }

    if (validarRealEntero(dias.value) == "") {
        alert("El campo salario debe ser de enteros !");
        dias.focus();
        dias.value = "";
        return false;
    }

    if (validarEmail(email.value) === "") {
        alert("El correo no cumple con el formato establecido !!!");
        email.focus();
        email.value = "";
        return false;
    }

    if (validarFecha(date.value) == "") {
        alert("La fecha no cumple con el formato establecido");
        date.focus();
        date.value = "";
        return false;
    }

    if (lenguaje.selectedIndex == 0) {
        alert("No ha seleccionado un lenguaje");
        lenguaje.focus();
        return false;
    }
    enviar();
}

function enviar() {
    let salarioP = document.getElementById("salarioP");
    console.log(salarioP.value == "");
    if (salarioP.value.length != 0) {
        document.form.submit();
    } else {
        alert("Debes realizar el calculo");
    }
}

function calc() {
    if (dias.value.length != 0 && salario.value.length != 0) {
        document.getElementById("salarioP").value =
            (salario.value / 30) * dias.value;
    }
}

function validarEmail(dato) {
    if (
        !/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
            dato
        )
    ) {
        return "";
    } else {
        return dato;
    }
}

function validarReal(val) {
    if (!/^(?:\+|-)?\d+\.\d{2,2}?$/gm.test(val)) {
        return "";
    } else {
        return val;
    }
}

function validarRealEntero(val) {
    if (!/(^\d{1,10}$)/g.test(val)) {
        return "";
    } else {
        return val;
    }
}

function validarFecha(val) {
    if (
        !/^20(((([248][048])|([13579][26]))\-(((0[13578]|1[02])\-([0-2][0-9]|3[01]))|((0[469]|11)\-([0-2][0-9]|30))|(02\-([0-2][0-9]))))|((([248][1-35-79])|([13579][013-57-9]))\-(((0[13578]|1[02])\-([0-2][0-9]|3[01]))|((0[469]|11)\-([0-2][0-9]|30))|(02\-(((0|1)[0-9])|(2[0-8]))))))$/.test(
            val
        )
    ) {
        return "";
    } else {
        return val;
    }
}

function letras(val) {
    if (!/^(?=.*?[A-Za-z])[A-Za-z+]+$/.test(val)) {
        return "";
    } else {
        return val;
    }
}

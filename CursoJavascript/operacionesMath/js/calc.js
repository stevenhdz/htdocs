function foco() {
  document.getElementById("numero2").focus()
}

function Sumar() {

  let n1 = document.getElementById("numero1").value
  let rta = validarReal(n1)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO DECIMALES"
    numero1.focus()
    return false
  }

  let n2 = document.getElementById("numero2").value
  rta = validarReal(n2)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO DECIMALES"
    numero2.focus()
    return false
  }

  let suma = parseFloat(n1) + parseFloat(n2)
  document.getElementById("result").value = suma
  console.log(n1, "+", n2, "=", suma)
}

function resta_y_muestra() {
  let n1 = document.getElementById("numero1").value
  let rta = validarRealEntero(n1)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO ENTEROS"
    numero1.focus()
    return false
  }
  let n2 = document.getElementById("numero2").value
  rta = validarRealEntero(n2)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO ENTEROS"
    numero2.focus()
    return false
  }
  let rest = parseInt(n1) - parseInt(n2)
  document.getElementById("result").value = Math.round(rest)
  console.log(n1, "-", n2, "=", rest)
}

function mult_y_muestra() {
  let n1 = document.getElementById("numero1").value
  let rta = validarRealEntero(n1)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO ENTEROS"
    numero1.focus()
    return false
  }
  let n2 = document.getElementById("numero2").value
  rta = validarRealEntero(n2)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO ENTEROS"
    numero2.focus()
    return false
  }
  let mult = parseInt(n1) * parseInt(n2)
  document.getElementById("result").value = mult
  console.log(n1, "*", n2, "=", mult)
}

function division_y_muestra() {
  let n1 = document.getElementById("numero1").value
  let rta = validarReal(n1)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO ENTEROS"
    numero1.focus()
    return false
  }
  let n2 = document.getElementById("numero2").value
  rta = validarReal(n2)
  if (rta == "") {
    document.getElementById("result").value = "ERROR SOLO ENTEROS"
    numero2.focus()
    return false
  }
  let div = parseFloat(n1) / parseFloat(n2)
  document.getElementById("result").value = div
  console.log(n1, "/", n2, "=", div)
}









function validarReal(val) {
  if (!/^(?:\+|-)?\d+\.\d*$/.test(val)) {
    document.getElementById("numero2").value = ''
    document.getElementById("numero1").value = ''
    return ""
  } else {
    return val
  }
}

function validarRealEntero(val) {
  if (!/(^\d{1,10}$)/g.test(val)) {
    document.getElementById("numero2").value = ''
    document.getElementById("numero1").value = ''
    return ""
  } else {
    return val
  }
}

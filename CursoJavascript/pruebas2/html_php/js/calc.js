
      let resultado

      let numero1 = parseInt(prompt("Ingrese el numero 1", ""))
      let numero2 = parseInt(prompt("Ingrese el numero 2", ""))

      suma_y_muestra()

      function suma_y_muestra() {
        let suma = numero1 + numero2
        alert("La suma es " + suma)
      }

      resta_y_muestra()

      function resta_y_muestra() {
        let resta = numero1 - numero2
        alert("la resta  es " + resta)
      }

      mult_y_muestra()

      function mult_y_muestra() {
        let multiplicacion = numero1 * numero2
        alert("La multiplicacion es " + multiplicacion)
      }

      division_y_muestra()

      function division_y_muestra() {
        let divi = numero1 / numero2
        alert("La division es " + divi)
      }

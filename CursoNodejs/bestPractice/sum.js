/**
 * funcion para sumar recibe 2 numeros
 * 1. si alguno de los dos parametros no lo ingresan toman 0 para evitar el NaN
 * 2. evitar que ingresen datos diferentes a numeros
 * 3. limitar numeros largos a e12
 * 4. enteros y decimales
 * 5. retorna numero int o boolean
 * @param n1
 * @param n2
 * @returns
 */
function sum(n1 = 0, n2 = 0) {
  try {
        validateIsNaN(n1, n2);
        validateLength(n1, n2);
        validateOnlyNumber(n1, n2);
        return n1 + n2;
    } catch (err) {
        return err
    }
}

/**
 * 
 * @param n1 
 * @param n2 
 */
function validateLength(n1, n2) {
  if (Math.abs(n1) > 1e12 || Math.abs(n2) > 1e12) {
    throw new Error("Los números son demasiado largos, max 20 caracteres.");
  }
}

/**
 * 
 * @param n1 
 * @param n2 
 */
function validateOnlyNumber(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Los argumentos deben ser números.");
  }
}

/**
 * 
 * @param n1 
 * @param n2 
 */
function validateIsNaN(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Ambos argumentos deben ser números.");
  }
}


function errorCustom(err){
    throw new Error(err);
}

module.exports = { sum }
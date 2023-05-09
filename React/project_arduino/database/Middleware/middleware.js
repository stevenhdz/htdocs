const validarAutenticacion = (req, res, next) => {
  //hacerlo con jwt y no hash
  const usuarioAutenticado = true; // Ejemplo: usuario no autenticado
  if (usuarioAutenticado) {
    next();
  } else {
    res.status(401).send("Acceso no autorizado. Por favor inicia sesión.");
  }
};

module.exports = {
  validarAutenticacion,
};

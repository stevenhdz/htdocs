const ErrorCodes = Object.freeze({
  CP_VAL_001: {
    code: 'CP_VAL_001',
    internalMsg: 'Documento duplicado',
    publicMsg: 'El documento ya está registrado',
    httpStatus: 409,
    logLevel: 'warn'
  },
  CP_VAL_002: {
    code: 'CP_VAL_002',
    internalMsg: 'Email con formato inválido',
    publicMsg: 'El email no es válido',
    httpStatus: 400,
    logLevel: 'warn'
  },
  CP_BUS_001: {
    code: 'CP_BUS_001',
    internalMsg: 'Cliente no encontrado en BD',
    publicMsg: 'Cliente no encontrado',
    httpStatus: 404,
    logLevel: 'info'
  },

  SYS_INF_001: {
    code: 'SYS_INF_001',
    internalMsg: 'Error interno no manejado',
    publicMsg: 'Ocurrió un error inesperado',
    httpStatus: 500,
    logLevel: 'error'
  },
  SYS_CB_001: {
    code: 'SYS_CB_001',
    internalMsg: 'Circuit breaker abierto — servicio no disponible temporalmente',
    publicMsg: 'Servicio temporalmente no disponible, intente más tarde',
    httpStatus: 503,
    logLevel: 'warn'
  }
});

module.exports = ErrorCodes;
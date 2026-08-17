const crypto = require('crypto');
const AppError = require('../errors/AppError');
const ErrorCodes = require('../errors/errorCodes');

const logger = {
  info: (msg, data) => console.log(`[INFO]  ${msg}`, JSON.stringify(data || {})),
  warn: (msg, data) => console.warn(`[WARN]  ${msg}`, JSON.stringify(data || {})),
  error: (msg, data) => console.error(`[ERROR] ${msg}`, JSON.stringify(data || {}))
};

function errorHandler(err, req, res, next) {
  const errorId = crypto.randomUUID();

  if (err instanceof AppError) {
    const ec = err.errorCode;

    logger[ec.logLevel](`[${ec.code}] ${ec.internalMsg}`, {
      errorId,
      context: err.context,
      path: req.path,
      method: req.method
    });

    return res.status(ec.httpStatus).json({
      errorCode: ec.code,
      message: ec.publicMsg,
      errorId
    });
  }

  logger.error('Error no manejado', {
    errorId,
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method
  });

  return res.status(500).json({
    errorCode: ErrorCodes.SYS_INF_001.code,
    message: ErrorCodes.SYS_INF_001.publicMsg,
    errorId
  });
}

module.exports = errorHandler;
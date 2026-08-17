class AppError extends Error {
  constructor(errorCode, context = {}) {
    super(errorCode.internalMsg);
    this.name = 'AppError';
    this.errorCode = errorCode;
    this.context = context;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
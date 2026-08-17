const AppError = require('./AppError');
const ErrorCodes = require('./errorCodes');

const STATES = Object.freeze({ CLOSED: 'CLOSED', OPEN: 'OPEN', HALF_OPEN: 'HALF_OPEN' });

class CircuitBreaker {
  constructor({ failureThreshold = 3, successThreshold = 2, timeout = 10000 } = {}) {
    this.failureThreshold = failureThreshold;
    this.successThreshold = successThreshold;
    this.timeout = timeout;

    this.state = STATES.CLOSED;
    this.failureCount = 0;
    this.successCount = 0;
    this.nextAttemptAt = null;
  }

  async call(fn) {
    if (this.state === STATES.OPEN) {
      if (Date.now() < this.nextAttemptAt) {
        throw new AppError(ErrorCodes.SYS_CB_001, {
          retryAfterMs: this.nextAttemptAt - Date.now(),
          state: this.state
        });
      }
      this._transitionTo(STATES.HALF_OPEN);
    }

    try {
      const result = await fn();
      this._onSuccess();
      return result;
    } catch (err) {
      // No contar fallos de lógica de negocio (4xx), solo fallos de infraestructura
      if (err instanceof AppError && err.errorCode.httpStatus < 500) throw err;
      this._onFailure();
      throw err;
    }
  }

  _onSuccess() {
    this.failureCount = 0;
    if (this.state === STATES.HALF_OPEN) {
      this.successCount++;
      if (this.successCount >= this.successThreshold) {
        this.successCount = 0;
        this._transitionTo(STATES.CLOSED);
      }
    }
  }

  _onFailure() {
    this.failureCount++;
    this.successCount = 0;
    if (this.failureCount >= this.failureThreshold || this.state === STATES.HALF_OPEN) {
      this.nextAttemptAt = Date.now() + this.timeout;
      this._transitionTo(STATES.OPEN);
    }
  }

  _transitionTo(newState) {
    console.warn(`[CircuitBreaker] ${this.state} → ${newState}`);
    this.state = newState;
  }

  getStatus() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      successCount: this.successCount,
      nextAttemptAt: this.nextAttemptAt
    };
  }
}

module.exports = CircuitBreaker;

const AppError = require('../errors/AppError');
const ErrorCodes = require('../errors/errorCodes');
const CircuitBreaker = require('../errors/CircuitBreaker');

const customers = [
  { id: 1, documento: '12345', email: 'ana@test.com', nombre: 'Ana' }
];

// Un breaker por servicio/recurso externo (aquí simula la "BD")
const dbBreaker = new CircuitBreaker({ failureThreshold: 3, successThreshold: 2, timeout: 15000 });

// Simula el acceso a la BD; lanza error de infraestructura con cierta probabilidad
function dbFindCustomer(id) {
  const customer = customers.find(c => c.id === Number(id));
  if (!customer) throw new AppError(ErrorCodes.CP_BUS_001, { searchedId: id });
  return customer;
}

function dbInsertCustomer(data) {
  const newCustomer = { id: customers.length + 1, ...data };
  customers.push(newCustomer);
  return newCustomer;
}

async function findCustomer(id) {
  return dbBreaker.call(() => dbFindCustomer(id));
}

async function registerCustomer({ documento, email, nombre }) {
  if (!email || !email.includes('@')) {
    throw new AppError(ErrorCodes.CP_VAL_002, { email });
  }

  if (customers.some(c => c.documento === documento)) {
    throw new AppError(ErrorCodes.CP_VAL_001, { documento });
  }

  return dbBreaker.call(() => dbInsertCustomer({ documento, email, nombre }));
}

function getCircuitBreakerStatus() {
  return dbBreaker.getStatus();
}

// Solo para demos/tests: fuerza un fallo de infraestructura en el breaker
async function simulateDbFailure() {
  return dbBreaker.call(() => {
    throw new Error('DB connection timeout (simulado)');
  });
}

module.exports = { findCustomer, registerCustomer, getCircuitBreakerStatus, simulateDbFailure };

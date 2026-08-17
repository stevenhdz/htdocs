const customerService = require('../services/customerService');

async function getCustomer(req, res, next) {
  try {
    const customer = await customerService.findCustomer(req.params.id);
    res.json(customer);
  } catch (err) {
    next(err);
  }
}

async function createCustomer(req, res, next) {
  try {
    const customer = await customerService.registerCustomer(req.body);
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
}

function crash(req, res) {
  const obj = null;
  obj.algo.que.no.existe;
}

function circuitBreakerStatus(req, res) {
  res.json(customerService.getCircuitBreakerStatus());
}

async function simulateDbFailure(req, res, next) {
  try {
    await customerService.simulateDbFailure();
  } catch (err) {
    next(err);
  }
}

module.exports = { getCustomer, createCustomer, crash, circuitBreakerStatus, simulateDbFailure };
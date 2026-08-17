const express = require('express');
const customerController = require('../controllers/customerController');
const errorHandler = require('../middleware/errorHandler');

const app = express();
app.use(express.json());

app.get('/customers/:id', customerController.getCustomer);
app.post('/customers', customerController.createCustomer);
app.get('/crash', customerController.crash);
app.get('/circuit-breaker/status', customerController.circuitBreakerStatus);
app.post('/circuit-breaker/simulate-failure', customerController.simulateDbFailure);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\nServidor en http://localhost:${PORT}\n`);
});
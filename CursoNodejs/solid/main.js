"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const s_1 = require("./s");
const o_1 = require("./o");
// Ejemplo de uso
const regularEmployee = new s_1.RegularEmployee(1, 'John Doe', 5000);
const contractEmployee = new s_1.ContractEmployee(2, 'Jane Smith', 20, 40);
const payroll = new o_1.Payroll();
const totalSalary = payroll.calculateTotalSalary([regularEmployee, contractEmployee]);
console.log('Total salary:', totalSalary);

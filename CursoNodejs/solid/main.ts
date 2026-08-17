import { RegularEmployee, ContractEmployee } from './s';
import { Payroll } from './o';

// Ejemplo de uso
const regularEmployee = new RegularEmployee(1, 'John Doe', 5000);
const contractEmployee = new ContractEmployee(2, 'Jane Smith', 20, 40);

const payroll = new Payroll();
const totalSalary = payroll.calculateTotalSalary([regularEmployee, contractEmployee]);

console.log('Total salary:', totalSalary);

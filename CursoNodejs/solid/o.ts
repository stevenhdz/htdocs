import { Employee } from './s';

// Clase para calcular la nómina de los empleados
export class Payroll {
    // OCP: Esta clase está cerrada para modificaciones y abierta para extensiones
    calculateTotalSalary(employees: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employees) {
            totalSalary += employee.calculateSalary();
        }
        return totalSalary;
    }
}
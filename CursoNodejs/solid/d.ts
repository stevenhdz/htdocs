import { Employee } from './i';

// Clase para calcular la nómina de los empleados
export class Payroll {
    // DIP: Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
    calculateTotalSalary(employees: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employees) {
            totalSalary += employee.calculateSalary();
        }
        return totalSalary;
    }
}
import { Employee } from './s';

// Clase para calcular la nómina de los empleados
export class Payroll {
    // LSP: Los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin afectar la corrección del programa.
    calculateTotalSalary(employees: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employees) {
            totalSalary += employee.calculateSalary();
        }
        return totalSalary;
    }
}
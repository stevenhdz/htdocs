"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payroll = void 0;
// Clase para calcular la nómina de los empleados
class Payroll {
    // LSP: Los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin afectar la corrección del programa.
    calculateTotalSalary(employees) {
        let totalSalary = 0;
        for (const employee of employees) {
            totalSalary += employee.calculateSalary();
        }
        return totalSalary;
    }
}
exports.Payroll = Payroll;

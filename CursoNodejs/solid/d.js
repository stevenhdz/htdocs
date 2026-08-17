"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payroll = void 0;
// Clase para calcular la nómina de los empleados
class Payroll {
    // DIP: Los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones.
    calculateTotalSalary(employees) {
        let totalSalary = 0;
        for (const employee of employees) {
            totalSalary += employee.calculateSalary();
        }
        return totalSalary;
    }
}
exports.Payroll = Payroll;

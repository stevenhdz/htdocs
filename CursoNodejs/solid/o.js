"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payroll = void 0;
// Clase para calcular la nómina de los empleados
class Payroll {
    // OCP: Esta clase está cerrada para modificaciones y abierta para extensiones
    calculateTotalSalary(employees) {
        let totalSalary = 0;
        for (const employee of employees) {
            totalSalary += employee.calculateSalary();
        }
        return totalSalary;
    }
}
exports.Payroll = Payroll;

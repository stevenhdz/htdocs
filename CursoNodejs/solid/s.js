"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractEmployee = exports.RegularEmployee = void 0;
// Implementación de un empleado regular
class RegularEmployee {
    constructor(id, name, baseSalary) {
        this.id = id;
        this.name = name;
        this.baseSalary = baseSalary;
    }
    calculateSalary() {
        return this.baseSalary;
    }
}
exports.RegularEmployee = RegularEmployee;
// Implementación de un empleado contratado
class ContractEmployee {
    constructor(id, name, hourlyRate, hoursWorked) {
        this.id = id;
        this.name = name;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    calculateSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
exports.ContractEmployee = ContractEmployee;

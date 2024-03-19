// Interfaz para definir la estructura básica de un empleado
export interface Employee {
    id: number;
    name: string;
    calculateSalary(): number;
}

// Implementación de un empleado regular
export class RegularEmployee implements Employee {
    constructor(public id: number, public name: string, private baseSalary: number) {}

    calculateSalary(): number {
        return this.baseSalary;
    }
}

// Implementación de un empleado contratado
export class ContractEmployee implements Employee {
    constructor(public id: number, public name: string, private hourlyRate: number, private hoursWorked: number) {}

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}
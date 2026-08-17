// Interfaz para definir la estructura básica de un empleado
export interface Employee {
    id: number;
    name: string;
    calculateSalary(): number;
}
function calculateSalary(employee) {
    return employee.hoursWorked * employee.payPerHour;
}

function generateReport(employee, salary) {
    const report = `
        Name: ${employee.name}
        Hours worked: ${employee.hoursWorked}
        Pay per hour: ${employee.payPerHour}
        Total: ${employee.salary}
    `

    console.log(report)
}

const salary = calculateSalary(employee)
generateReport(employee, salary)
//Part 3: Array with Types and Indexing - Employee Salaries
//2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.
let employees = [
    {
        name: "Amjad",
        hoursWorked: 140,
        hourlyRate: 120,
        salary: 50,
    },
    {
        name: "Amar",
        hoursWorked: 148,
        hourlyRate: 123,
        salary: 45,
    },
    {
        name: "Anwar",
        hoursWorked: 134,
        hourlyRate: 123,
        salary: 30,
    },
];
//3. Implement a function named calculateSalary that calculates the salary for each employee based on the hours worked and hourly rate.
function calSalary(employee) {
    let baseSalary = employee.hoursWorked * employee.hourlyRate;
    //4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
    if (employee.hoursWorked >= 20) {
        baseSalary *= 1.1;
    }
    const updatedEmployee = {
        ...employee,
        salary: baseSalary,
    };
    return updatedEmployee;
}
employees = employees.map(calSalary);
console.log(employees);
export {};

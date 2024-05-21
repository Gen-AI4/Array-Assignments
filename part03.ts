//Part 3: Array with Types and Indexing - Employee Salaries

//Challenge:
//You are managing employee salaries for a company. Implement logic to calculate salaries and handle bonuses.

//1. Define a type alias named Employee with the following properties:
//• name (string): The name of the employee.
//• hoursWorked (number): The number of hours the employee worked.
//• hourlyRate (number): The hourly rate of the employee.
//• salary (number): The base salary of the employee.

type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};
//2. Define an array named employees containing employee objects. Each employee object should include a name, hoursWorked, hourlyRate, and salary.

let employees: Employee[] = [
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

function calSalary(employee: Employee): Employee {
  let baseSalary = employee.hoursWorked * employee.hourlyRate;
//4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.
  
  if (employee.hoursWorked >= 20) {
    baseSalary *= 1.1;
  }

  const updatedEmployee: Employee = {
    ...employee,
    salary: baseSalary,
  };

  return updatedEmployee;
}

employees = employees.map(calSalary);

console.log(employees);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    displayEmployee() {
        console.log("Employee:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}
const emp = new Employee("Rahul", 60000, "IT");
emp.displayEmployee();
console.log(emp.name);

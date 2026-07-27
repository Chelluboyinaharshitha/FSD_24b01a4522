"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name) {
        this.employeeId = id;
        this.employeeName = name;
    }
    showDetails() {
        console.log("Company:", Employee.companyName);
        console.log("Employee ID:", this.employeeId);
        console.log("Employee Name:", this.employeeName);
    }
}
Employee.companyName = "Infosys";
const emp1 = new Employee(1001, "Madhurima");
emp1.showDetails();

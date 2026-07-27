"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, rollNo, course) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }
    displayDetails() {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNo);
        console.log("Course:", this.course);
    }
}
const student1 = new Student("Harshitha", 4522, "AI & DS");
student1.displayDetails();

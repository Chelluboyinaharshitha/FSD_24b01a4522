"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    display() {
        console.log("College:", Student.collegeName);
        console.log("Roll Number:", this.rollNo);
        console.log("Student Name:", this.name);
    }
}
Student.collegeName = "SVECW";
const s1 = new Student(4522, "Harshitha");
s1.display();

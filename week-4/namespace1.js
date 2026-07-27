"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentInfo;
(function (StudentInfo) {
    class Student {
        constructor(name, roll) {
            this.name = name;
            this.roll = roll;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Roll:", this.roll);
        }
    }
    StudentInfo.Student = Student;
})(StudentInfo || (StudentInfo = {}));
const s = new StudentInfo.Student("Harshitha", 4522);
s.display();

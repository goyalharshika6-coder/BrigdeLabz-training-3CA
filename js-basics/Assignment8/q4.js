class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " is doing employee work.";
    }
}

class Manager extends Employee {
    work() {
        return this.name + " is managing the department.";
    }
}

let e1 = new Employee("Rahul", "IT");
let e2 = new Manager("Priya", "HR");

console.log(e1.name);
console.log(e1.work());

console.log("------------------");

console.log(e2.name);
console.log(e2.work());


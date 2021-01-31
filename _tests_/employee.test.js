const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Will create a new employee", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    it("Will get the employees name using constructor function", () => {
        const empName = "Dylan";
        const emp = new Employee(empName);
        expect(emp.name).toBe(empName);
    });

    it("Will get the employee id using constructor function", () => {
        const empID = 25;
        const emp = new Employee("Dylan", empID);
        expect(emp.id).toBe(empID);
    });

    it("Can get email using constructor function", () => {
        const empEmail = "test@test.com";
        const emp = new Employee("Dylan", 25, empEmail);
        expect(emp.email).toBe(empEmail);
    });



const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Will create a new employee", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    it("Will set the employee's name using constructor function", () => {
        const empName = "Dave";
        const emp = new Employee(empName);
        expect(emp.name).toBe(empName);
    });

    it("Will set the employee id using constructor function", () => {
        const empID = 25;
        const emp = new Employee("Dylan", empID);
        expect(emp.id).toBe(empID);
    });

    it("Will set email using constructor function", () => {
        const empEmail = "test_email@testmail.com";
        const emp = new Employee("Dylan", 25, empEmail);
        expect(emp.email).toBe(empEmail);
    });

    describe("getName", () => {
        it("Will get name using getName function", () => {
            const empName = "Dylan";
            const emp = new Employee(empName);
            expect(emp.getName()).toBe(empName);
        });
    });

    describe("getId", () => {
        it("Will get id using getId function", () => {
            const empID = 25;
            const emp = new Employee("Dylan", empID);
            expect(emp.getId()).toBe(empID);
        });
    });

    describe("getEmail", () => {
        it("Will display email using getEmail function", () => {
            const empEmail = "test_email@testmail.com";
            const emp = new Employee("Dylan", 25, empEmail);
            expect(emp.getEmail()).toBe(empEmail);
        });
    });
        
    describe("getRole", () => {
        it("Will return 'Employee' using getRole function", () => {
            const empRole = "Employee";
            const emp = new Employee("Dylan", 25, "test_email@testmail.com");
            expect(emp.getRole()).toBe(empRole);
        });
    });

});

module.exports = Employee;



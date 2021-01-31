const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Will create a new employee", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    it("Will get the employees name using constructor function", () => {
        const empName = "Dave";
        const emp = new Employee(empName);
        expect(emp.name).toBe(empName);
    });

    it("Will get the employee id using constructor function", () => {
        const empID = 25;
        const emp = new Employee("Dylan", empID);
        expect(emp.id).toBe(empID);
    });

    it("Will get email using constructor function", () => {
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



});



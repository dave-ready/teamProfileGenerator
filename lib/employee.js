class Employee {
    constructor(employeeName = "", employeeID = "", employeeEmail = "") {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeEmail = employeeEmail;
    }

    getName() {
        return this.employeeName;
    }
    

    getId() {
        return this.employeeID;
    }

    getEmail() {
        return this.employeeEmail;
    }

    getRole() {
        return Employee;
    }
}

module.exports = Employee;
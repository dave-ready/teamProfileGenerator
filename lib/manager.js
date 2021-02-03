const Employee = require ("./Employee");

//class declaration

class Manager extends Employee {
    constructor (memberName, memberID, memberEmail, officeNumber) {
        super (memberName, memberID, memberEmail);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

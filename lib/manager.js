const Employee = require ("./employee");

//class declaration

class Manager extends Employee {
    constructor (memberName, memberID, memberEmail, officeNumber) {
        super (memberName, memberID, memberEmail);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }

    getRole() {
        return this.title;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;

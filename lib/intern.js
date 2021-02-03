const Employee = require("./Employee");

//class declaration
class Intern extends Employee {
    constructor (memberName, memberID, memberEmail, memberSchool) {
        super (memberName, memberID, memberEmail);
        this.memberSchool = memberSchool;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.memberSchool;
    }
}

module.exports = Intern;

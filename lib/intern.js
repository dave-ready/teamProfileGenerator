const Employee = require("./employee");

//class declaration
class Intern extends Employee {
    constructor (memberName, memberID, memberEmail, memberSchool) {
        super (memberName, memberID, memberEmail);
        this.memberSchool = memberSchool;
        this.title = "Intern"
    }
    getRole() {
        return this.title;
    }
    getSchool() {
        return this.memberSchool;
    }
}

module.exports = Intern;

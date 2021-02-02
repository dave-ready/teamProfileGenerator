const Employee = require("./Employee");

//class declaration
class Engineer extends Employee {
    constructor (memberName, memberID, memberEmail, memberGithub) {
        super(memberName, memberID, memberEmail);
        this.memberGithub = memberGithub;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.memberGithub;
    }
}

module.exports = Engineer;
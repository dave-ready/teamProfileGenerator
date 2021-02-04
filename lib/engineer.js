const Employee = require("./employee");

//class declaration
class Engineer extends Employee {
    constructor (memberName, memberID, memberEmail, memberGithub) {
        super(memberName, memberID, memberEmail);
        this.memberGithub = memberGithub;
        this.title = "Engineer"
    }
    getRole() {
        return this.title;
    }
    getGithub() {
        return this.memberGithub;
    }
}

module.exports = Engineer;
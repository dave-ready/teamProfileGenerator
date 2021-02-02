//class declaration
class Employee {
    constructor(memberName, memberID, memberEmail) {
        this.memberName = memberName;
        this.memberID = memberID;
        this.memberEmail = memberEmail;
    }

    getName() {
        return this.memberName;
    }
    

    getID() {
        return this.memberID;
    }

    getEmail() {
        return this.memberEmail;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
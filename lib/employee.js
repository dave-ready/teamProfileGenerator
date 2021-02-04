//class declaration
//constructor
class Employee {
    constructor(memberName, memberID, memberEmail) {
        this.memberName = memberName;
        this.memberID = memberID;
        this.memberEmail = memberEmail;
        this.title = "Employee"
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
        return this.title;
    }
}

module.exports = Employee;
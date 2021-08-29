const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNo) {
        // Call parent constructor
        super(name, id, email);

        this.officeNo = officeNo;
    }

    getOfficeNo() {
        return this.officeNo
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
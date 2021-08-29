const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Call parent constructor
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
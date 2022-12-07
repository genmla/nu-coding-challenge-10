const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(Employee.name, Employee.id, Employee.email, Employee.role);
        this.school = school;
    }

    getSchool() {
        return this.school
    }
    getRole() {
        return this.role
    }
    generateInternCard = () =>
        `
        <li class="list-group-item">School: ${this.school}</li>
        </ul>
        </div>`
}

module.exports = Intern;
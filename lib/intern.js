const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(Employee.name, Employee.id, Employee.email, Employee.role);
        this.school = school;
    }

    getSchool() {
        console.log(`School: ${school}`)
    }
    getRole() {
        console.log('Intern')
        return
    }
    generateInternCard = () =>
        `
        <li class="list-group-item">School: ${this.school}</li>
        </ul>
        </div>`
}

module.exports = Intern;
const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super(response.name, response.id, response.email, response.role);
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
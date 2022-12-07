const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(Employee.name, Employee.id, Employee.email, Employee.role);
        this.github = github;
    }

    getGithub() {
        return this.github
    }
    getRole() {
        return this.role
    }
    generateEngineerCard = () =>
        `
        <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}">${this.github}</a></li>
        </ul>
        </div>`
}

module.exports = Engineer;
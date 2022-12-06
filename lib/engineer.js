const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(response.name, response.id, response.email, response.role);
        this.github = github;
    }

    getGithub() {
        console.log(`GitHub: ${github}`)
    }
    getRole() {
        console.log('Engineer')
        return
    }
    generateEngineerCard = () =>
        `
        <li class="list-group-item">GitHub: ${this.github}</li>
        </ul>
        </div>`
}

module.exports = Engineer;
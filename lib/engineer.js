const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super('name', 'id', 'email', 'Engineer');
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
        <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}">${this.github}</a></li>
        </ul>
        </div>`
}

module.exports = Engineer;
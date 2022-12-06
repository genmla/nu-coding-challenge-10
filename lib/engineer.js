const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, github) {
      super(name, id, email);
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

                         <li class="list-group-item">${this.github}</li>
                         </ul>
                 </div>`
}

module.exports = Engineer;
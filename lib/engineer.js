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
}

module.exports = Engineer;
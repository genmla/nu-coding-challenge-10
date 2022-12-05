const Employee = require('./employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, officeNumber) {
      super(name, id, email,);
      this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        console.log(`Office Number: ${officeNumber}`)
    }
    getRole() {
        console.log('Manager')
        return 
    }
}

module.exports = Manager;
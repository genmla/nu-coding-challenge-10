const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, officeNumber) {
      super(name, id, email);
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

// const ManagerInput = new Manager (Manager.name, Manager.officeNumber)

// ManagerInput.getofficeNumber();
// ManagerInput.getRole();

module.exports = Manager;
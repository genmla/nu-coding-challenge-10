const Employee = require('./employee');
const inquirer = require('inquirer');
const fs = require("fs");

class Manager extends Employee {
    constructor(officeNumber) {
        super(response.name, response.id, response.email, response.role);
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        console.log(`Office Number: ${officeNumber}`)
    }
    getRole() {
        console.log('Manager')
        return
    }
    generateManagerCard = () =>
        `

                             <li class="list-group-item">${this.officeNumber}</li>
                             </ul>
                     </div>`

}
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Office Number:',
            name: 'officeNumber',
        },
    ])
    .then((answer) => {
        const manager = new Manager(answer.officeNumber)
        console.log(manager.officeNumber)
        console.log(response.name)
        return manager
    })

module.exports = Manager;
const Employee = require('./employee');

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
        <li class="list-group-item">Office: ${this.officeNumber}</li>
        </ul>
        </div>`

}
module.exports = Manager;
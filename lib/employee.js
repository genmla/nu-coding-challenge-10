const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }
    generateEmployeeCard = () =>
        `
                         <div class="card col-3 p-0">
                             <div class="card-header text-bg-primary">
                             ${this.role}
                             </div>
                             <ul class="list-group list-group-flush">
                                 <li class="list-group-item">${this.name}</li>
                                 <li class="list-group-item">${this.id}</li>
                                 <li class="list-group-item"><a href="mailto:${this.email}">${this.email}</a></li>`
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Employee:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'ID::',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
        },
        {
            type: 'checkbox',
            message: 'Role:',
            name: 'role',
            choices:
                ['Manager',
                    'Engineer',
                    'Intern']
        },
    ])
    .then((response) => {
        const employee = new Employee(response.name, response.id, response.email, response.role)
        employee.generateEmployeeCard()
    })

module.exports = Employee;
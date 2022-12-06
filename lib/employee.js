const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        console.log(`Name: ${this.name}`)
    }

    getId() {
        console.log(`ID: ${this.id}`)
    }

    getEmail() {
        console.log(`Email: ${this.email}`)
    }

    getRole() {
        console.log(`Role: ${this.role}`)
        return
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
                                 <li class="list-group-item">${this.email}</li>`
}

module.exports = Employee;
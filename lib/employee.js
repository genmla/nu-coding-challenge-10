class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email;
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
        console.log('Employee')
        return
    }
}

// const EmployeeInput = () => {

// }
// new Employee ($(Employee.name, Employee.id, Employee.email))



// EmployeeInput.getName();
// EmployeeInput.getId();
// EmployeeInput.getEmail();
// EmployeeInput.getRole();

module.exports = Employee;
const Employee = require('./employee');
const inquirer = require('inquirer');
const fs = require("fs");

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
        {
            type: 'input',
            message: 'Office Number:',
            name: 'officeNumber',
        },
    ])
    .then((response) => {
        const employee = new Employee(response.name, response.id, response.email, response.role)
        employee.getRole();
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

        const htmlcontent =

            `<!DOCTYPE html>
                <html lang="en">
                               
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">                              
                        <title>Team Profile</title>
                    </head>
                               
                    <body>
                        <header class="jumbotron text-center p-2 m-2">
                            <h1 class="display-3 text-bg-danger">Team Profile</h1>
                        </header>
                               
                        <div class="container">
                            <div class="row justify-content-around">
        
                                ${employee.generateEmployeeCard()}
                                
                            </div>
                        </div>
                                    
                    </body>
                                
                </html>`;

        fs.writeFile('dist/index.html', htmlcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created Team Profile in index.html file found in the dist folder!')
        )
    })




module.exports = Manager;
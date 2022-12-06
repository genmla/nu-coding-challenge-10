const inquirer = require('inquirer');
const fs = require("fs");
// const Manager = require('./manager')

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

        if (response.role == 'Manager') {
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
                    const htmlcontent =

                    `<!DOCTYPE html>
                                        <html lang="en">
                                       
                                        <head>
                                            <meta charset="UTF-8" />
                                           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                                           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                                                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
                                        </head>
                                       
                                       <title>Team Profile</title>
                                       </head>
                                       
                                       <body>
                                           <header class="jumbotron text-center p-2 m-2">
                                                <h1 class="display-3 text-bg-danger">Team Profile</h1>
                                           </header>
                                       
                                           <div class="container">
                                               <div class="row justify-content-around">
                
                                                ${employee.generateEmployeeCard()}
                                                ${manager.generateManagerCard()}
                                                </div>
                                            </div>
                                            
                                        </body>
                                        
                                        </html>`;
        
                fs.writeFile('../dist/index.html', htmlcontent, (err) =>
                    err ? console.log(err) : console.log('Successfully created Team Profile in index.html file found in the dist folder!')
                );
                })
        }
        if (response.role == 'Engineer') {
            class Engineer extends Employee {
                constructor(github) {
                    super(response.name, response.id, response.email, response.role);
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
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'GitHub:',
                        name: 'github',
                    },
                ])
                .then((answer) => {
                    const engineer = new Engineer(answer.github)
                    const htmlcontent =

                    `<!DOCTYPE html>
                                        <html lang="en">
                                       
                                        <head>
                                            <meta charset="UTF-8" />
                                           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                                           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                                                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
                                        </head>
                                       
                                       <title>Team Profile</title>
                                       </head>
                                       
                                       <body>
                                           <header class="jumbotron text-center p-2 m-2">
                                                <h1 class="display-3 text-bg-danger">Team Profile</h1>
                                           </header>
                                       
                                           <div class="container">
                                               <div class="row justify-content-around">
                
                                                ${employee.generateEmployeeCard()}
                                                ${engineer.generateEngineerCard()}
                                                </div>
                                            </div>
                                            
                                        </body>
                                        
                                        </html>`;
        
                fs.writeFile('../dist/index.html', htmlcontent, (err) =>
                    err ? console.log(err) : console.log('Successfully created Team Profile in index.html file found in the dist folder!')
                );
                })
        }
        if (response.role == 'Engineer') {
            class Intern extends Employee {
                constructor(school) {
                    super(response.name, response.id, response.email, response.role);
                    this.school = school;
                }

                getSchool() {
                    console.log(`School: ${school}`)
                }
                getRole() {
                    console.log('Intern')
                    return
                }
                generateInternCard = () =>
                    `
                    
                                             <li class="list-group-item">${this.school}</li>
                                             </ul>
                                     </div>`
            }
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'School:',
                        name: 'school',
                    },
                ])
                .then((answer) => {
                    const intern = new Intern(answer.school)
                    const htmlcontent =

                    `<!DOCTYPE html>
                                        <html lang="en">
                                       
                                        <head>
                                            <meta charset="UTF-8" />
                                           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                                            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                                           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                                                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
                                        </head>
                                       
                                       <title>Team Profile</title>
                                       </head>
                                       
                                       <body>
                                           <header class="jumbotron text-center p-2 m-2">
                                                <h1 class="display-3 text-bg-danger">Team Profile</h1>
                                           </header>
                                       
                                           <div class="container">
                                               <div class="row justify-content-around">
                
                                                ${employee.generateEmployeeCard()}
                                                ${intern.generateInternCard()}
                                                </div>
                                            </div>
                                            
                                        </body>
                                        
                                        </html>`;
        
                fs.writeFile('../dist/index.html', htmlcontent, (err) =>
                    err ? console.log(err) : console.log('Successfully created Team Profile in index.html file found in the dist folder!')
                );
                })
        }
        
    })

module.exports = Employee;
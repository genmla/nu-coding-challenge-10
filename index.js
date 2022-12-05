const Employee = require('./lib/employee');
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const fs = require("fs");
const inquirer = require("inquirer")

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
        employee.getName();
        employee.getId();
        employee.getEmail();
        employee.getRole();
        
        if (response.role == 'Manager') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'Office Number:',
                        name: 'officeNumber',
                    },
                ])
                .then(() => {
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

                                </div>
                            </div>
                            
                        </body>
                        
                        </html>`;
                    
                    fs.writeFile('./dist/index.html', htmlcontent, (err) =>
                        err ? console.log(err) : console.log('Successfully created index.html!')
                    );
            })
        }        
    })

    
// const generateHTML = () =>
//     `<!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
//           integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
//   </head>
  
//   <title>Team Profile</title>
//   </head>
  
//   <body>
//       <header class="jumbotron text-center p-2 m-2">
//           <h1 class="display-3 text-bg-danger">Team Profile</h1>
//       </header>
  
//       <div class="container">
//           <div class="row justify-content-around">
//           ${generateEmployeeCard}
//               <div class="card col-3 p-0">
//                   <div class="card-header text-bg-primary">
//                       Role
//                   </div>
//                   <ul class="list-group list-group-flush">
//                       <li class="list-group-item">Name</li>
//                       <li class="list-group-item">ID</li>
//                       <li class="list-group-item">Email</li>
//                   </ul>
//               </div>
//               <div class="card col-3 p-0">
//                   <div class="card-header text-bg-primary">
//                       Role
//                   </div>
//                   <ul class="list-group list-group-flush">
//                       <li class="list-group-item">Name</li>
//                       <li class="list-group-item">ID</li>
//                       <li class="list-group-item">Email</li>
//                   </ul>
//               </div>
//               <div class="card col-3 p-0">
//                   <div class="card-header text-bg-primary">
//                       Role
//                   </div>
//                   <ul class="list-group list-group-flush">
//                       <li class="list-group-item">Name</li>
//                       <li class="list-group-item">ID</li>
//                       <li class="list-group-item">Email</li>
//                   </ul>
//               </div>
//               <div class="card col-3 p-0">
//                   <div class="card-header text-bg-primary">
//                       Role
//                   </div>
//                   <ul class="list-group list-group-flush">
//                       <li class="list-group-item">Name</li>
//                       <li class="list-group-item">ID</li>
//                       <li class="list-group-item">Email</li>
//                   </ul>
//               </div>
//           </div>
//       </div>
  
//   </body>
  
//   </html>`;

// const htmlcontent = generateHTML();

// fs.writeFile('./dist/index.html', htmlcontent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
// );

const inquirer = require('inquirer');

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
    generateEmployeeCard = () =>
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
                         <div class="card col-3 p-0">
                             <div class="card-header text-bg-primary">
                                 Employee
                             </div>
                             <ul class="list-group list-group-flush">
                                 <li class="list-group-item">${this.name}</li>
                                 <li class="list-group-item">${this.id}</li>
                                 <li class="list-group-item">${this.email}</li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 
             </body>
             
             </html>`
}

module.exports = Employee;
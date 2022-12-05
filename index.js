const Employee = require('./lib/employee');
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const fs = require("fs");
const inquirer = require("inquirer")

const generateHTML = ({ name, location, github, linkedin }) =>
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
                      Role
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name</li>
                      <li class="list-group-item">ID</li>
                      <li class="list-group-item">Email</li>
                  </ul>
              </div>
              <div class="card col-3 p-0">
                  <div class="card-header text-bg-primary">
                      Role
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name</li>
                      <li class="list-group-item">ID</li>
                      <li class="list-group-item">Email</li>
                  </ul>
              </div>
              <div class="card col-3 p-0">
                  <div class="card-header text-bg-primary">
                      Role
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name</li>
                      <li class="list-group-item">ID</li>
                      <li class="list-group-item">Email</li>
                  </ul>
              </div>
              <div class="card col-3 p-0">
                  <div class="card-header text-bg-primary">
                      Role
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Name</li>
                      <li class="list-group-item">ID</li>
                      <li class="list-group-item">Email</li>
                  </ul>
              </div>
          </div>
      </div>
  
  </body>
  
  </html>`;


  inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
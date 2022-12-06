const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, school) {
      super(name, id, email);
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

module.exports = Intern;
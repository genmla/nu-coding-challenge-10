const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

const engineer = new Engineer ('gitHub')

test("Manager", () => {
  expect(engineer.github).toEqual('gitHub')
})
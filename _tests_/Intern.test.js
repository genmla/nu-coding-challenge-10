const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

const intern = new Intern ('UT Austin')

test("Manager", () => {
  expect(intern.school).toEqual('UT Austin')
})
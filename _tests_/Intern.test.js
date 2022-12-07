const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

const intern = new Intern ('UT Austin')

test("Intern.school should return entered school", () => {
  expect(intern.school).toEqual('UT Austin')
})

test("getSchool() should return entered school", () => {

  expect(intern.getSchool()).toEqual("UT Austin")
})
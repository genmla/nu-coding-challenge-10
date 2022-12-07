const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

const engineer = new Engineer ('gitHub')

test("Engineer should return the entered gitHub", () => {
  expect(engineer.github).toEqual('gitHub')
})

test("getGithub() should return entered school", () => {

  expect(engineer.getGithub()).toEqual("gitHub")
})
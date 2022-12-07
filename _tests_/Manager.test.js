const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

const manager = new Manager (204)

test("Manager should return entered office number", () => {
  expect(manager.officeNumber).toEqual(204)
})

test("getofficeNumber() should return entered school", () => {

  expect(manager.getofficeNumber()).toEqual(204)
})
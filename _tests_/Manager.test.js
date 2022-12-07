const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

const manager = new Manager (204)

test("Manager", () => {
  expect(manager.officeNumber).toEqual(204)
})
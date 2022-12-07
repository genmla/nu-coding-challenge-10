const Employee = require('../lib/employee');

const employee = new Employee ("Barb", 123, "bby@gmail.com", 'employee')

test("Employee", () => {

  expect(employee.name).toEqual("Barb")
  expect(employee.id).toEqual(123)
  expect(employee.email).toEqual("bby@gmail.com")
  expect(employee.role).toEqual("employee")
    
})
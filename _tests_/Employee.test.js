const Employee = require('../lib/employee');

const employee = new Employee ("Barb", 123, "bby@gmail.com", 'employee')

test("Employee", () => {

  expect(employee.name).toEqual("Barb")
  expect(employee.id).toEqual(123)
  expect(employee.email).toEqual("bby@gmail.com")
  expect(employee.role).toEqual("employee")
    
})

test("getName() should return entered name, getId should return id, getEmail should return email, getRole should return role", () => {

  expect(employee.getName()).toEqual("Barb")
  expect(employee.getId()).toEqual(123)
  expect(employee.getEmail()).toEqual("bby@gmail.com")
  expect(employee.getRole()).toEqual("employee")
    
})
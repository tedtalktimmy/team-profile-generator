const Employee = require("../lib/Employee");

test('creates new employee', () => {
  const employee = new Employee('Jim Jones', 12345, 'jim@jones.com');

  expect(employee.name).toBe('Jim Jones');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe(expect.any(String));

});


test('checks for Employee class', () => {
  const employee = new Employee('Jim Jones', 12345, 'jim@jones.com');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toEqual(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');

});

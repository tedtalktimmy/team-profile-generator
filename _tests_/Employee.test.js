const Employee = require("../lib/Employee");

test("create new employee", () => {
  const employee = new Employee('Jim Jones', 1, 'jim@jones.com');

  expect(employee.name).toBe('Jim Jones');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('check for employee class', () => {
  const employee = new Employee('Jim Jones', 1, 'jim@jones.com');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe('Employee');
});
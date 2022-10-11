const {Manager} = require("../lib/Manager");

test("create new manager", () => {
  const employee = new Manager('Jim Jones', 12345, 'jim@jones.com', 1111111111);

  expect(employee.name).toEqual('Jim Jones');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.officeNumber).toEqual(expect.any(Number));
});

test("check for manager class", () => {
  const employee = new Manager('Jim Jones', 12345, 'jim@jones.com', 1111111111);

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
  expect(employee.getRole()).toBe('Manager');
});
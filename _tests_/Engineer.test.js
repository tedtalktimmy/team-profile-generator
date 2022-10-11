const {Engineer} = require("../lib/Engineer");

test("create new engineer", () => {
  const employee = new Engineer('Jim Jones', 12345, 'jim@jones.com', 'jimJones');

  expect(employee.name).toBe('Jim Jones');
  expect(employee.id).toEqual(expect.any(Number))
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
});

test('check for Engineer class', () => {
  const employee = new Engineer('Jim Jones', 12345, 'jim@jones.com', 'jimJones');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
});
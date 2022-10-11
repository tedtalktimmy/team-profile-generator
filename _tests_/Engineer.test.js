const { Engineer } = require("../lib/Engineer");

test("create new engineer", () => {
  const employee = new Engineer('Jim Jones', 12345, 'jim@jones.com');

  expect(employee.name).toBe('Jim Jones');
  expect(employee.id).toEqual(expect.any(String))
  expect(employee.email).toBe(expect.any(Number));
  expect(employee.github).toBe(expect.any(String));
});

test('check for Engineer class', () => {
  const employee = new Engineer('Jim Jones', 12345, 'jim@jones.com', 'jimJones');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
});
const Intern = require("../lib/Intern");

test("create new intern", () => {
  const employee = new Intern('Jim Jones', 12345, 'jim@jones.com', '2University');

  expect(employee.name).toBe('Jim Jones');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe(expect.any(String));
  expect(employee.school).toBe(expect.any(String));
});

test('check for Interns class', () => {
  const employee = new Intern('Jim Jones', 12345, 'jim@jones.com', 'jimJones', '2University');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getSchool()).toBe(employee.school);
  expect(employee.getRole()).toBe('Intern');
});
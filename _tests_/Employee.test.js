const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe('Initialization', () => {
    it('', () => {
      const employee = new Employee('Jim Jones', 1, 'jim@jones.com');

      expect(employee.name).toEqual('Jim Jones');
      expect(employee.id).teEqual(String);
      expect(employee.email).toBe(expect.any(String));
    });

    it('should throw an err if provided no arguments', () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, 2);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it('should throw an error if "email" is not a string', () => {
      const cb = () => new Employee(3, 2);
      const err = new Error('expected parameter "email" to be string');
      expect(cb).toThrowError(err);
    });
  })
});

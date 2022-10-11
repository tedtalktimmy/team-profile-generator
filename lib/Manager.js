const Employee = require("./Employee");

const manQuestionsArr = [
  {
    message: 'Please enter the name of the manager.',
    type: 'input',
    name: 'name'
  },
  {
    message: 'Please enter an id for the manager.',
    type: 'input',
    name: 'id'
  },
  {
    message: 'Please enter an email for the manager.',
    type: 'input',
    name: 'email'
  },
  {
    message: 'Please enter the office number for the manager',
    type: 'input',
    name: 'officeNumber'
  }
]

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = {Manager, manQuestionsArr};

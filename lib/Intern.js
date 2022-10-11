const Employee = require("./Employee");

const intQuestions = [
  {
    message: 'Please enter the name of the intern.',
    type: 'input',
    name: 'name'
  },
  {
    message: 'Please enter an id for the intern.',
    type: 'input',
    name: 'id'
  },
  {
    message: 'Please enter an email for the intern.',
    type: 'input',
    name: 'email'
  },
  {
    message: 'Please enter the school the intern attends.',
    type: 'input',
    name: 'school'
  }
]

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }

}

module.exports = {Intern, intQuestions};

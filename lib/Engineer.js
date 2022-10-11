const Employee = require("./Employee");

const engQuestionsArr = [
  {
    message: 'please provide the name of the engineer.',
    type: 'input',
    name: 'name'
  },
  {
    message: 'please provide the id of the engineer.',
    type: 'input',
    name: 'id'
  },
  {
    message: 'Please provide an email for the engineer.',
    type: 'input',
    name: 'email'
  },
  {
    message: 'Please provide the github for the engineer.',
    type: 'input',
    name: 'github'
  }
]

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return 'Engineer';
  }
  getGithub() {
    return this.github;
  }
}

module.exports = {Engineer, engQuestionsArr};

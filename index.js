const {Manager, manQuestionsArr} = require('./lib/Manager');
const {Engineer, engQuestionsArr} = require('./lib/Engineer');
const {Intern, intQuestionsArr} = require('./lib/Intern');

// TODO: CODE GOES HERE
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const writeFile = require('./writeFile');

const empArr = []

const init = () => {manQuestions()}
const manQuestions = () => {
  inquirer.prompt(manQuestionsArr).then((answers) => {
    answers = new Manager(answers.name, answers.id, answers.email)
    empArr.push(answers);
    return employeePrompt();
  })
}

const engQuestions = () => {
  inquirer.prompt(engQuestionsArr).then((answers) => {
    answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
    empArr.push(answers);
    return employeePrompt();
  })
}

const intQuestions = () => {
  inquirer.prompt(intQuestionsArr).then((answers) => {
    answers = new Intern(answers.name, answers.id, answers.email, answers.school)
    empArr.push(answers);
    return employeePrompt();
  })
}

const employeePrompt = () => {
  inquirer.prompt([{
    message: 'Please select the type of team member you would like to add.',
    type: 'list',
    name: 'employeeType',
    choices: [
      {name: 'Engineer', value: 'addEngineer'},
      {name: 'Intern', value: 'addIntern'},
      {name: 'DONE', value: 'done'}
    ]
  }])
  .then(answer => {
    if (answer.employeeType === 'addEngineer') {engQuestionsArr(); };
    if (answer.employeeType === 'addIntern') {intQuestionsArr(); };
    if(answer.employeeType === 'done') {
      let html = template(empArr)
      writeFile(html);
    }
  })
}

init();
const {Manager, manQuestionsArr} = require('./lib/Manager');
const {Engineer, engQuestionsArr} = require('./lib/Engineer');
const {Intern, intQuestionsArr} = require('./lib/Intern');

// TODO: CODE GOES HERE
const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const teamProfiles = []

const init = () => {manQuestions() }
const manQuestions = () => {
  inquirer.prompt(manQuestionsArr).then((answers) => {
    answers = new Manager(answers.name, answers.id, answers.email)
    teamProfiles.push(answers);
    return employeePrompt();
  })
}

const engineerQuestions = () => {
  inquirer.prompt(engQuestionsArr).then((answers) => {
    answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamProfiles.push(answers);
    return employeePrompt();
  })
}

const intQuestions = () => {
  inquirer.prompt(intQuestionsArr).then((answers) => {
    answers = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamProfiles.push(answers);
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
    if (answer.employeeType === 'addEngineer') {engineerQuestions(); };
    if (answer.employeeType === 'addIntern') {intQuestions(); };
    if(answer.employeeType === 'done') {
      if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, pageTemplate(teamProfiles));
    }
  })
}

init();
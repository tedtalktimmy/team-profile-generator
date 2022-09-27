const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const cTable = require('console.table');
const db = require('./db/connection.js');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use = ((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => { });
});

function startPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'update an employee manager',
            'delete department',
            'delete role',
            'delete employee'
        ],
    }).then( answer => {
        switch (answer.menu) {
            case 'view all departments':
                viewAllDepartments();
                break;
            case 'view all roles':
                viewAllRoles();
                break;
            case 'view all employees':
                viewAllEmployees();
                break;
            case 'add a department':
                addDepartment();
                break;
            case 'add a role':
                addRole();
                break;
            case 'add an employee':
                addEmployee();
                break;
            case 'update an employee role':
                updateEmployeeRole();
                break;
            case 'update an employee manager':
                updateEmployeeManager();
                break;
            case 'delete department':
                deleteDepartment();
                break;
            case 'delete role':
                deleteRole();
                break;
            case 'delete employee':
                deleteEmployee();
                break;
        
        }
    })

};
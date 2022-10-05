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
    console.log(`Listening at ${PORT}`);
});
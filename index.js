//require dependencies

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
//const employees = []; 

const writeFileAsync = util.promisify(fs.writeFile);

/*
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/


//user prompts
const promptManager = () =>
//use inquirer.prompt to create questions/prompts for user
inquirer
  .prompt([
      {
        type:'input',
        message:"Enter the manager's name",
        name:'managerName',
      },
      
      {
        type:'input',
        message:"Enter the manager's Employee ID",
        name:'managerID',
    },
    {
        type:'input',
        message:"Enter the manager's Email Address",
        name:'managerEmail',
    },
    {
        type:'input',
        message:"Enter the manager's Office Number",
        name:'managerOfficeNumber',
    },
    {
        type:'list',
        message:"Would you like to add an engineer or an intern or finish building your team",
        name:'Position',
        choices: ['Engineer', 
                  'Intern',
                  'Finish building your team']
    },
    {
        type: "input",
        message: "What is your github?",
        name: "github",
        when: (response) => response.position === "Engineer",
    },
    {
        type: "input",
        message: "What is your school?",
        name: "school",
        when: (response) => response.position === "Intern",
    }
    ]);



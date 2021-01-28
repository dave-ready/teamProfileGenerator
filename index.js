//require dependencies

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const { createInflate } = require('zlib');
const employees = []; 

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
const promptUser = () =>
//use inquirer.prompt to create questions/prompts for user
inquirer
  .prompt([
      {
        type:'input',
        message:"Enter the Manager's name",
        name:'managerName',
      },
      
      {
        type:'input',
        message:"Enter the Manager's Employee ID",
        name:'managerID',
    },
    {
        type:'input',
        message:"Enter the Manager's Email Address",
        name:'managerEmail',
    },
    {
        type:'input',
        message:"Enter the Manager's Office Number",
        name:'officeNumber',
    },
   
    ]).then(({managerName, managerID, managerEmail, officeNumber}) => {
        this.employees.push(new Manager (managerName, managerID, managerEmail, officeNumber));

        this.addEmployee();
    });

    //Create function to add Employees

    const addEmployee = () => 
        inquirer
          .prompt({
            type:'list',
            message:"Would you like to add an engineer or an intern or finish building your team",
            name:'addEmployee',
            choices: ['Engineer', 
                      'Intern',
                      'Finish building your team']
            }).then((response) => {
                if (response.addEmployee === 'Engineer') {
                    this.addEngineer();

                } else if (response.addEmployee === 'Intern') {
                    this.addIntern();

                } else {
                    this.writeFile()
                }
            });
    

    const addEngineer = () =>
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter your Engineer's name",
                    name: 'engineerName',
                },
                {
                    type: 'input',
                    message: "What is your Engineer's Employee ID",
                    name: 'engineerID',
                    
                },
                {
                    type: 'input',
                    message: "Enter your Engineer's Email",
                    name: 'engineerEmail',
                    
                },
                {
                    type: 'input',
                    message: "Enter your Engineer's Github username",
                    name: 'Github',
                    
                }
            ]).then(({ engineerName, engineerID, engineerEmail, Github }) => {
                         this.employees.push(new Engineer(engineerName, engineerID, engineerEmail, Github ));

                this.addEmployee();
            });
    

    const addIntern = () =>
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: "Enter your Intern's name",
                    name: 'internName',
                },
                {
                    type: 'input',
                    message: "What is your Intern's Employee ID",
                    name: 'engineerID',
                    
                },
                {
                    type: 'input',
                    message: "Enter your Intern's Email",
                    name: 'engineerEmail',
                    
                },
                {
                    type: 'input',
                    message: "Enter your Intern's school",
                    name: 'School',
                    
                }
            ])
            .then(({ internName, internID, internEmail, School }) => {
                         this.employees.push(new Engineer(internName, internID, internEmail, school ));

                this.addEmployee();
            });


    const createFile = () =>
        fs.writeFile('./dist/index.html', generatePage(this.employees), (err) => {
            if (err) throw err;
        
        console.log ("Your Team Profile has been generated!");
    });
    






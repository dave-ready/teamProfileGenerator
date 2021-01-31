//require dependencies

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const { createInflate } = require('zlib');
//const employees = []; 

const writeFileAsync = util.promisify(fs.writeFile);

class Prompts {
    constructor() {
        this.employees = [];
    }

promptUser() {
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
   
    ])
    
    .then(({managerName, managerID, managerEmail, officeNumber}) => {
        this.employees.push(new Manager (managerName, managerID, managerEmail, officeNumber));

        this.addEmployee();
    });
}

    //Create function to add Employees

    addEmployee() { 
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

    }
    

    addEngineer() {
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

        }
    

    addIntern() {
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

        }


    createFile() {
        fs.writeFile('./dist/index.html', generatePage(this.employees), (err) => {
            if (err) throw err;
        
        console.log ("Your Team Profile has been generated!");
    });

  }
}

 module.exports = Prompts;




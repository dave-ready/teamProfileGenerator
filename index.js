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
class Prompts {
    constructor() {
        this.employees = [];
    }
    */

   function addEmployee() { 
    inquirer
      .prompt([

          {
            type:'input',
            message:"Please enter the name of the employee you would like to add",
            name:'memberName',
          },
          {
            type:'list',
            message:"Please select the role of the employee",
            name:'memberRole',
            choices: ['Engineer', 'Manager','Intern'],
          },
          {
            type:'input',
            message:"Please enter their Employee ID",
            name:'memberID',
        },
        {
            type:'input',
            message:"Please enter their Email Address",
            name:'memberEmail',
        }

    ])

    .then(function({memberName, memberRole, memberID, memberEmail}) {

        let extraInfo = "";

        if (role === "Engineer") {
            extraInfo = "GitHub Username";

        } else if (role === "Intern") {
            extraInfo = "School Name";
            
        } else if (role === "Manager") {
            extraInfo = "Office Number";
        }


    inquirer
        .prompt([
            {
            message: `Please enter Employee's ${extraInfo}`,
            name: "extraInfo"
            },
            {
            type: "list",
            message: "Would you like to add any additional employees?",
            choices: ["yes", "no"],
            name: "additionalEmployees"
            }
        
        ])

        .then(function({extraInfo, additionalEmployees}) {

            let newEmployee;

            if (role === "Engineer") {
                newMember = new Engineer(memberName, memberID, memberEmail, extraInfo);

            } else if (role === "Intern") {
                newMember = new Intern(memberName, memberID, memberEmail, extraInfo);

            } else if (role === "Manager") {
                newMember = new Manager(memberName, memberID, memberEmail, extraInfo);
            };

            employees.push(newEmployee);

            });
            
        });
    });
}

function createTemplate() {

    const teamTemplate = 
    
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>

    <body>

        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>

        <div class="container">

            <div class="row">
            </div>
            
        </div>
        `;

    fs.writeFile("./dist/teamProfile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Starting Team Profile");
}


/*

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
*/
//NEEDS WORK!!!

const promptUser = () =>
//use inquirer.prompt to create questions/prompts for user
inquirer
  .prompt([
      /*{
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
    }
   
    ]);

    promptUser()
    
    
    .then(({managerName, managerID, managerEmail, officeNumber}) => {
        this.employees.push(new Manager (managerName, managerID, managerEmail, officeNumber));

        this.addEmployee();
    });


    //Create function to add Employees

    
    

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

*/


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

        if (memberRole === "Engineer") {
            extraInfo = "GitHub Username";

        } else if (memberRole === "Intern") {
            extraInfo = "School Name";
            
        } else if (memberRole === "Manager") {
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

            if (memberRole === "Engineer") {
                newMember = new Engineer(memberName, memberID, memberEmail, extraInfo);

            } else if (memberRole === "Intern") {
                newMember = new Intern(memberName, memberID, memberEmail, extraInfo);

            } else if (memberRole === "Manager") {
                newMember = new Manager(memberName, memberID, memberEmail, extraInfo);
            };

            employees.push(newEmployee);

            });
            
        });
    });
}

function createTemplate() {

    const teamTemplate = 
    
    `
    <!DOCTYPE html>
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



function addMemberData(response) {
    return new Promise(function() {

        const memberName = response.getName();
        const memberRole = response.getRole();
        const memberID = response.getId();
        const memberEmail = response.getEmail();

        let memberData = "";

        if (memberRole === "Engineer") {

            const memberGithub = response.getGithub();

            memberData = 

           `
            <div class="col-6">

                <div class="card mx-auto mb-3" style="width: 18rem">

                <h5 class="card-header">${memberName}<br /><br />Engineer</h5>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${memberID}</li>
                    <li class="list-group-item">Email Address: ${memberEmail}</li>
                    <li class="list-group-item">GitHub: ${memberGithub}</li>
                </ul>

                </div>
            </div>

            `;

        } else if (memberRole === "Intern") {

            

        } else if (memberRole === "Manager") {}

    
}





/*    
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


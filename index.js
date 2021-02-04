//require dependencies

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const employees = []; 

//const writeFileAsync = util.promisify(fs.writeFile);
/*

class Prompts {
    constructor() {
        this.employees = [];
    }
    */
//create function to initialize the application
function promptUser() {
    createTemplate();
    addEmployee();
}

//create function to prompt user for info on team members
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
     // then prompt user for extra info based on team member's role.
     // if/else statement to determine the extra info for each role
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
            type: 'input',
            message: `Please enter Employee's ${extraInfo}`,
            name: 'extraInfo'
            },
            {
            type: 'list',
            message: "Would you like to add any additional employees?",
            choices: ['yes', 'no'],
            name: 'additionalEmployees'
            }
        
        ])
       // Once all information is determined, push the new employee to the 'employees' array
       // if user would like to add another employee, run the addEmployee() function
       // if user no longer wants to add any members, run the completeProfile() function
        .then(function({extraInfo, additionalEmployees, memberRole}) {

            let newEmployee = "";

            if (memberRole === "Engineer") {
                newEmployee = new Engineer(memberName, memberID, memberEmail, extraInfo);

            } else if (memberRole === "Intern") {
                newEmployee = new Intern(memberName, memberID, memberEmail, extraInfo);

            } else if (memberRole === "Manager") {
                newEmployee = new Manager(memberName, memberID, memberEmail, extraInfo);
            }

            employees.push(newEmployee);
            addMemberData(newEmployee)
            .then(function() {
                if (additionalEmployees === "yes") {
                    addEmployee();

                } else {
                    completeProfile();
                }

            });
            
        });
    });
}

//create function to start the html template for the team profile 
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
        `;
    //write it to the generated html profile 
    fs.writeFile("./dist/teamProfile.html", teamTemplate, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Starting Team Profile");
}



function addMemberData() {
    return new Promise(function(resolve, reject) {

        const memberName = this.memberName;
        const memberRole = this.memberRole;
        const memberID = this.memberID;
        const memberEmail = this.memberEmail;

        let memberData = "";

        if (memberRole === "Engineer") {

            const memberGithub = this.memberGithub;

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

            const memberSchool = this.memberSchool;

    memberData = 
    
   `
    <div class="col-6">

      <div class="card mx-auto mb-3" style="width: 18rem">

        <h5 class="card-header">${memberName}<br /><br />Intern</h5>

          <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${memberID}</li>
             <li class="list-group-item">Email Address: ${memberEmail}</li>
             <li class="list-group-item">School: ${memberSchool}</li>
          </ul>

      </div>
    </div>

    `;

        } else if (memberRole === "Manager") {
            const officeNumber = this.officeNumber();

    memberData = 

    `
    <div class="col-6">

      <div class="card mx-auto mb-3" style="width: 18rem">

        <h5 class="card-header">${memberName}<br /><br />Manager</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${memberID}</li>
            <li class="list-group-item">Email Address: ${memberEmail}</li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
          </ul>
      </div>
    </div>
    
    `
    }

    console.log("Adding team member's information");

    fs.appendFile("./dist/teamProfile.html", memberData, function (err) {

        if (err) {
            return reject(err);
        };
        return resolve();

    });

});

}

function completeProfile() {
    const templateEnd = 
    
    `
     </div>
    </div>
    
</body>

</html>

    `;

    fs.appendFile("./dist/teamProfile.html", templateEnd, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Your team profile has been Generated!");
}
promptUser();






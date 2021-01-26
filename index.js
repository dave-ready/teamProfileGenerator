//'require' node modules

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
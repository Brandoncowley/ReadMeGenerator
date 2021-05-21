// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js')


const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this?',
        choices: ['MIT', 'Mozilla', 'ISC'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to to run tests?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What should the user know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What should the user know about repo contribution?',
    },
  ]
  
  inquirer.prompt(questions).then((response)=> {
    
    if (response.license === 'ISC') {
        response.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if (response.license === 'Mozilla') {
        response.license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else {
        response.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    
    const result = `
    # README Generator
      ${response.project}

    
    ## Table of Contents
    1. [github](#github)
    2. [email](#email)
    3. [project](#project)
    4. [description](#description)
    5. [license](#license)
    6. [install](#install)
    7. [test](#test)
    8. [repo](#repo)
    9. [contribution](#contribution)

   
    ## Github
        ${response.github}
    ## email
        ${response.email}
    ## desc
        ${response.description}
    ## lic
        ${response.license}
    ## inst
        ${response.install}
    ## test
        ${response.test}
    ## Grepo
        ${response.repo}
    ## cont
        ${response.contribution}
    `

    fs.writeFile("README.md", result, (err) =>
    err ? console.log(err) : console.log('Success!'))

  }
  )
  

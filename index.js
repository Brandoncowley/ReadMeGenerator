// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js')


const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (include your https!)',
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
        message: 'Give a description of your project for the user:',
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
  //Start the question and response flow for the user
  inquirer.prompt(questions).then((response)=> {
    //display badges for license selection
    if (response.license === 'ISC') {
        response.license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if (response.license === 'Mozilla') {
        response.license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if (response.license === 'MIT') {
        response.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    //PAGE OUTPUT LAYOUT
    const result = `
# ${response.project}
#### Github: ${response.github}
Video walkthrough for usage: 

## Table of Contents
1. [Github](#github)
2. [Email](#email)
3. [Description](#description)
4. [License](#license)
5. [Install](#install)
6. [Testing](#test)
7. [Repo](#repo)
8. [Contribution](#contribution)
   
## Description: 
   ${response.description}
        
## Installation commands required:
Use the following code in your code for installation:
\`\`\`    
- ${response.install}
\`\`\`

## Testing information
    ${response.test}
## Repo
    ${response.repo}

##### Licensed with:
    ${response.license}
## Contributor:
    ${response.contribution}
## email
You can contact the creator with questions regarding the generator at ${response.email}
`

    fs.writeFile("README.md", result, (err) =>
    err ? console.log(err) : console.log('Success!'))

  }
  )
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;
  
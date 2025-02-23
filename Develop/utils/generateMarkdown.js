// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
## ${data.title}
#Description
${data.description}
# Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contributing](#contribution)
* [Test](#test)
* [Questions](#questions)


    #Installation Instructions
    
    ${data.installation}

    #Usage
    
    ${data.usage}

    #Licenses
    
    This project uses this license, ${data.licenses}.
    

    #Contributions
    
    Contributors: ${data.contribution}

    #Tests
    
    These test will help you in your coding: ${data.test}

    #Questions
    
    If you have any question, contact me at the following: ${data.questions}
`}

module.exports = generateMarkdown;

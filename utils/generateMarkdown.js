// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = '';
let link = '';
let tableLicense = '';
let sectionLicense = '';

function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GNU General Public License v3.0'){
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else if (license === 'BSD 3-Clause License'){
    badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  } else if (license === 'MIT License'){
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Mozilla Public License 2.0'){
    badge =  '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)' 
  } else {badge =''}
  console.log(badge);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    link = '(https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License v3.0'){
    link = '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD 3-Clause License'){
    link = '(https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'MIT License'){
    link = '(https://opensource.org/licenses/MIT)'
  } else if (license === 'Mozilla Public License 2.0'){
    link =  '(https://opensource.org/licenses/MPL-2.0)' 
  } else {link =''}
  console.log(link);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    tableLicense = '- [License](#license)';
    sectionLicense = `
## License
This project is covered by the ${license} license.    
${link}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  return `
# ${data.title}

${badge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${tableLicense}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

${sectionLicense}

## Contributing
${data.contribution}

## Tests
${data.testing}

## Questions
Any questions you can reach me at ${data.email}.    
You can view more of my projects at http://github.com/${data.github}.

`;
}

module.exports = generateMarkdown;
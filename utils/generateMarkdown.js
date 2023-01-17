// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //We need to convert the licenses into license strings that can be used to make banners
  
  if (license === 'agpl-3.0') {
    var licenseBadgeCode = 'agpl version 3.0';
  } else if (license === 'gpl-3.0') {
    var licenseBadgeCode = 'gpl version 3.0';
  } else if (license === 'lgpl-3.0') {
    var licenseBadgeCode = 'lgpl version 3.0';
  } else if (license === 'mpl-2.0') {
    var licenseBadgeCode = 'mpl version 2.0';
  } else if (license === 'apache-2.0') {
    var licenseBadgeCode = 'apache version 2.0';
  } else if (license === 'mit') {
    var licenseBadgeCode = 'mit';
  } else if (license === 'bsl-1.0') {
    var licenseBadgeCode = 'bsl version 1.0';
  } else if (license === 'unlicense') {
    var licenseBadgeCode = 'unlicense';
  }

// THIS RETURNS UNDEFINED 

  if (license === 'no license') {
    return '';
  } else {
    return `https://img.shields.io/badge/license-${licenseBadgeCode}-blue`;
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no license') {
    return '';
  } else {
    return `https://choosealicense.com/licenses/${license}`;
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return '';
  } else {
    return `![License Badge](${renderLicenseBadge(license)}).
    
  This application is created using the following license (click to learn more): [${license}](${renderLicenseLink(license)}).`;
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Licensing Badge
  ![License Badge](${renderLicenseBadge(data.license)})

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  Please visit my GitHub profile by clicking on my username: [${data.github}](https://github.com/${data.github}). If you have additional questions, please email me at ${data.email}.`;
}

module.exports = generateMarkdown;
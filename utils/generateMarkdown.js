// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //We need to convert the licenses into license strings that can be used to make banners

  var licenseBadgeCode;
  
  if (license === 'agpl-3.0') {
    licenseBadgeCode = 'agpl%20version%203.0';
  } else if (license === 'gpl-3.0') {
    licenseBadgeCode = 'gpl%20version%203.0';
  } else if (license === 'lgpl-3.0') {
    licenseBadgeCode = 'lgpl%20version%203.0';
  } else if (license === 'mpl-2.0') {
    licenseBadgeCode = 'mpl%20version%202.0';
  } else if (license === 'apache-2.0') {
    licenseBadgeCode = 'apache%20version%202.0';
  } else if (license === 'mit') {
    licenseBadgeCode = 'mit';
  } else if (license === 'bsl-1.0') {
    licenseBadgeCode = 'bsl%20version%201.0';
  } else if (license === 'unlicense') {
    licenseBadgeCode = 'unlicense';
  } else if (license === 'no license') {
    licenseBadgeCode = 'no%20license';
  }

  return `![License Badge](https://img.shields.io/badge/license-${licenseBadgeCode}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no license') {
    return 'https://choosealicense.com/no-permission';
  } else {
    return `https://choosealicense.com/licenses/${license}`;
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return `This application has [no license](${renderLicenseLink(license)}).`;
  } else {
    return `This application is created using the following license: [${license}](${renderLicenseLink(license)}).`;
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

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
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
  const readME = 
  `# ${data.title}
  ## Description:
  ${data.description}
  ## Installation Instructions
  ${data.installation}
  ## Usage Information
  ${data.usage}
  ## Contribution Guidelines
  ${data.contribution}
  ## Testing Instructions
  ${data.testing}
  ## License
  ${data.license}
  ## Questions
  Please direct questions to [${data.github}](${data.github}) at [${data.email}](${data.email}).`;
  return readME;
}

module.exports = generateMarkdown;

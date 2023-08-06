// Function to return the license badge and link to the license based on which one is chosen.
function renderLicense(data) {
  const licenseChoice = data.license;
  let licenseBadge = '';
  if (licenseChoice === 'Apache License 2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (licenseChoice === 'GNU General Public License v3.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (licenseChoice === 'MIT License') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseChoice === 'BSD 2-Clause "Simplified" License') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (licenseChoice === 'BSD 3-Clause "New" or "Revised" License') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (licenseChoice === 'Boost Software License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (licenseChoice === 'Creative Commons Zero v1.0 Universal') {
    licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (licenseChoice === 'Eclipse Public License 1.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (licenseChoice === 'GNU Affero General Public License v3.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (licenseChoice === 'GNU General Public License v2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (licenseChoice === 'GNU Lesser General Public License v2.1') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (licenseChoice === 'Mozzila Public License 2.0') {
    licenseBadge = `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (licenseChoice === 'The Unlicense') {
    licenseBadge = `[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)`;
  };
  return licenseBadge;
};

// Function to generate and format the README file.
function generateMarkdown(data) {
  const readME = 
  `# ${data.title}  ${renderLicense(data)}
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

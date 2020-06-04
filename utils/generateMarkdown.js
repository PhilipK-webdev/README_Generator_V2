// function generate the REAMDE file
// Generate README for new developer user:
function generateMarkdownNewDev(data) {

  let str = "```";
  return `

![inquirer](https://img.shields.io/npm/l/inquirer?color=blue)

![axios](https://img.shields.io/npm/l/axios?color=green&label=axios)

![followers](https://img.shields.io/github/followers/PhilipK-webdev?logoColor=red&style=social)
  
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

### My Contact Info :

* GitHub Profile :
${str}
[${data.userName}][https://github.com/${data.userName}]
${str}
User Email: < ${data.email}>

# Home Work Assigment: Project Title - ${ data.title} 
${str}

${data.description}

${str}

---------------------------------------
## Table of contents:
${data.table_of_contents.map((element) => `* [${element}](#${element})\n`).join("")}

------------------------------------
### Installation:

${data.installation.map((element) => `${element}\n`).join("")}

###  Usage:
* Example Of the Usage
${str}javascript
${ data.usage}
${str}
------------------------------------
### Contributing:
${ data.contributing}
---
### Test:
${ str}

${ data.tests}

${ str} 
### License:

[${ data.license}](https://choosealicense.com/licenses/${data.license.toLowerCase()}/)
  `;
}

module.exports = generateMarkdownNewDev;


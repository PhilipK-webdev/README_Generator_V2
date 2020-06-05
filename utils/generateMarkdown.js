// function generate the REAMDE file
function generateMarkdownNewDev(data) {
  let arr = data.installation.split(",");
  let str = "```";
  return `

![inquirer](https://img.shields.io/npm/l/inquirer?color=blue)

![axios](https://img.shields.io/npm/l/axios?color=green&label=axios)

![followers](https://img.shields.io/github/followers/PhilipK-webdev?logoColor=red&style=social)
  
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})


# Home Work Assigment: Project Title - ${ data.title} 
${str}

${data.description}

${str}

---------------------------------------
## Table of contents:
${data.table_of_contents.map((element) => `* [${element}](#${element})\n`).join("")}

------------------------------------
### Installation:

${ arr.map((element) => `* ${element}\n`).join("")}

###  Usage:
* Example Of the Usage
${str}
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

### My Contact Info :
* GitHub Profile :
User Email: < ${data.email}>

[${data.userName}][https://github.com/${data.userName}]

  `;
}

module.exports = generateMarkdownNewDev;


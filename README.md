# Unit 09 Node.js and ES6+ Homework: Good README Generator

Create a command-line application that dynamically generates a README.md from a user's input.The command line builed with Node.js and npm librairies. The application will be invoked with the following command:
```sh
node index.js
```
The README will be populated with the following:

* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

Refer to the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md).

## Table of contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation:
1. Copy The Github url.
2. Open Git Bash and use git clone _url__ .
3. Open your project with VSCode/Sublime Text.
4. Open local terminal and run the npm install command.

###  Usage:
```javascript
inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]

        },
        {
            //input from the user
            type: "checkbox",
            name: "table_of_contents",
            message: questions[2],
            choices: [
                `Description`,
                `Installation`,
                `Usage`,
                `Contributing`,
                `Test`,
                `License`
            ]

        },

 ## Table of contents:
${data.table_of_contents.map((element) => `* [${element}](#${element})\n`).join("")}//output

```
* Demo of the App:

(https://www.youtube.com/watch?v=J3IlOt3A-8c)
### License:
  MIT License

Copyright (c) 2020 Philip Kouchner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
  



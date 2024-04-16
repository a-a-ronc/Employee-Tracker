# Employee-Tracker
view and manage the departments, roles and employees in a company


## [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Sources](#sources)
  - [GitHub](#github)
  - [Development](#development)

## Description
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation
<!-- Thanks to NPM, installation is pretty simple. Simply clone the repository and then run `npm install` without any arguments, and that will install everything in the dependencies. Don't forget to access mysql to get the correct authorization to access the functionality of this application. 
Please change the .env file to contain your credentials for the database, and rename the file to `.env` 
Refer to the video tutorial/walkthrough for assistance on running this application-->

First, clone the repository
`$ git clone <repo-link>`
Enter the repository through your command line
`$ cd <repo-name>`
Then insert your DB credentials into your .env file
Finally, install the dependencies
`<repo-name>$ npm install`

## Usage
There is a development script and a production script. Development uses nodemon to watch for changes and automatically restart the script upon noticing changes. For production simply use node.

### Run
`node  app.js`

## License
This project is licensed under the MIT license.
Please refer to the license badge at the top of this document.

## Sources
Assistance received from Dennis Itua and Jaytee Padilla, as well as partial assistance from ChatGPT

### TODOs
Things that need to be done with the existing codebase.

So the required functionality is not all there. I essentially got the view functionality enabled for departments, roles and employees. Adding an employee does not work but adding a role and department work. 

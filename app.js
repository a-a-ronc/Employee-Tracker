// const inquirer = require('inquirer');
// const mysql = require('mysql2');
// const util = require('util');

// // Database configuration
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'employee_db',
//     insecureAuth: true
// });

// const query = util.promisify(connection.query).bind(connection);

// async function connectToDatabase() {
//     return new Promise((resolve, reject) => {
//         connection.connect((err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         });
//     });
// }

// async function viewDepartments() {
//     const departments = await query('SELECT * FROM department');
//     console.table(departments);
// }

// async function viewRoles() {
//     const roles = await query('SELECT * FROM role');
//     console.table(roles);
// }

// async function viewEmployees() {
//     const employees = await query('SELECT * FROM employee');
//     console.table(employees);
// }

// async function addDepartment() {
//     const { departmentName } = await inquirer.prompt({
//         name: 'departmentName',
//         type: 'input',
//         message: 'Enter the name of the department:',
//     });
//     await query('INSERT INTO department (name) VALUES (?)', [departmentName]);
//     console.log('Department added successfully!');
// }

// async function addRole() {
//     const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
//         {
//             name: 'roleTitle',
//             type: 'input',
//             message: 'Enter the role title:',
//         },
//         {
//             name: 'roleSalary',
//             type: 'input',
//             message: 'Enter the role salary:',
//         },
//         {
//             name: 'departmentId',
//             type: 'input',
//             message: 'Enter the department ID:',
//         }
//     ]);

//     await query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleTitle, roleSalary, departmentId]);
//     console.log('Role added successfully!');
// }

// async function addEmployee() {
//     const { employeeName, roleId, managerId } = await inquirer.prompt([
//         {
//             name: 'employeeName',
//             type: 'input',
//             message: 'Enter the name of the employee:',
//         },
//         {
//             name: 'roleId',
//             type: 'input',
//             message: 'Enter the role ID:',
//         },
//         {
//             name: 'managerId',
//             type: 'input',
//             message: 'Enter the manager ID:',
//         }
//     ]);

//     await query('INSERT INTO employee (name, role_id, manager_id) VALUES (?, ?, ?)', [employeeName, roleId, managerId]);
//     console.log('Employee added successfully!');
// }

// async function updateEmployeeRole() {
//     const employees = await query('SELECT * FROM employee');
//     const employeeChoices = employees.map((employee) => ({
//         name: `${employee.id}: ${employee.name}`,
//         value: employee.id,
//     }));

//     const { employeeId, newRoleId } = await inquirer.prompt([
//         {
//             name: 'employeeId',
//             type: 'list',
//             message: 'Select an employee to update:',
//             choices: employeeChoices,
//         },
//         {
//             name: 'newRoleId',
//             type: 'input',
//             message: 'Enter the new role ID:',
//         },
//     ]);

//     await query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
//     console.log('Employee role updated successfully!');
// }

// async function startApp() {
//     await connectToDatabase();

//     let terminate = false;

//     while (!terminate) {
//         const choices = [
//             'View all departments',
//             'View all roles',
//             'View all employees',
//             'Add a department',
//             'Add a role',
//             'Add an employee',
//             'Update an employee role',
//             'Terminate application'
//         ];

//         const { action } = await inquirer.prompt({
//             name: 'action',
//             type: 'list',
//             message: 'What would you like to do?',
//             choices,
//         });

//         switch (action) {
//             case 'View all departments':
//                 await viewDepartments();
//                 break;
//             case 'View all roles':
//                 await viewRoles();
//                 break;
//             case 'View all employees':
//                 await viewEmployees();
//                 break;
//             case 'Add a department':
//                 await addDepartment();
//                 break;
//             case 'Add a role':
//                 await addRole();
//                 break;
//             case 'Add an employee':
//                 await addEmployee();
//                 break;
//             case 'Update an employee role':
//                 await updateEmployeeRole();
//                 break;
//             case 'Terminate application':
//                 console.log('Application terminated');
//                 terminate = true;
//                 break;
//             default:
//                 console.log('Invalid choice');
//                 break;
//         }
//     }

//     // Close connection when the application terminates
//     connection.end();
// }

// // Start the application
// startApp();

const inquirer = require('inquirer');
const mysql = require('mysql2');
const util = require('util');

// Database configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db',
    insecureAuth: true
});

const query = util.promisify(connection.query).bind(connection);

async function connectToDatabase() {
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function viewDepartments() {
    const departments = await query('SELECT * FROM department');
    console.table(departments);
}

async function viewRoles() {
    const roles = await query('SELECT * FROM role');
    console.table(roles);
}

async function viewEmployees() {
    const employees = await query('SELECT * FROM employee');
    console.table(employees);
}

async function addDepartment() {
    const { departmentName } = await inquirer.prompt({
        name: 'departmentName',
        type: 'input',
        message: 'Enter the name of the department:',
    });
    await query('INSERT INTO department (name) VALUES (?)', [departmentName]);
    console.log('Department added successfully!');
}

async function addRole() {
    const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
        {
            name: 'roleTitle',
            type: 'input',
            message: 'Enter the role title:',
        },
        {
            name: 'roleSalary',
            type: 'input',
            message: 'Enter the role salary:',
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'Enter the department ID:',
        }
    ]);

    await query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [roleTitle, roleSalary, departmentId]);
    console.log('Role added successfully!');
}

async function addEmployee() {
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Enter the first name of the employee:',
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Enter the last name of the employee:',
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'Enter the role ID:',
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'Enter the manager ID (leave blank if none):',
        }
    ]);

    await query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId || null]);
    console.log('Employee added successfully!');
}

async function updateEmployeeRole() {
    const employees = await query('SELECT * FROM employee');
    const employeeChoices = employees.map((employee) => ({
        name: `${employee.id}: ${employee.first_name} ${employee.last_name}`,
        value: employee.id,
    }));

    const { employeeId, newRoleId } = await inquirer.prompt([
        {
            name: 'employeeId',
            type: 'list',
            message: 'Select an employee to update:',
            choices: employeeChoices,
        },
        {
            name: 'newRoleId',
            type: 'input',
            message: 'Enter the new role ID:',
        },
    ]);

    await query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    console.log('Employee role updated successfully!');
}

async function startApp() {
    await connectToDatabase();

    let terminate = false;

    while (!terminate) {
        const choices = [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Terminate application'
        ];

        const { action } = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices,
        });

        switch (action) {
            case 'View all departments':
                await viewDepartments();
                break;
            case 'View all roles':
                await viewRoles();
                break;
            case 'View all employees':
                await viewEmployees();
                break;
            case 'Add a department':
                await addDepartment();
                break;
            case 'Add a role':
                await addRole();
                break;
            case 'Add an employee':
                await addEmployee();
                break;
            case 'Update an employee role':
                await updateEmployeeRole();
                break;
            case 'Terminate application':
                console.log('Application terminated');
                terminate = true;
                break;
            default:
                console.log('Invalid choice');
                break;
        }
    }

    // Close connection when the application terminates
    connection.end();
}

// Start the application
startApp();

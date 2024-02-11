const mysql = require('mysql2');
const util = require('util');
const startApp = require('./app');


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
    return startApp();
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

    await query('INSERT INTO roles (name) VALUES (?)', [departmentName]);
    console.log('Department added successfully!');
}

// Implement similar functions for addRole, addEmployee, and updateEmployeeRole
async function addRole() {
    const { roles } = await inquirer.prompt({
        name: 'role',
        type: 'input',
        message: 'Enter the role title:',
    });

    await query('INSERT INTO roles (name) VALUES (?)', [roles]);
    console.log('Role added successfully!');
}

async function addEmployee() {
    const { employees } = await inquirer.prompt({
        name: 'employeeName',
        type: 'input',
        message: 'Enter the name of the employee:',
    });

    await query('INSERT INTO employee (employeeName) VALUES (?)', [employees]);
    console.log('Department added successfully!');
}

async function updateEmployeeRole() {
    const employees = await query('SELECT * FROM employees');
    const employeeChoices = employees.map((employee) => ({
        name: `${employee.id}: ${employee.name}`,
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

    await query('UPDATE employees SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);
    console.log('Employee role updated successfully!');
}

module.exports = { connectToDatabase, viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole };
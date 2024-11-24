const inquirer = require('inquirer');

const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee',
                'Delete Employee',
                'Exit',
            ],
        },
    ]);
};

const employeeDetails = () => {
    return inquirer.prompt([
        { type: 'input', name: 'first_name', message: 'First Name:' },
        { type: 'input', name: 'last_name', message: 'Last Name:' },
        { type: 'input', name: 'position', message: 'Position:' },
        { type: 'input', name: 'department', message: 'Department:' },
        { type: 'input', name: 'salary', message: 'Salary:' },
    ]);
};

const employeeId = () => {
    return inquirer.prompt([
        { type: 'input', name: 'id', message: 'Employee ID:' },
    ]);
};

module.exports = { mainMenu, employeeDetails, employeeId };
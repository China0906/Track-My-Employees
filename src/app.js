const chalk = require('chalk');
const pool = require('./db');
const queries = require('./queries');
const { mainMenu, employeeDetails, employeeId } = require('./prompts');

const startApp = async () => {
    let exit = false;

    while (!exit) {
        const { action } = await mainMenu();

        switch (action) {
            case 'View All Employees':
                const result = await pool.query(queries.getAllEmployees);
                console.table(result.rows);
                break;

            case 'Add Employee':
                const newEmployee = await employeeDetails();
                await pool.query(queries.addEmployee, Object.values(newEmployee));
                console.log(chalk.green('Employee added successfully!'));
                break;

            case 'Update Employee':
                const { id: updateId } = await employeeId();
                const updatedEmployee = await employeeDetails();
                await pool.query(queries.updateEmployee, [...Object.values(updatedEmployee), updateId]);
                console.log(chalk.green('Employee updated successfully!'));
                break;

            case 'Delete Employee':
                const { id: deleteId } = await employeeId();
                await pool.query(queries.deleteEmployee, [deleteId]);
                console.log(chalk.green('Employee deleted successfully!'));
                break;

            case 'Exit':
                exit = true;
                console.log(chalk.blue('Goodbye!'));
                break;
        }
    }

    pool.end();
};

startApp();
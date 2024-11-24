const pool = require('./db'); // Database connection
const queries = require('./queries');

// Fetch all employees
const getAllEmployees = async () => {
    const { rows } = await pool.query(queries.getAllEmployees);
    return rows;
};

// Add a new employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
    await pool.query(queries.addEmployee, [firstName, lastName, roleId, managerId]);
};

// Update an employee's role
const updateEmployeeRole = async (employeeId, newRoleId) => {
    await pool.query(queries.updateEmployeeRole, [newRoleId, employeeId]);
};

// Export functions
module.exports = {
    getAllEmployees,
    addEmployee,
    updateEmployeeRole,
};
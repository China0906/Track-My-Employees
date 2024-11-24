const queries = {
    // Department queries
    getAllDepartments: 'SELECT * FROM department',
    addDepartment: 'INSERT INTO department (name) VALUES ($1)',
    deleteDepartment: 'DELETE FROM department WHERE id = $1',

    // Role queries
    getAllRoles: `
        SELECT role.id, role.title, role.salary, department.name AS department
        FROM role
        JOIN department ON role.department_id = department.id
    `,
    addRole: `
        INSERT INTO role (title, salary, department_id)
        VALUES ($1, $2, $3)
    `,
    deleteRole: 'DELETE FROM role WHERE id = $1',

    // Employee queries
    getAllEmployees: `
        SELECT employee.id, employee.first_name, employee.last_name, 
               role.title AS role, department.name AS department, role.salary, 
               manager.first_name AS manager_first_name, manager.last_name AS manager_last_name
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS manager ON employee.manager_id = manager.id
    `,
    addEmployee: `
        INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ($1, $2, $3, $4)
    `,
    deleteEmployee: 'DELETE FROM employee WHERE id = $1',
    updateEmployeeRole: 'UPDATE employee SET role_id = $1 WHERE id = $2',
    updateEmployeeManager: 'UPDATE employee SET manager_id = $1 WHERE id = $2',
};

module.exports = queries;

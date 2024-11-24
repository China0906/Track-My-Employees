const queries = {
    getAllEmployees: 'SELECT * FROM employees',
    addEmployee: `
        INSERT INTO employees (first_name, last_name, position, department, salary)
        VALUES ($1, $2, $3, $4, $5)
    `,
    deleteEmployee: 'DELETE FROM employees WHERE id = $1',
    updateEmployee: `
        UPDATE employees
        SET first_name = $1, last_name = $2, position = $3, department = $4, salary = $5
        WHERE id = $6
    `,
};

module.exports = queries;
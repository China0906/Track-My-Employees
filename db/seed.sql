INSERT INTO employees (first_name, last_name, position, department, salary)
VALUES 
('John', 'Doe', 'Developer', 'IT', 80000),
('Jane', 'Smith', 'Designer', 'Marketing', 75000);

-- Insert into department
INSERT INTO department (name) VALUES 
('IT'),
('Marketing'),
('Finance');

-- Insert into role
INSERT INTO role (title, salary, department_id) VALUES 
('Developer', 80000, 1),
('Designer', 75000, 2),
('Accountant', 70000, 3);

-- Insert into employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Bob', 'Brown', 3, NULL);
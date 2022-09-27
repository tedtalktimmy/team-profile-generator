INSERT INTO employee (first_name, last_name, role_id, manger_id)
VALUES
('Mike', 'Chan', 01, ),
('Ashley', 'Rodriguez', 02),
('Kevin', 'Tupik', 03, 02),
('Kunal', 'Singh', 04),
('Malia', 'Brown' 05, 04),
('Sarah', 'Lourd', 06),
('Tom', 'Allen', 07, 06);

INSERT INTO role (title, salary, department_id)
VALUES
('Salesperson', 80000, 01),
('Leader Engineer', 150000, 02),
('Software Engineer', 120000, 02),
('Account Manager', 160000, 03),
('Accountant', 125000, 03),
('Legal Team Lead', 250000, 04),
('Lawyer', 190000, 04);

INSERT INTO department (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');
INSERT INTO department (name)
VALUES ("Engineering"),
       ("Human Resources"),
       ("Accounting"),
       ("Marketing"),
       ("Installation");

INSERT INTO role (title, salary, department_id)
VALUES ("Systems Engineer", 85000.00, 1),
       ("Human Resource Manager", 50000.00,2),
       ("Accountant", 70000.00,3),
       ("Marketing",68000.00, 4),
       ("Installation",52000.00,5),
       ("Design Engineer", 87000.00,1),
       ( "Software Developer", 120000.00,1);
       
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Aaron", "Cendejas", 6,NULL),
       ("Ammie", "Hammond", 2,2),
       ("Bobby","Davis", 3, NULL),
       ("Chris","Baker", 7, 4),
       ("David","Johnson", 2, NULL),
       ("Eric","Smith", 5, 6),
       ("Franklin","Rodriguez", 4, 5),
       ("Gregory","White", 5, 1),
       ("Helen","Jones", 4, NULL),  
       ("Ian","Miller", 3, 9),
       ("James","Lee", 1, NULL),
       ("Jennifer","Chen", 6, 9),
       ("Justin","Wong", 7, NULL),
       ("Camila","Rojas", 1,NULL),
       ("Kelly","Taylor", 1, NULL);

   
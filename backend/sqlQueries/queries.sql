CREATE TABLE login (
id int NOT NULL AUTO_INCREMENT,
email varchar(255) NOT NULL,
password varchar(255) NOT NULL,
role varchar(255), NOT NULL,
PRIMARY KEY (id)
);



CREATE TABLE workers (
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    nationality varchar(255),
    dob DATE NOT NULL,
    worker_address varchar(255),
    experience varchar(255),
    passport_details varchar(255),
    u_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_loginUser FOREIGN KEY (u_id)
    REFERENCES login(id) ON DELETE CASCADE ON UPDATE CASCADE


);

CREATE TABLE contractors (
    id int NOT NULL AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    u_id int NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_contractorUser FOREIGN KEY (u_id)
    REFERENCES login(id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE company (
    id int NOT NULL AUTO_INCREMENT,
    company_name varchar(255), NOT NULL,
    logo_image longtext NOT NULL,
    headquarters_location varchar(255),
    city varchar(255),
    telephone varchar(100),
    website varchar(255),
    designated_person_name varchar(255),
    u_id int NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT FK_companyUser FOREIGN KEY (u_id)
    REFERENCES login(id) ON DELETE CASCADE ON UPDATE CASCADE


);

INSERT INTO login (email,password,user_type) VALUES ('rehmat@gmail.com','1234','worker');

INSERT INTO login (email,password,user_type) VALUES ('rizwan@gmail.com','1234','worker');

INSERT INTO login (email,password,user_type) VALUES ('huzaifa@gmail.com','1234','contractor');


INSERT INTO workers (user_name,nationality,dob,worker_address,experience,passport_details,u_id) VALUES
('rehmat karim','pakistani','1996-09-12','lahore','3 years','pakistani passport','1'),
('rizwan khan','pakistani','1998-12-01','karachi','1 year','pakistani passport','2');
-- Active: 1751494739166@@127.0.0.1@3306
CREATE database student_course_db;
USE student_course_db;
CREATE TABLE Students(
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age>0),
    phone_number VARCHAR(14)
);
CREATE TABLE Courses(
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    course_description VARCHAR(100),
    credits INT CHECK (credits BETWEEN 1 AND 6),
    capacity INT CHECK (Capacity<10));

CREATE TABLE Enrollments(
    enrollments_id INT AUTO_INCREMENT PRIMARY KEY,
    Student_id INT,
    Course_id INT,
    enrolled_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id),
    UNIQUE (student_id, course_id)
    );
INSERT INTO Students (name, age, email, phone_number)
VALUES 
("Abebe", 20, "Abe@gmail.com", "+1-999-999"),
("Tsega", 19, "Ts22@gmail.com", "+1-444-444");
INSERT INTO Courses (course_name, course_description, credits, capacity)
VALUES 
("Database", "Learn SQL", 3, 8),
("Discreet", 3, 10),
("AI", "Using Python", 4, 9);

INSERT INTO Enrollments (Student_id, Course_id)
VALUES 
(1, 2),
(1,3),
(2, 2);


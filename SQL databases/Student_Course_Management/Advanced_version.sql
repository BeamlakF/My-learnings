USE student_course_db;
SELECT s.name AS Student_name,
        c.Course_name

 FROM Students s
INNER JOIN Enrollments e ON s.student_id= e.student_id
INNER JOIN Courses c ON e.course_id= c.course_id
ORDER BY s.name ASC;


SELECT s.name AS student_name,
       course_name
FROM Students s
INNER JOIN Enrollments e ON s.student_id = e.student_id
INNER JOIN Courses c ON e.course_id = c.course_id
ORDER BY course_name ASC;

SELECT s.name AS student_name, s.student_id, c.course_name
       
FROM Students s
LEFT JOIN Enrollments e ON s.student_id = e.student_id
LEFT JOIN Courses c ON e.course_id = c.course_id
ORDER BY course_name ASC;

SELECT 
    s.name AS student_name,
    s.student_id,
    c.course_name
FROM Students s
LEFT JOIN Enrollments e ON s.student_id = e.student_id
LEFT JOIN Courses c ON e.course_id = c.course_id

UNION

SELECT 
    s.name AS student_name,
    s.student_id,
    c.course_name
FROM Enrollments e
RIGHT JOIN Students s ON s.student_id = e.student_id
RIGHT JOIN Courses c ON e.course_id = c.course_id

ORDER BY student_name;



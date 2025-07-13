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


SELECT s.name, s.student_id
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
WHERE e.course_id IN (
    SELECT course_id
    FROM Courses
    WHERE credits > 7
);



SELECT c.course_name, c.course_id, COUNT(e.student_id) AS enrollment_count
FROM Courses c
JOIN Enrollments e ON c.course_id = e.course_id
GROUP BY c.course_name, c.course_id
HAVING COUNT(e.student_id) > (
    SELECT AVG(num_students)
    FROM (
        SELECT course_id, COUNT(student_id) AS num_students
        FROM Enrollments
        GROUP BY course_id
    ) AS course_counts
);

SELECT s.name, s.student_id, COUNT(*) AS total_courses
FROM Enrollments e
JOIN Students s ON e.student_id = s.student_id
GROUP BY s.student_id, s.name;

SELECT 
  c.course_name,
  c.course_id,
  COUNT(*) AS total_students,
  RANK() OVER (ORDER BY COUNT(*) DESC) AS course_rank
FROM Enrollments e
JOIN Courses c ON e.course_id = c.course_id
GROUP BY c.course_id, c.course_name;

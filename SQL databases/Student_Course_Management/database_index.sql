-- Index on student_id for faster JOINs and lookups
CREATE INDEX idx_enrollments_student_id ON Enrollments(student_id);

-- Index on course_id for JOIN performance
CREATE INDEX idx_enrollments_course_id ON Enrollments(course_id);

-- Optional: Index on Students.name if used in WHERE or ORDER BY
CREATE INDEX idx_students_name ON Students(name);

-- Optional: Index on Courses.course_name for search/filter
CREATE INDEX idx_courses_name ON Courses(course_name);

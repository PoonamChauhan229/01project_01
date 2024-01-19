create table students(
    student_id SERIAL PRIMARY KEY,
	student_name varchar(255),
	student_email varchar(255),
	student_contact int,
	student_class varchar(25),
	student_attendance int,
	student_grade varchar(10)
)

INSERT INTO STUDENTS VALUES
(1, 'Poonam', 'poonam@gmail.com', '8976456', '12th', 70, 'A'),
(2, 'Shivam', 'shivam@gmail.com', '9065457', '11th', 65, 'B'),
(3, 'Sandeep', 'sandeep@gmail.com', '765457', '13th', 75, 'A');

create table attendance(
    attendance_id int primary key,
    student_id int ,
    attendance_date DATE,
    session_id int,
    Foreign key(student_id) references students(student_id)
)

select * from students 

DROP table students


DELETE from students where student_id=7

CREATE TABLE IF NOT EXISTS admission (
	admission_id SERIAL PRIMARY KEY,
	admission_class VARCHAR(100),
	admission_date DATE,admission_fees INT,
	student_id INT REFERENCES students(student_id)
)

select * from admission

select * from students s, admission a where s.student_id =a.student_id

select * from admission where student_id=1 

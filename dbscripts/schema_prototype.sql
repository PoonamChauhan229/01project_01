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
(2, 'Poonam1', 'poonam@gmail.com', '8976456', '12th', 70, 'A'),
(3, 'Shivam1', 'shivam@gmail.com', '9065457', '11th', 65, 'B'),
(6, 'Sandeep1', 'sandeep@gmail.com', '765457', '13th', 75, 'A'),
(7, 'Sandeep2', 'sandeep@gmail.com', '765457', '13th', 75, 'A')


create table attendance(
    attendance_id int primary key,
    student_id int ,
    attendance_date DATE,
    session_id int,
    Foreign key(student_id) references students(student_id)
)

select * from students 

DROP table students

DROP table admission


DELETE from students where student_id=7

CREATE TABLE IF NOT EXISTS admission (
    admission_id SERIAL PRIMARY KEY,
    admission_class VARCHAR(100),
    admission_date DATE DEFAULT CURRENT_DATE,
    admission_fees INT,
    admission_sources VARCHAR(100),
    month INT DEFAULT EXTRACT(MONTH FROM CURRENT_DATE),
    year INT DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    student_id INT REFERENCES students(student_id)
);


select * from admission

select * from students s, admission a where s.student_id =a.student_id

select * from admission where student_id=1 

CREATE TABLE batches (
    year INT DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    batch_id SERIAL PRIMARY KEY,
    batch_code VARCHAR(10) DEFAULT 0,
    batch_start_date DATE,
    batch_end_date DATE,
    trainer_name VARCHAR(10),
    student_enrollment_fee int,
	course_name VARCHAR(30),
	batch_target_size INT DEFAULT 0,
	batch_actual_size INT DEFAULT 0,
	coordinator_name VARCHAR(30),
	batch_location VARCHAR(10),
	status VARCHAR(20),
    batch_type VARCHAR(20),
    installments_applicable VARCHAR(3),
    batch_session VARCHAR(20),
    classroom_start_time TIME,
    classroom_end_time TIME,
    placement_applicable VARCHAR(3),
    assessment_applicable VARCHAR(3)
);
INSERT INTO batches (batch_code, assessment_applicable, batch_actual_size, batch_end_date, batch_location, batch_session, batch_start_date, batch_target_size, batch_type, classroom_end_time, classroom_start_time, coordinator_name, course_name, installments_applicable, placement_applicable, status, student_enrollment_fee, trainer_name)
VALUES ('8787878', 'yes', 90, '2024-03-03', 'Online', 'Session 3', '2024-03-03', 90, 'All days', '13:00', '10:00', 'Shruthi', 'FSD', 'Yes', 'yes', 'active', 900, 'Poonam');


DROP table batches

select * from batches;

CREATE TABLE users(
	user_id SERIAL PRIMARY KEY,
	first_name varchar(30),
	last_name varchar(30),
	email varchar(30),
	password varchar(80),
	role varchar(12)	
)

DROP TABLE users

SELECT * from users

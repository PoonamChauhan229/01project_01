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
    batch_code VARCHAR(10) DEFAULT null,
    start_date DATE,
    end_date DATE,
    student_count INT DEFAULT 0,
    trainer_name VARCHAR(10),
    student_fee NUMERIC,
	course_name VARCHAR(30)
);

DROP table batches

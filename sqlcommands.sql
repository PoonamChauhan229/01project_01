create table students(
	student_id int primary key,
	student_name varchar(255),
	student_email varchar(255),
	student_contact int,
	student_class varchar(25),
	student_attendance int,
	student_grade varchar(10)
)

create table attendance(
    attendance_id int primary key,
    student_id int ,
    attendance_date DATE,
    session_id int,
    Foreign key(student_id) references students(student_id)
)
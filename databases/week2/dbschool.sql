 -- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID.

  insert into task (
  Title,
  Description,
  Created,
  Updated,
  Due_Date,
  Status_ID,
  User_ID
  )
  
 VALUE (
 'Start dropshipping',
 'Online busness',
 '2019-10-17 09:30:00',
 '2019-10-29 15:15:30',
 '2019-11-17 09:30:00',
 '1',
 '2'
);

-- Change the title of a task with these attributes: taskID, newTitle.

UPDATE task
SET title = 'plan a meeting with microsofft manager'
WHERE id = 3;

-- Change the task due date with these attributes: taskID, newDueDate.

UPDATE task
SET due_date = NOW()
WHERE id = 5;

-- Change the task status with these attributes: taskID, newStatus.

UPDATE task
SET status_id = 3
WHERE id = 20;

-- Mark a task as complete with this attribute: taskID.

UPDATE task
SET status_id = 3
WHERE id = 7;

-- Delete task with this attribute: taskID

DELETE FROM task where id = 37;



  -- (School database) Create a new database containing the following tables: Class and student.

CREATE DATABASE dbSchool;
USE dbSchool;

CREATE TABLE ClASS ( 
`id` INT UNSIGNED AUTO_INCREMENT,
`name` VARCHAR(255), 
`begins_date` DATE,
 `ends_date` DATE,
 PRIMARY KEY (id)
 )
 ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 CREATE TABLE STUDENT (
 `id` int (10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `name` varchar(255) NOT NULL,
 `email` varchar(255),
`phone` varchar(255) NULL,
 `class_id` int unsigned NOT NULL,
 CONSTRAINT `fk_CLASS` FOREIGN KEY (`CLASS_id`) REFERENCES `CLASS` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create an index on the name column of the student table:

CREATE INDEX index_name
ON STUDENT (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

ALTER TABLE CLASS
ADD status ENUM ('not-started', 'ongoing', 'finished');


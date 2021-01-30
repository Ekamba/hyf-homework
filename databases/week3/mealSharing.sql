CREATE DATABASE OnlineBook;
USE OnlineBook;

CREATE TABLE Meal(
 `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar (255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `location` varchar (255) NOT NULL,
 `when` datetime NOT NULL,
 `max_reservations` int NOT NULL,
 `price` decimal,
 `created_date` date NOT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Reservation (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `number_of_guests` int NOT NULL,
 `meal_id` int (10) unsigned NOT NULL AUTO_INCREMENT,
 `created_date` date NULL,
 PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE Review(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar(255) NOT NULL,
 `description` text NULL DEFAULT NULL,
 `meal_id` int (10) unsigned NOT NULL AUTO_INCREMENT,
 `stars` int NOT NULL,
 `created_date` date NOT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

############################################ Get all meals ##########################################

SELECT title
FROM Meal;
#################################### Add a new meal #################################################

INSERT INTO meal(
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
    )
values (
'1',
'Pâté en croûte de lapin de garenne',
'Wild rabbit pie',
'Enghavevej 80, 2450 København',
'2019-10-15 09:00:09',
'150',
'80',
'2019-10-15 07:05:09'
);

INSERT INTO meal(
   `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
    )
VALUES (
    '2',
    'Tagliolini à la truffe blanche',
    'Tagliolini with white truffle',
    'Enghavevej 80, 2450 København',
    '2019-10-15 09:00:09',
    '74',
    '250',
    '2019-10-15 07:05:09'
);

INSERT INTO meal(
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
    )
VALUES (
    '3',
    'Gelée de caviar à la crème de chou-fleur',
    'Caviar jelly with cauliflower cream',
    'Enghavevej 80, 2450 København',
    '2019-10-15 09:00:09',
    '300',
    '80',
    '2019-10-15 07:05:09'
);

INSERT INTO  meal(
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
    )
VALUES (
    '4',
    'Fleurs de courgettes ivres de girolles, couteaux en coque, citron et gingembre à la Grande Cascade',
    'Zucchini flowers with chanterelle mushrooms, inshell knives, lemon and ginger at the Grande Cascade',
    'Enghavevej 80, 2450 København',
    '2019-10-15 09:00:09',
    '500',
    '250',
    '2019-10-15 07:05:09'
);

INSERT INTO meal(
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
    )
values (
'5',
'Meat soup ',
'degustation',
'Enghavevej 80, 2450 København',
'2017-10-15 09:00:09',
'85',
'70',
'2017-01-15 08:05:09'
);
INSERT INTO meal(
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
    )
values (
'6',
'Pasta Bolo',
'enjoying',
'Enghavevej 80, 2450 København',
'2014-03-15 15:00:09',
'90',
'89',
'2014-01-15 12:05:09'
);

INSERT INTO meal(
    `id`,
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
    )
values (
'7',
'Chicken salad',
'apperitif',
'Enghavevej 80, 2450 København',
'2017-10-15 13:00:00',
'250',
'300',
'2017-01-15 15:05:09'
);

################################# Get a meal with any id, fx 1 ######################################

SELECT title
FROM Meal
WHERE id = 2;
############################ Update a meal with any id, fx 1.  ######################################

UPDATE Meal
SET Meal.id = 3
WHERE id = 4;

############################ Update any attribute fx the title or multiple attributes ################

UPDATE Meal
SET title = 'Volaille de Bresse à la truffe d’Alba en quatre services'
WHERE id = 4;
############################# Delete a meal with any id, fx 1 #######################################

DELETE FROM Meal where id = 4;

############################## Get all reservations #################################################

SELECT created_date
FROM Reservation;
############################## Add a new reservation ################################################

INSERT INTO Reservation(
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`
    )
values (
'1',
'150',
'62',
'2019-10-15 07:05:09'
);

INSERT INTO Reservation(
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`
    )
values (
'2',
'74',
'37',
'2018-10-15 07:05:09'
);


INSERT INTO Reservation(
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`
    )
values (
'3',
'200',
'13',
'2019-01-15 07:05:09'
);

INSERT INTO Reservation(
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`
    )
values (
'4',
'49',
'12',
'2019-11-15 07:05:09'
);

INSERT INTO Reservation(
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`
    )
values (
'5',
'85',
'77',
'2014-10-15 08:05:09'
);

INSERT INTO Reservation(
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`
    )
values (
'6',
'90',
'33',
'2015-10-15 14:05:09'
);

INSERT INTO Reservation(
    `id`,
    `number_of_guests`,
    `meal_id`,
    `created_date`
    )
values (
'7',
'250',
'56',
'2016-03-15 09:05:09'
);

############################## Get a reservation with any id, fx 1 ##################################

SELECT created_date
FROM Reservation
WHERE id = 1;

####################### Update a reservation with any id, fx 1. #####################################

UPDATE Reservation
SET number_of_guests = 500
WHERE id = 4;
##################### Update any attribute fx the title or multiple attributes ######################

UPDATE Reservation
SET created_date = '2019-08-15'
WHERE id = 1;
########################### Delete a reservation with any id, fx 1 ##################################

DELETE FROM Reservation where id = 3;

############################## Get all Review #################################################

SELECT title
FROM Review;
############################## Add a new Review ################################################

INSERT INTO Review(
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
    )
values (
'1',
'menu review',
'add some changes',
'1',
'5',
'2019-10-15'
);

INSERT INTO Review(
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
    )
values (
'2',
'replace',
'replacing the meal',
'2',
'4',
'2019-10-15'
);

INSERT INTO Review(
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
    )
values (
'3',
'modify',
'modify deco',
'3',
'5',
'2019-10-15'
);

INSERT INTO Review(
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
    )
values (
'4',
'Date manage',
'managing date',
'4',
'5',
'2019-10-15'
);

INSERT INTO Review(
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
    )
values (
'5',
'report meals',
'all meals ',
'12',
'4',
'2014-10-15'
);
INSERT INTO Review(
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
    )
values (
'6',
'recettes',
'renovation',
'32',
'5',
'2015-10-15'
);

INSERT INTO Review(
    `id`,
    `title`,
    `description`,
    `meal_id`,
    `stars`,
    `created_date`
    )
values (
'7',
'Main review',
'focus on the main',
'43',
'4',
'2016-10-15'
);
############################## Get a Review with any id, fx 1 ##################################

SELECT title
FROM Review
WHERE id = 4;

####################### Update a Review with any id, fx 1. #####################################

UPDATE Review
SET title = 'update menu'
WHERE id = 3;
##################### Update any attribute fx the title or multiple attributes ######################

UPDATE Review
SET description = 'reviewing date'
WHERE id = 4;
########################### Delete a Review with any id, fx 1 ##################################

DELETE FROM Review where id = 2;

############ Get meals that has a price smaller than a specific price fx 90 ####################

SELECT price
FROM Meal
WHERE price < 90;

########################## Get meals that still has available reservations #####################

SELECT meal.title,
Reservation.created_date, 
FROM Meal
INNER JOIN Reservation
ON meal.id = Reservation.id;

# Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde #

SELECT title,
description
FROM Meal
WHERE description 
regexp 'Tagliolini|Caviar|Cascade';

############## Get meals that has been created between two dates #################################

SELECT created_date
FROM Meal
WHERE created_date BETWEEN 
'2014-01-15' AND '2019-10-15';

################### Get only specific number of meals fx return only 5 meals #####################

SELECT meal.id,
meal.title
FROM Meal
LIMIT 5;
########################### Get the meals that have good reviews #################################

SELECT meal.title,
review.stars
FROM meal
INNER JOIN review
ON meal.id = review.id
WHERE stars = 5;
################## Get reservations for a specific meal sorted by created_date ###################

SELECT Meal.title,
Reservation.created_date
FROM Reservation 
INNER JOIN Meal
ON Reservation.id = Meal.id
order by created_date desc;
################# Sort all meals by average number of stars in the reviews #######################

SELECT meal.id, meal.title, review.stars, review.title
FROM meal
JOIN review ON review.meal_id = meal.id
ORDER BY review.stars;

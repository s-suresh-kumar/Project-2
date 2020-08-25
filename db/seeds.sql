DROP DATABASE IF EXISTS tips_db;
CREATE database tips_db;

USE tips_db;


/*User and Password Table for Login */

CREATE TABLE `users`
(
`id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
`username` varchar
(255) DEFAULT NULL,
`password` varchar
(255) DEFAULT NULL,
PRIMARY KEY
(`id`),
UNIQUE KEY `username`
(`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



/* Tables for restaurant/tip */
CREATE TABLE Restaurant
(
    Location STRING NOT NULL,
    Name STRING NOT NULL,
);

CREATE TABLE SERVER
(
    Emoticon
    /Rating
    (value) NOT NULL,
Tip
    (value) NOT NULL,
);

    /* All Saved Information here */
    CREATE TABLE Saved
    (
        Amount INT(15, 2NOT NULL,
    );
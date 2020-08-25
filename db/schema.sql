DROP DATABASE IF EXISTS Tips_db;
CREATE database Tips_db;

USE Tips_db;

/*User and Password Table for Login */

CREATE TABLE User (
user varchar
(30),
);

CREATE TABLE Password
(
    password STRING.data NOT NULL,
);

/* Tables for restaurant/diner/tip */


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

    CREATE TABLE Diner
    (
        Name varchar (50) NOT NULL,
    );

    /* All Saved Information here */
    CREATE TABLE Saved
    (
        Amount Data NOT NULL,
    );




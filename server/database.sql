-- DROP DATABASE Trading_app;
CREATE DATABASE IF NOT EXISTS Trading_app;
USE Trading_app;

CREATE TABLE IF NOT EXISTS Accounts(
    username varchar(50) NOT NULL,
  	password varchar(255) NOT NULL,
    email varchar(100) NOT NULL
)

SELECT * FROM Accounts;
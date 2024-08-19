-- SQL dump generated using DBML (dbml.dbdiagram.io)
-- Database: PostgreSQL
-- Generated at: 2024-07-11T04:10:46.291Z

CREATE TABLE users (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY NOT NULL,
  name varchar(50) NOT NULL,
  email varchar(255) UNIQUE NOT NULL,
  password varchar(255) NOT NULL
);

CREATE TABLE category (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY NOT NULL,
  user_id int,
  name varchar(100) NOT NULL
);

CREATE TABLE item (
  id INT AUTO_INCREMENT UNIQUE PRIMARY KEY NOT NULL,
  category_id int,
  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  price double
);

ALTER TABLE category ADD FOREIGN KEY ("user_id") REFERENCES users ("id");

ALTER TABLE item ADD FOREIGN KEY ("category_id") REFERENCES category ("id");

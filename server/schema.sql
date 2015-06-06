--CREATE DATABASE chat;

USE chat;

CREATE TABLE IF NOT EXISTS users (
  username varchar(20),
  PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS rooms (
  roomname varchar(20),
  PRIMARY KEY (roomname)
);

CREATE TABLE messages (
  id int AUTO_INCREMENT,
  text varchar(200),
  username varchar(20),
  roomname varchar(20),
  created_at datetime,
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES users(username),
  FOREIGN KEY (roomname) REFERENCES rooms(roomname)
);

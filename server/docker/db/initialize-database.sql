use mysql;

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

flush privileges;

DROP DATABASE fiesta
CREATE DATABASE fiesta

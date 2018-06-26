FROM mysql:latest

ENV MYSQL_DATABASE fiesta
ENV MYSQL_USER root
ENV MYSQL_ROOT_PASSWORD password

ADD ./initialize-database.sql /docker-entrypoint-initdb.d

EXPOSE 3306

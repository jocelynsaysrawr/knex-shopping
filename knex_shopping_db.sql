DROP DATABASE IF EXISTS knex_shopping_db;
DROP USER IF EXISTS knex_shopping_user;
CREATE USER knex_shopping_user WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE knex_shopping_db OWNER knex_shopping_user;
\c knex_shopping_db;
SET ROLE knex_shopping_user;

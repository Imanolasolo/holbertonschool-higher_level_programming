# 0x0D. SQL - Introduction

<div style="text-align: justify">

Thank you for visiting this repository which contain our work to start learning about SQL and relational databases. I began practicing introductory data definition and data manipulation language, making subqueries, and using functions.


![Logo](https://www.howtogeek.com/wp-content/uploads/2021/05/laptop-with-terminal-big.png?height=200p&trim=2,2,2,50)

# Getting Started :running:
<div style="text-align: justify">

## Table of Contents
* [AUTHORS](./AUTHORS)
* [MIT License](./LICENSE)
* [About](#about)
* [Dependences](#dependences)
* [Installing, compiling and using](#installing, compiling and using)
* [Builtins](#builtins)
* [Man page]
* [Credits](#credits)

## About
This directory contains a collection of files, functions, structs and scripts used to build and manage this repository. If there are any issues regarding the intention of a particular script (or even part of a certain script), please reach out to us.
	
	Contents:

- What’s a database

- What’s a relational database

- What does SQL stand for

- What’s MySQL

- How to create a database in MySQL

- What does DDL and DML stand for

- How to CREATE or ALTER a table

- How to SELECT data from a table

- How to INSERT, UPDATE or DELETE data

- What are subqueries

- How to use MySQL functions

	
## Dependences 
	
> [README.md](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/README.md) ---> README file to show the project insights. 

>[0-list_databases.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/1-write_file.py) ---> Script that lists all databases of your MySQL server.

>[1-create_database_if_missing.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/2-append_write.py) ---> script that creates the database hbtn_0c_0 in your MySQL server.

>[2-remove_database.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/3-to_json_string.py) --> Script that deletes the database hbtn_0c_0 in your MySQL server.

If the database hbtn_0c_0 doesn’t exist, your script should not fail

You are not allowed to use the SELECT or SHOW statements

>[3-list_tables.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/3-list_tables.sql) --> Script that lists all the tables of a database in your MySQL server.

The database name will be passed as argument of mysql command (in the following example: mysql is the name of the database)

>[4-first_table.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/4-first_table.sql) --> script that creates a table called first_table in the current database in your MySQL server.

first_table description:

id INT

name VARCHAR(256)

The database name will be passed as an argument of the mysql command

If the table first_table already exists, your script should not fail

You are not allowed to use the SELECT or SHOW statements

>[5-full_table.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/5-full_table.sql) --> Script that prints the full description of the table first_table from the database hbtn_0c_0 in your MySQL server.

The database name will be passed as an argument of the mysql command

You are not allowed to use the DESCRIBE or EXPLAIN statements

>[6-list_values.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/6-list_values.sql) --> Script that lists all rows of the table first_table from the database hbtn_0c_0 in your MySQL server.

All fields should be printed

The database name will be passed as an argument of the mysql command

>[7-insert_value.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/7-insert_value.sql) --> Script that inserts a new row in the table first_table (database hbtn_0c_0) in your MySQL server.

New row:

    id = 89

    name = Best School

The database name will be passed as an argument of the mysql command

>[8-count_89.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/8-count_89.sql) --> Script that displays the number of records with id = 89 in the table first_table of the database hbtn_0c_0 in your MySQL server.

The database name will be passed as an argument of the mysql command

>[9-full_creation.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/9-full_creation.sql) --> Script that creates a table second_table in the database hbtn_0c_0 in your MySQL server and add multiples rows.

second_table description:

    id INT

    name VARCHAR(256)

    score INT

The database name will be passed as an argument to the mysql command

If the table second_table already exists, your script should not fail

You are not allowed to use the SELECT and SHOW statements

Your script should create these records:

    id = 1, name = “John”, score = 10

    id = 2, name = “Alex”, score = 3

    id = 3, name = “Bob”, score = 14

    id = 4, name = “George”, score = 8

>[10-top_score.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/10-top_score.sql) --> Script that lists all records of the table second_table of the database hbtn_0c_0 in your MySQL server.

Results should display both the score and the name (in this order)

Records should be ordered by score (top first)

The database name will be passed as an argument of the mysql command

>[11-best_score.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/11-best_score.sql) --> Script that lists all records with a score >= 10 in the table second_table of the database hbtn_0c_0 in your MySQL server.

Results should display both the score and the name (in this order)

Records should be ordered by score (top first)

The database name will be passed as an argument of the mysql command

>[12-no_cheating.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/12-no_cheating.sql) --> Script that updates the score of Bob to 10 in the table second_table.

You are not allowed to use Bob’s id value, only the name field

The database name will be passed as an argument of the mysql command

>[13-change_class.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/13-change_class.sql) --> script that removes all records with a score <= 5 in the table second_table of the database hbtn_0c_0 in your MySQL server.

The database name will be passed as an argument of the mysql command

>[14-average.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/14-average.sql) --> script that computes the score average of all records in the table second_table of the database hbtn_0c_0 in your MySQL server.

The result column name should be average

The database name will be passed as an argument of the mysql command

>[15-groups.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/15-groups.sql) --> script that lists the number of records with the same score in the table second_table of the database hbtn_0c_0 in your MySQL server.

The result should display:

the score

the number of records for this score with the label number

The list should be sorted by the number of records (descending)

The database name will be passed as an argument to the mysql command

>[16-no_link.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/16-no_link.sql) --> Script that lists all records of the table second_table of the database hbtn_0c_0 in your MySQL server.

Don’t list rows without a name value

Results should display the score and the name (in this order)

Records should be listed by descending score

The database name will be passed as an argument to the mysql command

>[100-move_to_utf8.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/100-move_to_utf8.sql) --> Script that converts hbtn_0c_0 database to UTF8 (utf8mb4, collate utf8mb4_unicode_ci) in your MySQL server.

You need to convert all of the following to UTF8:

Database hbtn_0c_0

Table first_table

Field name in first_table

>[101-avg_temperatures.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/101-avg_temperatures.sql) --> Script that displays the average temperature (Fahrenheit) by city ordered by temperature (descending).

>[102-top_city.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/102-top_city.sql) -->  script that displays the top 3 of cities temperature during July and August ordered by temperature (descending)

>[103-max_state.sql](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0D-SQL_introduction/103-max_state.sql) --> script that displays the max temperature of each state (ordered by State name).

>[temperature.sql](https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/272/temperatures.sql) --> Table where 101, 102 and 103 files take data.
	

## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
Use “container-on-demand” to run MySQL
In the container, credentials are root/root

Ask for container Ubuntu 20.04

Connect via SSH

OR connect via the Web terminal

In the container, you should start MySQL before playing with it:
```
$ service mysql start                                                   
 * Starting MySQL database server mysqld 
$
$ cat 0-list_databases.sql | mysql -uroot -p                               
Database                                                                                   
information_schema                                                                         
mysql                                                                                      
performance_schema                                                                         
sys                      
$

```

## Builtins

- No builtins
		
## Man page

-  No man page

## Flowchart
	
- No flowchart

## Resources


**Read or watch**:

-   [What is Database & SQL?](https://intranet.hbtn.io/rltoken/khEqMKp1PHvKpfO18d4fLQ "What is Database & SQL?")
-   [A Basic MySQL Tutorial](https://intranet.hbtn.io/rltoken/kK_v6WRoj8aoZ1TbrYNuBQ "A Basic MySQL Tutorial")
-   [Basic SQL statements: DDL and DML](https://intranet.hbtn.io/rltoken/ibCYnC9CDgZg5NQQvccBWw "Basic SQL statements: DDL and DML") (*no need to read the chapter "Privileges"*)
-   [Basic queries: SQL and RA](https://intranet.hbtn.io/rltoken/yelYhpf7l0FcRIPCVfnMLw "Basic queries: SQL and RA")
-   [SQL technique: functions](https://intranet.hbtn.io/rltoken/3aQcovOE-clrD8yIfxFE9Q "SQL technique: functions")
-   [SQL technique: subqueries](https://intranet.hbtn.io/rltoken/lTXnq6pdk59x2h_Y-q0-Hg "SQL technique: subqueries")
-   [What makes the big difference between a backtick and an apostrophe?](https://intranet.hbtn.io/rltoken/R--kAkehyaawZFY4m1inxQ "What makes the big difference between a backtick and an apostrophe?")
-   [MySQL Cheat Sheet](https://intranet.hbtn.io/rltoken/aGZu7ulJpbbKcDhcz49yrg "MySQL Cheat Sheet")
-   [MySQL 8.0 SQL Statement Syntax](https://intranet.hbtn.io/rltoken/4n4nXLDHNPyViz2H0DTGUA "MySQL 8.0 SQL Statement Syntax")

## Usage



## Credits

## Author(s):blue_book:

Work is owned and maintained by:
* Imanol Asolo <[3848](mailto:3848@holbertonschool.com)> [![M](https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/25px-Octicons-mark-github.svg.png)](https://github.com/Imanolasolo) [![M](https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/25px-Twitter_Bird.svg.png)](https://twitter.com/jjusturi) [![M](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/25px-LinkedIn_logo_initials.png)](https://www.linkedin.com/in/imanol-asolo-5ba9b42a/)


## Acknowledgments :mega: 

### **`Holberton School`** (*providing guidance*)
This program was written as part of the curriculum for Holberton School.
Holberton School is a campus-based full-stack software engineering program
that prepares students for careers in the tech industry using project-based
peer learning. For more information, visit [this link](https://www.holbertonschool.com/).
<p align="center">
	<img src="https://assets.website-files.com/6105315644a26f77912a1ada/610540e8b4cd6969794fe673_Holberton_School_logo-04-04.svg" alt="This is a secret;)">
</p>

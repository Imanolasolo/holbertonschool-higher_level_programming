# 0x03. Python - Data Structures: Lists, Tuples

<div style="text-align: justify">

Thank you for visiting this repository which contain our work to start learning Python programming. 	


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

Why Python programming is awesome
What are lists and how to use them
What are the differences and similarities between strings and lists
What are the most common methods of lists and how to use them
How to use lists as stacks and queues
What are list comprehensions and how to use them
What are tuples and how to use them
When to use tuples versus lists
What is a sequence
What is tuple packing
What is sequence unpacking
What is the del statement and how to use it
	
## Dependences 
	
> [0-print_list_integer.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/0-print_list_integer.py) --> Function that prints all integers of a list

> [README.md](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/README.md) ---> README file to show the project insights. 

>[1-element_at.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/1-element_at.py) ---> Function that retrieves an element from a list like in C.

>[2-replace_in_list.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/2-replace_in_list.py) ---> Function that replaces an element of a list at a specific position (like in C).

>[3-print_reversed_list_integer.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/3-print_reversed_list_integer.py)--> Function that prints all integers of a list, in reverse order.
	
>[4-new_in_list.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/4-new_in_list.py)--> function that replaces an element in a list at a specific position without modifying the original list (like in C).

>[5-no_c.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/5-no_c.py)--> Function that removes all characters c and C from a string.
	
>[6-print_matrix_integer.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/6-print_matrix_integer.py)-->  Function that prints a matrix of integers.
	
>[7-add_tuple.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/7-add_tuple.py)--> Function that adds 2 tuples.
	
>[8-multiple_returns.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/8-multiple_returns.py)-> Function that returns a tuple with the length of a string and its first character.

>[9-max_integer.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/9-max_integer.py)---> Function that finds the biggest integer of a list.

>[10-divisible_by_2.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/10-divisible_by_2.py)-->function that finds all multiples of 2 in a list. 

>[11-delete_at.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/11-delete_at.py)--> Function that deletes the item at a specific position in a list.

>[12-switch.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/12-switch.py)-->Complete the source code in order to switch value of a and b

You can find the source code [here](https://github.com/holbertonschool/0x03.py)

>[13-is_palindrome.c](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/13-is_palindrome.c)-->Write a function in C that checks if a singly linked list is a palindrome.

>[lists.h](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x03-python-data_structures/lists.h)-->Header file containing files and functions used in C scripts
	



## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
> make executable the programs with `chmod +x` followed with .py file and name of executable file.
	
> Run the executable files with `./` followed with the `.py` file

> Compile C scripts with `gcc -Wall -Werror -Wextra -pedantic 13-main.c linked_lists.c 13-is_palindrome.c -o palindrome`

>Run C scripts with `./`followed with c file name



## Builtins
```
	def print_list_integer(my_list=[]):
	
	def element_at(my_list, idx):

     def replace_in_list(my_list, idx, element):

     def print_reversed_list_integer(my_list=[]):

     def new_in_list(my_list, idx, element):

     def no_c(my_string):

     def print_matrix_integer(matrix=[[]]):

     def add_tuple(tuple_a=(), tuple_b=()):

     def multiple_returns(sentence):

     def max_integer(my_list=[]):

     def divisible_by_2(my_list=[]):

     def delete_at(my_list=[], idx=0):

     int is_palindrome(listint_t **head); (for C script)


```	
		
## Man page

-  No man page

## Flowchart
	
- No flowchart

## Resources

**Read or watch**:

[3.1.3. Lists](https://intranet.hbtn.io/projects/241#:~:text=3.1.3.%20Lists,Program%206%20%3A%20Lists)
[Data structures (until 5.3. Tuples and Sequences included)](https://intranet.hbtn.io/rltoken/gUEiytlF3ZgpQ8W9MXzQKw)
[Learn to Program 6 : Lists](https://intranet.hbtn.io/rltoken/smot10KJXMP-a84UxJ7WrQ)
**Read or watch** :

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/80px-Google_2015_logo.svg.png)](https://www.google.com/search?q=Writing+a+shell+in+C&sa=X&ved=2ahUKEwi6vIn-nrr0AhWbTDABHUjrAxwQ1QJ6BAgLEAE&biw=1378&bih=708&dpr=1.25)

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/70px-Logo_of_YouTube_%282015-2017%29.svg.png)](https://www.youtube.com/watch?v=z4LEuxMGGs8)



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

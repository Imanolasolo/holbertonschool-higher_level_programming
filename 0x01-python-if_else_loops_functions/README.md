# 0x01-python-if_else_loops_functions

<div style="text-align: justify">

Thank you for visiting this repository which contain my work to start learning Python programming. 	


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
-   Why Python programming is awesome
-   Why indentation is so important in Python
-   How to use the `if`, `if ... else` statements
-   How to use comments
-   How to affect values to variables
-   How to use the `while` and `for` loops
-   How is Python’s `for` different from `C`‘s?
-   How to use the `break` and `continues` statements
-   How to use `else` clauses on loops
-   What does the `pass` statement do, and when to use it
-   How to use `range`
-   What is a function and how do you use functions
-   What does return a function that does not use any `return` statement
-   Scope of variables
-   What’s a traceback
-   What are the arithmetic operators and how to use them
	
## Dependences 
	
> [lists.h](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/lists.h) --> Main header file containing builtin functions used in different  C files into the project.

> [README.md](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/README.md) ---> README file to show the project insights. 

>[0-positive_or_negative.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/0-positive_or_negative.py) ---> This program will assign a random signed number to the variable `number` each time it is executed. Complete the source code in order to print whether the number stored in the variable `number` is positive or negative.  

>[1-last_digit.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/1-last_digit.py) ---> This program will assign a random signed number to the variable `number` each time it is executed. Complete the source code in order to print the last digit of the number stored in the variable `number`.

>[2-print_alphabet.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/2-print_alphabet.py)--> Program that prints the ASCII alphabet, in lowercase, not followed by a new line.
	
>[3-print_alphabt.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/3-print_alphabt.py)--> Program that prints the ASCII alphabet, in lowercase, not followed by a new line.
	
>[4-print_hexa.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/4-print_hexa.py)--> Program that prints all numbers from `0` to `98` in decimal and in hexadecimal
	
>[5-print_comb2.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/5-print_comb2.py)-->  Program that prints numbers from `0` to `99`.
	
>[6-print_comb3.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/6-print_comb3.py)--> Program that prints all possible different combinations of two digits.
	
>[7-islower.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/7-islower.py)-> Function that checks for lowercase character.
	
>[8-uppercase.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/8-uppercase.py)---> Function that prints a string in uppercase followed by a new line.
	
>[9-print_last_digit.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/9-print_last_digit.py) --> Function that prints the last digit of a number.
	
>[10-add.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/10-add.py) --> Function that adds two integers and returns the result.
	
>[11-pow.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/11-pow.py) --> Function that computes `a` to the power of `b` and return the value.
	
>[12-fizzbuzz.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/12-fizzbuzz.py) --> Function that prints the numbers from 1 to 100 separated by a space.
	
>[13-insert_number.c](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/13-insert_number.c) --> Function in C that inserts a number into a sorted singly linked list.
	
>[100-print_tebahpla.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/100-print_tebahpla.py) -->  Program that prints the ASCII alphabet, in reverse order, alternating lowercase and uppercase (`z` in lowercase and `Y` in uppercase) , not followed by a new line.
	
>[101-remove_char_at.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/101-remove_char_at.py) --> Function that creates a copy of the string, removing the character at the position `n` (not the Python way, the “C array index”).
	
>[102-magic_calculation.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x01-python-if_else_loops_functions/102-magic_calculation.py) --> Python function `def magic_calculation(a, b, c):` that does exactly the same as the following Python bytecode:
```
  3           0 LOAD_FAST                0 (a)
              3 LOAD_FAST                1 (b)
              6 COMPARE_OP               0 (<)
              9 POP_JUMP_IF_FALSE       16

  4          12 LOAD_FAST                2 (c)
             15 RETURN_VALUE

  5     >>   16 LOAD_FAST                2 (c)
             19 LOAD_FAST                1 (b)
             22 COMPARE_OP               4 (>)
             25 POP_JUMP_IF_FALSE       36

  6          28 LOAD_FAST                0 (a)
             31 LOAD_FAST                1 (b)
             34 BINARY_ADD
             35 RETURN_VALUE

  7     >>   36 LOAD_FAST                0 (a)
             39 LOAD_FAST                1 (b)
             42 BINARY_MULTIPLY
             43 LOAD_FAST                2 (c)
             46 BINARY_SUBTRACT
             47 RETURN_VALUE
```
	
	
## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
> Compile the program with `gcc -Wall -Werror -Wextra -pedantic -std=gnu89` followed with .c file and name of executable file.
	
> Run the Phyton modules with `./` followed with the file name (remember to make them executables with `chmod +x` followed with a file name)
	
## Builtins
	
	- def islower(c):
	- def uppercase(str):
	- def print_last_digit(number):
	- def add(a, b):
	- def pow(a, b):
	- def fizzbuzz():
	- listint_t *insert_node(listint_t **head, int number);
	- def remove_char_at(str, n):
	- def magic_calculation(a, b, c):
		
		
## Man page
	
- No man page

## Flowchart
	
- No flowchart

## Resources

**Read or watch**:
	
-   [More Control Flow Tools](https://intranet.hbtn.io/rltoken/YLjvfmHv_JJ-J-cyn8bS2Q "More Control Flow Tools") (_Read until “4.6. Defining Functions” included_)
-   [Myths about Indentation](https://intranet.hbtn.io/rltoken/Y-HaMMJBKPseiVDo_v9PVg "Myths about Indentation")
-   [IndentationError](https://intranet.hbtn.io/rltoken/AorC2VSZ4yCOx-AbatvKLA "IndentationError")
-   [How To Use String Formatters in Python 3](https://intranet.hbtn.io/rltoken/arGQeiwUbFn3JOoYpw84yA "How To Use String Formatters in Python 3")
-   [Learn to Program](https://intranet.hbtn.io/rltoken/mlo-dauC8pSM_NrO5VYobw "Learn to Program")
-   [Learn to Program 2 : Looping](https://intranet.hbtn.io/rltoken/mlo-dauC8pSM_NrO5VYobw "Learn to Program 2 : Looping")
-   [Pycodestyle – Style Guide for Python Code](https://intranet.hbtn.io/rltoken/5uFnbDmoyPNoxwXUNxEypw "Pycodestyle -- Style Guide for Python Code")

**Read or watch** :

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/80px-Google_2015_logo.svg.png)](https://www.google.com/search?q=Writing+a+shell+in+C&sa=X&ved=2ahUKEwi6vIn-nrr0AhWbTDABHUjrAxwQ1QJ6BAgLEAE&biw=1378&bih=708&dpr=1.25)

[![M](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/70px-Logo_of_YouTube_%282015-2017%29.svg.png)](https://www.youtube.com/watch?v=z4LEuxMGGs8)


## Usage

## Credits

## Author(s):blue_book:

Work is owned and maintained by
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

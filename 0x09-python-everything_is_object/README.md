# 0x09. Python - Everything is object

<div style="text-align: justify">

Thank you for visiting this repository which contain our work to start learning Python programming. I am learning now practicing object oriented programming.The project involved a series of quiz-like questions the answers to which I provided in single-line .txt files. The aim is to learn about mutable and inmutable objects. 	


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

- Why Python programming is awesome

- What is an object

- What is the difference between a class and an object or instance

- What is the difference between immutable object and mutable object

- What is a reference

- What is an assignment

- What is an alias

- How to know if two variables are identical

- How to know if two variables are linked to the same object

- How to display the variable identifier (which is the memory address in the CPython 
implementation)

- What is mutable and immutable

- What are the built-in mutable types

- What are the built-in immutable types

- How does Python pass variables to functions

	
## Dependences 
	
> [0-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/0-square.py) --> What function would you use to print the type of an object?

> [README.md](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/README.md) ---> README file to show the project insights. 

>[1-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/1-square.py) ---> How do you get the variable identifier (which is the memory address in the CPython implementation)?

>[2-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/2-square.py) ---> In the following code, do a and b point to the same object? Answer with Yes or No.

>>> a = 89
>>> b = 100

>[3-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/3-square.py) --> In the following code, do a and b point to the same object? Answer with Yes or No.

>>> a = 89
>>> b = 89
	
>[4-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/4-square.py)--> In the following code, do a and b point to the same object? Answer with Yes or No.

>>> a = 89
>>> b = a

>[5-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/5-square.py)--> In the following code, do a and b point to the same object? Answer with Yes or No.

>>> a = 89
>>> b = a + 1
	
>[6-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/6-square.py)-->  What do these 3 lines print?

>>> s1 = "Best School"
>>> s2 = s1
>>> print(s1 == s2)
	
>[7-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/100-singly_linked_list.py)--> What do these 3 lines print?

>>> s1 = "Best"
>>> s2 = s1
>>> print(s1 is s2)
	
>[8-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/101-square.py)-> What do these 3 lines print?

>>> s1 = "Best School"
>>> s2 = "Best School"
>>> print(s1 == s2)

>[9-answer.txt](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x06-python-classes/102-square.py) --> What do these 3 lines print?

>>> s1 = "Best School"
>>> s2 = "Best School"
>>> print(s1 is s2)

>[10-answer.txt]() --> What do these 3 lines print?

>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 == l2)

>[11-answer.txt]()--> What do these 3 lines print?

>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 is l2)

>[12-answer.txt]() --> What do these 3 lines print?

>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 == l2)

>[13-answer.txt]() --> What do these 3 lines print?

>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 is l2)

>[14-answer.txt]() --> What does this script print?

l1 = [1, 2, 3]
l2 = l1
l1.append(4)
print(l2)

>[15-answer.txt]() --> What does this script print?

l1 = [1, 2, 3]
l2 = l1
l1 = l1 + [4]
print(l2)

>[16-answer.txt]() --> What does this script print?

>[17-answer.txt]() --> What does this script print?

def increment(n):
    n.append(4)

l = [1, 2, 3]
increment(l)
print(l)

>[18-answer.txt]() --> What does this script print?

def assign_value(n, v):
    n = v

l1 = [1, 2, 3]
l2 = [4, 5, 6]
assign_value(l1, l2)
print(l1)

>[19-copy_list.py]() --> Write a function def copy_list(l): that returns a copy of a list.

>[20-answer.txt]() --> a = ()
Is a a tuple? Answer with Yes or No.

>[21-answer.txt]() --> a = (1, 2)
Is a a tuple? Answer with Yes or No.

>[22-answer.txt]() --> a = (1)
Is a a tuple? Answer with Yes or No.

>[23-answer.txt]() --> a = (1, )
Is a a tuple? Answer with Yes or No.

>[24-answer.txt]() --> What does this script print?

a = (1)
b = (1)
a is b

>[25-answer.txt]() --> What does this script print?

a = (1, 2)
b = (1, 2)
a is b

>[26-answer.txt]() --> What does this script print?

a = ()
b = ()
a is b

>[27-answer.txt]() --> >>> id(a)
139926795932424
>>> a
[1, 2, 3, 4]
>>> a = a + [5]
>>> id(a)
Will the last line of this script print 139926795932424? Answer with Yes or No.




## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
> make executable the programs with `chmod +x` followed with .py file and name of executable file.
	
> Run the executable files with `./` followed with the `.py` file





## Builtins

No builtins created
		
## Man page

-  No man page

## Flowchart
	
- No flowchart

## Resources

**Read or watch**:


[9.10. Objects and values](https://intranet.hbtn.io/rltoken/n1x09X-KJSllpJkJorBw2A)

[9.11. Aliasing](https://intranet.hbtn.io/rltoken/n1x09X-KJSllpJkJorBw2A)

[Immutable vs mutable types](https://intranet.hbtn.io/rltoken/JuPVygeoG27Q_qKxB2lP8g)

[Mutation (Only this chapter)](https://intranet.hbtn.io/rltoken/UbL96sV3cIxewdQPW_zwRw)

[9.12. Cloning lists](https://intranet.hbtn.io/rltoken/-t_1VsmKlgWHszL5y1YiKA)

[Python tuples: immutable but potentially changing](https://intranet.hbtn.io/rltoken/IdBAdTYNLuS3YpRRQIam6Q)


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


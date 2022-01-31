# 0x0A. Python - Inheritance

<div style="text-align: justify">

Thank you for visiting this repository which contain our work to start learning Python programming. In this project, I learned about Python class inheritance. I learned about the differences between `super- and sub-classes` while practicing ``nheritance`, definining classes with multiple base classes, and overiding inherited methods and attributes. 	


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

- What is a superclass, baseclass or parentclass

- What is a subclass

- How to list all attributes and methods of a class or instance

- When can an instance have new attributes

- How to inherit class from another

- How to define a class with multiple base classes

- What is the default class every class inherit from

- How to override a method or attribute inherited from the base class

- Which attributes or methods are available by heritage to subclasses

- What is the purpose of inheritance

- What are, when and how to use isinstance, issubclass, type and super built-in functions

	
## Dependences 
	
> [0-lookup.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/0-answer.txt) --> function that returns the list of available attributes and methods of an object

> [README.md](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/README.md) ---> README file to show the project insights. 

>[1-my_list.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/1-answer.txt) ---> class MyList that inherits from `list`

>[2-is_same_class.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/2-answer.txt) --->  function that returns True if the object is exactly an instance of the specified class ; otherwise False.

>[3-is_kind_of_class.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/3-answer.txt) --> function that returns True if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise False.
	
>[4-inherits_from.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/4-answer.txt)--> Write a function that returns True if the object is an instance of a class that inherited (directly or indirectly) from the specified class ; otherwise False.

>[5-base_geometry.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/5.answer.txt)--> Write an empty class BaseGeometry.
	
>[6-base_geometry.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/6-answer.txt)-->  class BaseGeometry (based on 5-base_geometry.py)
	
>[7-base_geometry.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/7-answer.txt)--> class BaseGeometry (based on 6-base_geometry.py).
	
>[8-rectangle.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/8.answer.txt)-> class Rectangle that inherits from BaseGeometry (7-base_geometry.py).

>[9-rectangle.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/9.answer.txt) --> class Rectangle that inherits from BaseGeometry (7-base_geometry.py). (task based on 8-rectangle.py)

>[10-square.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/10-answer.txt) --> class Square that inherits from Rectangle (9-rectangle.py).

>[11-square.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/11-answer.txt)--> class Square that inherits from Rectangle (9-rectangle.py). (task based on 10-square.py).

>[100-my_int.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/12-answer.txt) --> class MyInt that inherits from int

>[101-add_attribute.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x09-python-everything_is_object/13-answer.txt) --> function that adds a new attribute to an object if it’s possible.

## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
> make executable the programs with `chmod +x` followed with .py file and name of executable file.
	
> Run the executable files with `./` followed with the `.py` file

## Builtins

```
def lookup(obj):
def print_sorted(self):
def is_same_class(obj, a_class):
def is_kind_of_class(obj, a_class):
def inherits_from(obj, a_class):
def area(self):
def integer_validator(self, name, value):
def __init__(self, width, height):
size: def __init__(self, size):
```
		
## Man page

-  No man page

## Flowchart
	
- No flowchart

## Resources

**Read or watch**:


[Inheritance](https://intranet.hbtn.io/rltoken/99aGWGmLu8zsaiiJg7HCYQ)

[Multiple inheritance](https://intranet.hbtn.io/rltoken/ozYK1JSbEU4U6BqTggCjSA)

[Inheritance in Python](https://intranet.hbtn.io/rltoken/ycewwwPmDpXqRp2R1FW51w)

[Learn to Program 10 : Inheritance Magic Methods](https://intranet.hbtn.io/rltoken/F8LUzmvPI4yur1Z37ZM1fQ)


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

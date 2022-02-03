# 0x0B. Python - Input/Output

<div style="text-align: justify">

Thank you for visiting this repository which contain our work to start learning Python programming. In this project, I learned about Python class inheritance. I learned about the practics of file handling in Python. I used the builtin with, open, and read functions with the json module to read and write files and serialize and deserialize objects with JSON. 


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

- How to open a file

- How to write text in a file

- How to read the full content of a file

- How to read a file line by line

- How to move the cursor in a file

- How to make sure a file is closed after using it

- What is and how to use the with statement

- What is JSON

- What is serialization

- What is deserialization

- How to convert a Python data structure to a JSON string

- How to convert a JSON string to a Python data structure

	
## Dependences 
	
> [0-read_file.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/0-read_file.py) --> function that reads a text file (UTF8) and prints it to stdout

> [README.md](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/README.md) ---> README file to show the project insights. 

>[1-write_file.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/1-write_file.py) ---> function that writes a string to a text file (UTF8) and returns the number of characters written.

>[2-append_write.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/2-append_write.py) --->  function that returns the JSON representation of an object (string)

>[3-to_json_string.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/3-to_json_string.py) --> function that returns True if the object is an instance of, or if the object is an instance of a class that inherited from, the specified class ; otherwise False.
	
>[4-from_json_string.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/4-from_json_string.py)-->function that returns an object (Python data structure) represented by a JSON string

>[5-save_to_json_file.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/5-save_to_json_file.py)--> function that writes an Object to a text file, using a JSON representation
	
>[6-load_from_json_file.py]https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/6-load_from_json_file.py)-->  function that creates an Object from a “JSON file”
	
>[7-add_item.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/7-add_item.py)--> script that adds all arguments to a Python list, and then save them to a file
	
>[8-class_to_json.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/8-class_to_json.py)->  function that returns the dictionary description with simple data structure (list, dictionary, string, integer and boolean) for JSON serialization of an object

>[9-student.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/9-student.py) --> class Student that defines a student by

>[10-student.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/10-student.py) --> class Student that defines a student by: (based on 9-student.py)

>[11-student.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/11-student.py)--> class Student that defines a student by: (based on 10-student.py)

>[12-pascal_triangle.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/12-pascal_triangle.py) -->  function def pascal_triangle(n): that returns a list of lists of integers representing the Pascal’s triangle of n

>[100-add_attribute.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/101-stats.py) --> function that inserts a line of text to a file, after each line containing a specific string (see example)

>[101-stats.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x0B-python-input_output/101-stats.py) --> script that reads stdin line by line and computes metrics

## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
> make executable the programs with `chmod +x` followed with .py file and name of executable file.
	
> Run the executable files with `./` followed with the `.py` file

## Builtins

```
def read_file(filename=""):
def write_file(filename="", text=""):
def append_write(filename="", text=""):
def to_json_string(my_obj):
def from_json_string(my_str):
def save_to_json_file(my_obj, filename):
def load_from_json_file(filename):
def class_to_json(obj):
def to_json(self):
def to_json(self, attrs=None):
def reload_from_json(self, json):
def pascal_triangle(n):
def append_after(filename="", search_string="", new_string=""):

```
		
## Man page

-  No man page

## Flowchart
	
- No flowchart

## Resources

**Read or watch**:

[7.2. Reading and Writing Files](https://intranet.hbtn.io/rltoken/b1H-khJP64gSE3OXQaRuCA)

[8.7. Predefined Clean-up Actions](https://intranet.hbtn.io/rltoken/WK3WP_qtPhcDHJo4YNtL5A)

[Dive Into Python 3: Chapter 11. Files (until “11.4 Binary Files” (included))](https://intranet.hbtn.io/rltoken/J1IflY1h8VPUkQvh3W8qoA)

[JSON encoder and decoder](https://intranet.hbtn.io/rltoken/H2tqUmi9i85WeOjAbRh1Bw)

[Learn to Program 8 : Reading / Writing Files](https://intranet.hbtn.io/rltoken/derf9VLFVDnSgX2n-drwnw)

[Automate the Boring Stuff with Python (ch. 8 p 180-183 and ch. 14 p 326-333)](https://intranet.hbtn.io/rltoken/Y77h8aeRoljlN643yKfdTg)

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


# 0x02. Python - import & modules

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
How to import functions from another file
How to use imported functions
How to create a module
How to use the built-in function dir()
How to prevent code in your script from being executed when imported
How to use command line arguments with your Python program
	
## Dependences 
	
> [0-add.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/0-add.py) --> Program that imports the function `def add(a, b):` from the file `add_0.py` and prints the result of the addition `1 + 2 = 3`

> [README.md](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/README.md) ---> README file to show the project insights. 

>[1-calculation.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/1-calculation.py) ---> Program that imports functions from the file `calculator_1.py`, does some Maths, and prints the result.

>[2-args.pypy](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/2-args.py) ---> Program that prints the number of and the list of its arguments.

>[3-infinite_add.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/3-infinite_add.py)--> Program that prints the result of the addition of all arguments
	
>[4-hidden_discovery.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/4-hidden_discovery.py)--> Program that prints all the names defined by the compiled module [hidden_4.pyc](https://github.com/holbertonschool/0x02.py/raw/master/hidden_4.pyc "hidden_4.pyc") (please download it locally).
	
>[5-variable_load.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/5-variable_load.py)--> Program that imports the variable `a` from the file `variable_load_5.py` and prints its value.
	
>[100-my_calculator.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/100-my_calculator.py))-->  Program that imports all functions from the file `calculator_1.py` and handles basic operations.
	
>[101-easy_print.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/101-easy_print.py)--> Program that prints `#pythoniscool`, followed by a new line, in the standard output.
	
>[102-magic_calculation.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/102-magic_calculation.py)-> Python function `def magic_calculation(a, b):` that does exactly the same as the following Python bytecode:

```
  3           0 LOAD_CONST               1 (0)
              3 LOAD_CONST               2 (('add', 'sub'))
              6 IMPORT_NAME              0 (magic_calculation_102)
              9 IMPORT_FROM              1 (add)
             12 STORE_FAST               2 (add)
             15 IMPORT_FROM              2 (sub)
             18 STORE_FAST               3 (sub)
             21 POP_TOP

  4          22 LOAD_FAST                0 (a)
             25 LOAD_FAST                1 (b)
             28 COMPARE_OP               0 (<)
             31 POP_JUMP_IF_FALSE       94

  5          34 LOAD_FAST                2 (add)
             37 LOAD_FAST                0 (a)
             40 LOAD_FAST                1 (b)
             43 CALL_FUNCTION            2 (2 positional, 0 keyword pair)
             46 STORE_FAST               4 (c)

  6          49 SETUP_LOOP              38 (to 90)
             52 LOAD_GLOBAL              3 (range)
             55 LOAD_CONST               3 (4)
             58 LOAD_CONST               4 (6)
             61 CALL_FUNCTION            2 (2 positional, 0 keyword pair)
             64 GET_ITER
        >>   65 FOR_ITER                21 (to 89)
             68 STORE_FAST               5 (i)

  7          71 LOAD_FAST                2 (add)
             74 LOAD_FAST                4 (c)
             77 LOAD_FAST                5 (i)
             80 CALL_FUNCTION            2 (2 positional, 0 keyword pair)
             83 STORE_FAST               4 (c)
             86 JUMP_ABSOLUTE           65
        >>   89 POP_BLOCK

  8     >>   90 LOAD_FAST                4 (c)
             93 RETURN_VALUE

 10     >>   94 LOAD_FAST                3 (sub)
             97 LOAD_FAST                0 (a)
            100 LOAD_FAST                1 (b)
            103 CALL_FUNCTION            2 (2 positional, 0 keyword pair)
            106 RETURN_VALUE
            107 LOAD_CONST               0 (None)
            110 RETURN_VALUE
```
	
>[103-fast_alphabet.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x02-python-import_modules/103-fast_alphabet.py)---> Program that prints the alphabet in uppercase, followed by a new line.
	



## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
> make executable the programs with `chmod +x` followed with .py file and name of executable file.
	
> Run the executable files with `./` followed with the `.py` file



## Builtins
```
	def add(a,b):
	
	def magic_calculation(a, b):
```	
		
## Man page

-  `python3`

## Flowchart
	
- No flowchart

## Resources

**Read or watch**:

[Modules](https://intranet.hbtn.io/rltoken/4SOY6RYv_fYUM-4NNB3Abg)
[Command line arguments](https://intranet.hbtn.io/rltoken/pIjNhhRLMFfHoqcTM7u3_A)
[Pycodestyle – Style Guide for Python Code](https://intranet.hbtn.io/rltoken/ngVTmU2SAH3NW1Z2IGqmLA)
man or help:

python3

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

## 0x12. JavaScript - Warm up
==========================

![Logo](https://www.howtogeek.com/wp-content/uploads/2021/05/laptop-with-terminal-big.png?height=200p&trim=2,2,2,50)

## Background Context

JavaScript is used for many things. Here, you will use JavaScript for 2 reasons:

*   Scripting (same as we did with Python)
*   Web front-end

For the moment, and for learning all basic concepts of this language, we will do some scripting. After, we will make our AirBnB project dynamic by using Javascript and JQuery.

Resources
---------

**Read or watch**:

*   [Writing JavaScript Code](https://intranet.hbtn.io/rltoken/OdMLtl6Y9mpQkaoEqJCRSg "Writing JavaScript Code")
*   [Variables](https://intranet.hbtn.io/rltoken/iE6zaLw7pybp648IfRmk5Q "Variables")
*   [Data Types](https://intranet.hbtn.io/rltoken/4td1BbZAYn4Dldi6k0CY7A "Data Types")
*   [Operators](https://intranet.hbtn.io/rltoken/OdMLtl6Y9mpQkaoEqJCRSg "Operators")
*   [Operator Precedence](https://intranet.hbtn.io/rltoken/ALCoiVRvxmsjdqCUdWC_lg "Operator Precedence")
*   [Controlling Program Flow](https://intranet.hbtn.io/rltoken/Nlfhdy6Thyu_WgtBSqoAUw "Controlling Program Flow")
*   [Functions](https://intranet.hbtn.io/rltoken/Ta66PZ6_16K3q99oELvjkQ "Functions")
*   [Objects and Arrays](https://intranet.hbtn.io/rltoken/osu583B5jskDVwmcm50-NQ "Objects and Arrays")
*   [Intrinsic Objects](https://intranet.hbtn.io/rltoken/osu583B5jskDVwmcm50-NQ "Intrinsic Objects")
*   [Module patterns](https://intranet.hbtn.io/rltoken/mduSK-WOoRe6WohU1p2zZQ "Module patterns")
*   [var, let and const](https://intranet.hbtn.io/rltoken/kNWuHjyUvjr74wU2hBqd_A "var, let and const")
*   [JavaScript Tutorial](https://intranet.hbtn.io/rltoken/qkp1hdLiI8DJje88bxcL6w "JavaScript Tutorial")
*   [Modern JS](https://intranet.hbtn.io/rltoken/ieSajamJQ-Nv3XzcS_d5lA "Modern JS")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/kr1GDINhryJdjBSzQxCv0w "explain to anyone"), **without the help of Google**:

### General

*   Why JavaScript programming is amazing
*   How to run a JavaScript script
*   How to create variables and constants
*   What are differences between `var`, `const` and `let`
*   What are all the data types available in JavaScript
*   How to use the `if`, `if ... else` statements
*   How to use comments
*   How to affect values to variables
*   How to use `while` and `for` loops
*   How to use `break` and `continue` statements
*   What is a function and how do you use functions
*   What does a function that does not use any `return` statement return
*   Scope of variables
*   What are the arithmetic operators and how to use them
*   How to manipulate dictionary
*   How to import a file

More Info
---------

### Install Node 14

```
    $ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
```    
    

### Install semi-standard

[Documentation](https://intranet.hbtn.io/rltoken/FuXjfOYe18hUXCDoyMxBSg "Documentation")

    ```
    $ sudo npm install semistandard --global
    ```
### Dependences

**0. First constant, first print**

Write a script that prints “JavaScript is amazing”:

You must create a constant variable called `MyVar` with the value “JavaScript is amazing”

You must use `console.log(...)` to print all output

You are not allowed to use `var`

```
guillaume@ubuntu:~/0x12$ ./0-javascript_is_amazing.js 
JavaScript is amazing
guillaume@ubuntu:~/0x12$ 
guillaume@ubuntu:~/0x12$ semistandard ./0-javascript_is_amazing.js 
guillaume@ubuntu:~/0x12$ 
```
Repo:

GitHub repository: `holbertonschool-higher_level_programming`

Directory: `0x12-javascript-warm_up`

File: [0-javascript_is_amazing.js]()
## 0x13. JavaScript - Objects, Scopes and Closures
===============================================

![Logo](https://www.howtogeek.com/wp-content/uploads/2021/05/laptop-with-terminal-big.png?height=200p&trim=2,2,2,50)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/wrvgHnS5IYuzEVUUixnzJQ "explain to anyone"), **without the help of Google**:

### General

*   Why JavaScript programming is amazing
*   How to create an object in JavaScript
*   What `this` means
*   What `undefined` means
*   Why the variable type and scope is important
*   What is a closure
*   What is a prototype
*   How to inherit an object from another

## Resources
---------

**Read or watch**:

*   [JavaScript object basics](https://intranet.hbtn.io/rltoken/OJ4pU6uHwfCrAclbZsk_Hg "JavaScript object basics")
*   [Object-oriented JavaScript](https://intranet.hbtn.io/rltoken/vLr7QS9h4-nGFKVn5vsrvQ "Object-oriented JavaScript") (_**read all examples!**_)
*   [Class - ES6](https://intranet.hbtn.io/rltoken/zMWxOmGWEsOCldCKeDswCA "Class - ES6")
*   [super - ES6](https://intranet.hbtn.io/rltoken/DTMKogwFYEgUnpLrNvTcfQ "super - ES6")
*   [extends - ES6](https://intranet.hbtn.io/rltoken/fh2JHfNNa-HLnmfSdOo9TA "extends - ES6")
*   [Object prototypes](https://intranet.hbtn.io/rltoken/lrlwnQMM82RimJJcfLao5w "Object prototypes")
*   [Inheritance in JavaScript](https://intranet.hbtn.io/rltoken/vLr7QS9h4-nGFKVn5vsrvQ "Inheritance in JavaScript")
*   [Closures](https://intranet.hbtn.io/rltoken/qDa7F8060Jlhe3DZZitY4A "Closures")
*   [this/self](https://intranet.hbtn.io/rltoken/ockP7FQKKmTRvfeAHw-XSw "this/self")
*   [Modern JS](https://intranet.hbtn.io/rltoken/22mdHf9KeFhRQrLP-e1hPw "Modern JS")

More Info
---------

### Install Node 14

    $ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    

### Install semi-standard

[Documentation](https://intranet.hbtn.io/rltoken/_6jQeRtew2qeam8OzERXPw "Documentation")

    $ sudo npm install semistandard --global

## Dependences
-----

### 0\. Rectangle #0

Write an empty class `Rectangle` that defines a rectangle:

*   You must use the `class` notation for defining your class

    guillaume@ubuntu:~/0x13$ cat 0-main.js
    #!/usr/bin/node
    const Rectangle = require('./0-rectangle');
    
    const r1 = new Rectangle();
    console.log(r1);
    console.log(r1.constructor);
    
    guillaume@ubuntu:~/0x13$ ./0-main.js
    Rectangle {}
    [Function: Rectangle]
    guillaume@ubuntu:~/0x13$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x13-javascript_objects_scopes_closures`
*   File: [0-rectangle.js](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x13-javascript_objects_scopes_closures/0-rectangle.js)

### 1\. Rectangle #1

Write a class `Rectangle` that defines a rectangle:

*   You must use the `class` notation for defining your class
*   The constructor must take 2 arguments `w` and `h`
*   Initialize the instance attribute `width` with the value of `w`
*   Initialize the instance attribute `height` with the value of `h`

    guillaume@ubuntu:~/0x13$ cat 1-main.js
    #!/usr/bin/node
    const Rectangle = require('./1-rectangle');
    
    const r1 = new Rectangle(2, 3);
    console.log(r1);
    console.log(r1.width);
    console.log(r1.height);
    
    const r2 = new Rectangle(2, -3);
    console.log(r2);
    console.log(r2.width);
    console.log(r2.height);
    
    const r3 = new Rectangle(2);
    console.log(r3);
    console.log(r3.width);
    console.log(r3.height);
    
    guillaume@ubuntu:~/0x13$ ./1-main.js
    Rectangle { width: 2, height: 3 }
    2
    3
    Rectangle { width: 2, height: -3 }
    2
    -3
    Rectangle { width: 2, height: undefined }
    2
    undefined
    guillaume@ubuntu:~/0x13$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x13-javascript_objects_scopes_closures`
*   File: [1-rectangle.js](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x13-javascript_objects_scopes_closures/1-rectangle.js)

### 2\. Rectangle #2

Write a class `Rectangle` that defines a rectangle:

*   You must use the `class` notation for defining your class
*   The constructor must take 2 arguments `w` and `h`
*   Initialize the instance attribute `width` with the value of `w`
*   Initialize the instance attribute `height` with the value of `h`
*   If `w` or `h` is equal to 0 or not a positive integer, create an empty object

    guillaume@ubuntu:~/0x13$ cat 2-main.js
    #!/usr/bin/node
    const Rectangle = require('./2-rectangle');
    
    const r1 = new Rectangle(2, 3);
    console.log(r1);
    console.log(r1.width);
    console.log(r1.height);
    
    const r2 = new Rectangle(2, -3);
    console.log(r2);
    console.log(r2.width);
    console.log(r2.height);
    
    const r3 = new Rectangle(2);
    console.log(r3);
    console.log(r3.width);
    console.log(r3.height);
    
    const r4 = new Rectangle(2, 0);
    console.log(r4);
    console.log(r4.width);
    console.log(r4.height);
    
    guillaume@ubuntu:~/0x13$ ./2-main.js
    Rectangle { width: 2, height: 3 }
    2
    3
    Rectangle {}
    undefined
    undefined
    Rectangle {}
    undefined
    undefined
    Rectangle {}
    undefined
    undefined
    guillaume@ubuntu:~/0x13$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x13-javascript_objects_scopes_closures`
*   File: [2-rectangle.js](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x13-javascript_objects_scopes_closures/2-rectangle.js)

### 3\. Rectangle #3

Write a class `Rectangle` that defines a rectangle:

*   You must use the `class` notation for defining your class
*   The constructor must take 2 arguments: `w` and `h`
*   Initialize the instance attribute `width` with the value of `w`
*   Initialize the instance attribute `height` with the value of `h`
*   If `w` or `h` is equal to 0 or not a positive integer, create an empty object
*   Create an instance method called `print()` that prints the rectangle using the character `X`

    guillaume@ubuntu:~/0x13$ cat 3-main.js
    #!/usr/bin/node
    const Rectangle = require('./3-rectangle');
    
    const r1 = new Rectangle(2, 3);
    r1.print();
    
    const r2 = new Rectangle(10, 5);
    r2.print();
    
    guillaume@ubuntu:~/0x13$ ./3-main.js
    XX
    XX
    XX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    guillaume@ubuntu:~/0x13$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x13-javascript_objects_scopes_closures`
*   File: [3-rectangle.js](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x13-javascript_objects_scopes_closures/3-rectangle.js)
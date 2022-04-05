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
0x11. Python - Network #1
=========================

This project involved learning how to use the urllib and requests Python libraries to send and receive HTTP messages to URL's. I practiced sending GET and POST requests, fetching JSON resources, and interacting with API's (the Star Wars API, GitHub API, and Twitter API).

![Logo](https://www.howtogeek.com/wp-content/uploads/2021/05/laptop-with-terminal-big.png?height=200p&trim=2,2,2,50)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/scJMNMcgdXUMcfHhh2B-Kg "explain to anyone"), **without the help of Google**:

### General

*   How to fetch internet resources with the Python package `urllib`
*   How to decode `urllib` body response
*   How to use the Python package `requests` #requestsiswaysimplerthanurllib
*   How to make HTTP `GET` request
*   How to make HTTP `POST`/`PUT`/etc. request
*   How to fetch JSON resources
*   How to manipulate data from an external service

Resources
---------

**Read or watch**:

*   [Quickstart with Requests package](https://docs.python.org/3/howto/urllib2.html)
*   [Requests package](https://intranet.hbtn.io/rltoken/f6ZTT1E36n9lUGGhdjSjfQ "Requests package")

Tasks
-----

### 0\. What's my status? #0

Write a Python script that fetches `https://intranet.hbtn.io/status`

*   You must use the package `urllib`
*   You are not allowed to import any packages other than `urllib`
*   The body of the response must be displayed like the following example (tabulation before `-`)
*   You must use a `with` statement

    guillaume@ubuntu:~/0x11$ ./0-hbtn_status.py | cat -e
    Body response:$
        - type: <class 'bytes'>$
        - content: b'OK'$
        - utf8 content: OK$
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [0-hbtn_status.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/0-hbtn_status.py)

### 1\. Response header value #0

Write a Python script that takes in a URL, sends a request to the URL and displays the value of the `X-Request-Id` variable found in the header of the response.

*   You must use the packages `urllib` and `sys`
*   You are not allow to import packages other than `urllib` and `sys`
*   The value of this variable is different for each request
*   You don’t need to check arguments passed to the script (number or type)
*   You must use a `with` statement

    guillaume@ubuntu:~/0x11$ ./1-hbtn_header.py https://intranet.hbtn.io
    ade2627e-41dd-4c34-b9d9-a0fa0f47b237
    guillaume@ubuntu:~/0x11$ 
    guillaume@ubuntu:~/0x11$ ./1-hbtn_header.py https://intranet.hbtn.io
    6593e1f5-1b4b-4c9f-9c0e-72ab525b850f
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [1-hbtn_header.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/1-hbtn_header.py)

### 2\. POST an email #0

Write a Python script that takes in a URL and an email, sends a `POST` request to the passed URL with the email as a parameter, and displays the body of the response (decoded in `utf-8`)

*   The email must be sent in the `email` variable
*   You must use the packages `urllib` and `sys`
*   You are not allowed to import packages other than `urllib` and `sys`
*   You don’t need to check arguments passed to the script (number or type)
*   You must use the `with` statement

Please test your script in the sandbox provided, using the web server running on port 5000

    guillaume@ubuntu:~/0x11$ ./2-post_email.py http://0.0.0.0:5000/post_email hr@holbertonschool.com
    Your email is: hr@holbertonschool.com
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [2-post_email.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/2-post_email.py)

### 3\. Error code #0

Write a Python script that takes in a URL, sends a request to the URL and displays the body of the response (decoded in `utf-8`).

*   You have to manage `urllib.error.HTTPError` exceptions and print: `Error code:` followed by the HTTP status code
*   You must use the packages `urllib` and `sys`
*   You are not allowed to import other packages than `urllib` and `sys`
*   You don’t need to check arguments passed to the script (number or type)
*   You must use the `with` statement

Please test your script in the sandbox provided, using the web server running on port 5000

    guillaume@ubuntu:~/0x11$ ./3-error_code.py http://0.0.0.0:5000
    Index
    guillaume@ubuntu:~/0x11$ ./3-error_code.py http://0.0.0.0:5000/status_401
    Error code: 401
    guillaume@ubuntu:~/0x11$ ./3-error_code.py http://0.0.0.0:5000/doesnt_exist
    Error code: 404
    guillaume@ubuntu:~/0x11$ ./3-error_code.py http://0.0.0.0:5000/status_500
    Error code: 500
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [3-error_code.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/3-error_code.py)

### 4\. What's my status? #1

Write a Python script that fetches `https://intranet.hbtn.io/status`

*   You must use the package `requests`
*   You are not allow to import packages other than `requests`
*   The body of the response must be display like the following example (tabulation before `-`)

    guillaume@ubuntu:~/0x11$ ./4-hbtn_status.py | cat -e
    Body response:$
        - type: <class 'str'>$
        - content: OK$
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [4-hbtn_status.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/4-hbtn_status.py)

### 5\. Response header value #1

Write a Python script that takes in a URL, sends a request to the URL and displays the value of the variable `X-Request-Id` in the response header

*   You must use the packages `requests` and `sys`
*   You are not allow to import other packages than `requests` and `sys`
*   The value of this variable is different for each request
*   You don’t need to check script arguments (number and type)

    guillaume@ubuntu:~/0x11$ ./5-hbtn_header.py https://intranet.hbtn.io
    5e52e160-c822-4669-8b3a-8b3bbca7b090
    guillaume@ubuntu:~/0x11$ 
    guillaume@ubuntu:~/0x11$ ./5-hbtn_header.py https://intranet.hbtn.io
    eaceaf35-bc0f-4f74-994a-7be0728ec654
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [5-hbtn_header.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/5-hbtn_header.py)

### 6\. POST an email #1

Write a Python script that takes in a URL and an email address, sends a `POST` request to the passed URL with the email as a parameter, and finally displays the body of the response.

*   The email must be sent in the variable `email`
*   You must use the packages `requests` and `sys`
*   You are not allowed to import packages other than `requests` and `sys`
*   You don’t need to error check arguments passed to the script (number or type)

Please test your script in the sandbox provided, using the web server running on port 5000

    guillaume@ubuntu:~/0x11$ ./6-post_email.py http://0.0.0.0:5000/post_email hr@holbertonschool.com
    Your email is: hr@holbertonschool.com
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [6-post_email.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/6-post_email.py)

### 7\. Error code #1

Write a Python script that takes in a URL, sends a request to the URL and displays the body of the response.

*   If the HTTP status code is greater than or equal to 400, print: `Error code:` followed by the value of the HTTP status code
*   You must use the packages `requests` and `sys`
*   You are not allowed to import packages other than `requests` and `sys`
*   You don’t need to check arguments passed to the script (number or type)

Please test your script in the sandbox provided, using the web server running on port 5000

    guillaume@ubuntu:~/0x11$ ./7-error_code.py http://0.0.0.0:5000
    Index
    guillaume@ubuntu:~/0x11$ ./7-error_code.py http://0.0.0.0:5000/status_401
    Error code: 401
    guillaume@ubuntu:~/0x11$ ./7-error_code.py http://0.0.0.0:5000/doesnt_exist
    Error code: 404
    guillaume@ubuntu:~/0x11$ ./7-error_code.py http://0.0.0.0:5000/status_500
    Error code: 500
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [-error_code.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/7-error_code.py)

### 8\. Search API

Write a Python script that takes in a letter and sends a `POST` request to `http://0.0.0.0:5000/search_user` with the letter as a parameter.

*   The letter must be sent in the variable `q`
*   If no argument is given, set `q=""`
*   If the response body is properly JSON formatted and not empty, display the `id` and `name` like this: `[<id>] <name>`
*   Otherwise:
    *   Display `Not a valid JSON` if the JSON is invalid
    *   Display `No result` if the JSON is empty
*   You must use the package `requests` and `sys`
*   You are not allowed to import packages other than `requests` and `sys`

Please test your script in the sandbox provided, using the web server running on port 5000. All JSON generated by this server are random.

    guillaume@ubuntu:~/0x11$ ./8-json_api.py 
    No result
    guillaume@ubuntu:~/0x11$ ./8-json_api.py a
    [8446] amnirqhtfjq
    guillaume@ubuntu:~/0x11$ ./8-json_api.py 2
    No result
    guillaume@ubuntu:~/0x11$ ./8-json_api.py b
    [7094] bmofakakhke
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [8-json_api.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/8-json_api.py)

### 9\. My GitHub!

Write a Python script that takes your GitHub credentials (username and password) and uses the [GitHub API](https://intranet.hbtn.io/rltoken/nfP7CAlUF9OKb75dlt5h6g "GitHub API") to display your `id`

*   You must use [Basic Authentication](https://intranet.hbtn.io/rltoken/pI9QoN5kMFFUOQoUNeIEKg "Basic Authentication") with a [personal access token as password](https://intranet.hbtn.io/rltoken/Ml4Pw0hNNv2IVGCylfNjAQ "personal access token as password") to access to your information (only `read:user` permission is needed)
*   The first argument will be your `username`
*   The second argument will be your `password` (in your case, a [personal access token as password](https://intranet.hbtn.io/rltoken/Ml4Pw0hNNv2IVGCylfNjAQ "personal access token as password"))
*   You must use the package `requests` and `sys`
*   You are not allowed to import packages other than `requests` and `sys`
*   You don’t need to check arguments passed to the script (number or type)

    guillaume@ubuntu:~/0x11$ ./10-my_github.py papamuziko cisfun
    2531536
    guillaume@ubuntu:~/0x11$ ./10-my_github.py papamuziko wrong_pwd
    None
    guillaume@ubuntu:~/0x11$ 
    

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [10-my_github.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/10-my_github.py)

### 10\. Time for an interview!



The Holberton School staff evaluates candidates applying for a back-end position with multiple technical challenges, like this one:

    Please list 10 commits (from the most recent to oldest) of the repository “rails” by the user “rails”
    You must use the GitHub API, here is the documentation https://developer.github.com/v3/repos/commits/
    Print all commits by: `<sha>: <author name>` (one by line)
    

Write a Python script that takes 2 arguments in order to solve this challenge.

*   The first argument will be the `repository name`
*   The second argument will be the `owner name`
*   You must use the packages `requests` and `sys`
*   You are not allowed to import packages other than `requests` and `sys`
*   You don’t need to check arguments passed to the script (number or type)

Only 17% of applicants for a backend position at Holberton finished this task in less than 15 minutes.

    guillaume@ubuntu:~/0x11$ ./100-github_commits.py rails rails
    3b5a6dfb18f33c373a89760c60d741f34206f23b: Jon Moss
    f785ad786ae49dd6f7a2f1d77c44ea17008c6656: Jon Moss
    bb13c37fefdc8b5699918b38eff84751c2899ad5: Rafael França
    f5d880866917724217eae9785a3ccd3f806c5aaf: Rafael França
    0da696a5e3cee87a996a020b664caa1eabd66220: Ryuta Kamizono
    24eb450d7599bab1f5863e0578a21c65ca42a915: Matthew Draper
    668f8691f1017042e238497d1a5b7b8bf1c43819: Matthew Draper
    a76f5189f6cec4b3e6d9035e2b55dcda6050dfdb: Ryuta Kamizono
    28079868d0e70bdac80c76cf806afd517edfe1e7: Rafael França
    8f0d8551893789f26e5d6b82ccef00779296818f: Rafael Mendonça França
    guillaume@ubuntu:~/0x11$ 
    

**Be careful: only 60 requests by hour by IP for unauthenticated requests [Rate limit](https://intranet.hbtn.io/rltoken/4mKscM6-nW9aiikSuS75Nw "Rate limit")**

**Repo:**

*   GitHub repository: `holbertonschool-higher_level_programming`
*   Directory: `0x11-python-network_1`
*   File: [100-github_commits.py](https://github.com/Imanolasolo/holbertonschool-higher_level_programming/blob/master/0x11-python-network_1/100-github_commits.py)

## Installing, compiling and using
	
> Only install cloning this repository on your local device:  https://github.com/Imanolasolo/holbertonschool-higher_level_programming.git
	
> make executable the programs with `chmod +x` followed with .py file and name of executable file.

> Run the different tasks or dependences.

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

This ia a repo for my lab 5 work

This code was made by cloning the repo shown in class.

https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/

It made it so we can make the client and server run at the same time.

Also Adina from our class was very helpful in helping me to figure out how to connect to the backend.

There are still some bugs and room for improvement but the basic functionality works

The sourcecode is available here in the repo.

The .gitignore file will ignore the node modules

Also there is a file here called Storyboard.md

It contains the storyboard design choices of the website

---


## dependencies
Axios, yarn, cors, express, sqlite3, react, react0dom, react-router-dom, http-proxy-middleware and body-parser

These dependencies seem to need to be installed in both the root folder and the client folder 

It is also possible that not all of these are needed as I did add modules to try and fix various problems.

---

# running the code

After cloning the repo and installing the dependencies to run the front end you need to type
` yarn dev `

in the root directory

Then the backend and frontend will start to run

A tab should open up automatically to the website but if it does not you can use

` http://localhost:3000  ` 

To get to the front end

There you can try out the functionality of the website

---

# Home

The first page is just a home page that does nothing

you should use the nav bar to navigate to another page

# Register

the register page lets you enter in info about a car 

I only allowed the user to enter what I considered to be relevant

# Update

The update page lets the user enter in a car id as well as the score and rank that the car should have

# Search

This page lets you see the whole database and search for certain cars

to see only one car enter that car's specific ID

---

The website was created by using multiple react web pages and by using a component to make the nav bar and the various actions with the backend.

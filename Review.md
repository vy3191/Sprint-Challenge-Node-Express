# Review Questions

## What is Node.js?
Node.js is Javascript runtime environment out side of the browser(..on the server side).
## What is Express?
Express is web application framework for node.js and also it is node.js module that sits on top of node.js https module and adds extra functionality.

## Mention two parts of Express that you learned about this week.
1) CRUD operations 2) Routing
## What is Middleware?
Middleware is an extra layer of tools which allows the developers to extend, modify, customize, add extra functionality to the express. Before the data goes to request object, middleware process it and modify the data according to the client needs. Middleware is of three types 1)Built-in, 2)Third-party middleware , and 3) Custom middleware
## What is a Resource?
Resources are different types of requests and function calls that are used in Express.js. These Resources allows the client to send and receive the data.

## What can the API return to help clients know if a request was successful?
API can return a 200 status. such as 201 - Created. 
## How can we partition our application into sub-applications?
We can partition our application by writing the different modules for different types of functionality.

## What is express.json() and why do we need it?
It is a build-in Middleware which parses the data into JSON and which is eventually sent to the client through response object.

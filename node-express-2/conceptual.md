### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
Json Web Token
JWTs are an open standard and are implemented across technology stacks, making it simple to share tokens across different services.

JWTs can store any arbitrary “payload” of info, which are “signed” using a secret key, so they can be validated later (similar to Flask’s session).

The JWT token itself is a string comprising three parts:

Header: metadata about token (signing algorithm used & type of token)
Payload: data to be stored in token (typically an object)
Often, this will store things like the user ID
This is encoded, not encrypted 
Signature: version of header & payload, signed with secret key
Uses algorithm specified in header (we’ll use default, “HMAC-SHA256”)

Token:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyNzIxOTF9.1f9d7mICkHSa3frfsed623Rpk0d985e5-Ss_T4bQhWc

The first portion before period
Header: {
  "alg": "HS256",
  "typ": "JWT"
}
Payload ( data ) 2nd portion before .
{
  "username": "rs",
  "admin": false,
  "iat": 1653272191
}

Signature:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  development-secret-key

) secret base 64 encoded.



- What is the signature portion of the JWT?  What does it do?
Hashed header & payload, signed with secret key.
It is used to verify the identity of the sender, in our case server.

- If a JWT is intercepted, can the attacker see what's inside the payload?
If is signed with secret key you cannot see the payload. You need to verify the token
with secret key to see the payload.


- How can you implement authentication with a JWT?  Describe how it works at a high level.
const jwt = require("jsonwebtoken");

const SECRET_KEY = "oh-so-secret";
const JWT_OPTIONS = { expiresIn: 60 * 60 };  // 1 hour

let payload = {username: "jane"};
let token = jwt.sign(payload, SECRET_KEY, JWT_OPTIONS);

jwt.decode(token);               // {username: "jane"}

jwt.verify(token, SECRET_KEY);   // {username: "jane"}

jwt.verify(token, "WRONG");      // error!

For our Express API apps, 
Make request with username/password to AJAX login route
Server authenticates & returns token in JSON
Token is encoded & signed with open standard, “JSON Web Token”
Front-end JavaScript receives token & stores (in var or localStorage)
For every future request, browser sends token in request
Server gets token from request & validates token


- Compare and contrast unit, integration and end-to-end tests.
Unit Tests: Unit tests are the easiest tests to write because you can expect specific results for your input. There are no dependencies or complex interactions.

Integration Tests: Integration tests are more complex than unit tests because you have to deal with dependencies.

End-To-End: End-to-end tests simulate a specific user interaction flow with your app. For example, clicking or entering text.


- What is a mock? What are some things you would mock?


Mocking
When testing, you will commonly hear the term “mocking.”

Mocking is primarily used in unit testing
An object under test may have dependencies on other (complex) objects
To isolate the behavior, you replace other objects by mocks that simulate their behavior
This is useful if the real objects are impractical to incorporate into the unit test.
An object under test may have dependencies on other (complex) objects
To isolate the behavior, you replace other objects by mocks that simulate their behavior
This is useful if the real objects are impractical to incorporate into the unit test.
Advantages of mocking
It can be faster.
You don’t have to wait for an API response
You don’t have to deal with rate limits.
It makes your tests ‘pure’. Whether they fail or pass depends only on your code, not on anything externally built.

What kinds of things can you mock?
AJAX requests
Reading/Writing to files
Impure functions like Math.random


- What is continuous integration?
Continuous integration (CI) is a software development strategy that increases the speed of development while ensuring the quality of the code that teams deploy. Developers continually commit code in small increments (at least daily, or even several times a day), which is then automatically built and tested before it is merged with the shared repository.

- What is an environment variable and what are they used for?
An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.
example db name or file name can be set through env variables.
During application initialization, these are loaded into process.env and accessed by suffixing the name of the environment variable as shown below.

- What is TDD? What are some benefits and drawbacks?
TDD (Test Driven Development) 
Tests are written before the code.

TDD (Test Driven Development) tests are written to ensure that functionality is being executed correctly; however, as the code evolves, tests can produce incorrect results. BDD (Behavior Driven Development) is a test-first methodology that tests the true behavior of the framework from the end user's perspective.

Advantages: The requirement of writing tests before code, means the specification for any particular unit needs to be fixed before the code is written. Therefore the requirements of the software as a whole will be confirmed as the software is developed.

Disadvantages of TDD
Ideally a whole company or organisation needs to support the implementation of TDD in order for it to succeed. Writing tests before writing code means that we need to know the requirements of the software and the specification of the code before starting to code the solution.

- What is the value of using JSONSchema for validation?
JSON Schema is a powerful tool for validating the structure of JSON data.
This is useful tool as we can easily catch bad input json data sent through request.

- What are some ways to decide which code to test?
Not necessary to check every line of code. But test on things that tend to break
Make sure you covered all the edge cases.


- What does `RETURNING` do in SQL? When would you use it?
The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING, you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns. So, RETURNING helps avoid another roundtrip to the database, another context switch in a PL/SQL block.

- What are some differences between Web Sockets and HTTP?
Differences between HTTP and WebSocket Connection: 
 

WebSocket Connection	HTTP Connection

WebSocket
WebSocket is a bidirectional communication protocol that can send the data from the client to the server or from the server to the client by reusing the established connection channel. The connection is kept alive until terminated by either the client or the server.	

It starts from ws:// or wss://. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). After closing the connection by either of the client and server, the connection is terminated from both ends. 
Almost all the real-time applications like (trading, monitoring, notification) services use WebSocket to receive the data on a single communication channel.	
All the frequently updated applications used WebSocket because it is faster than HTTP Connection.

Http:
The HTTP protocol is a unidirectional protocol that works on top of TCP protocol which is a connection-oriented transport layer protocol, we can create the connection by using HTTP request methods after getting the response HTTP connection get closed.

Simple RESTful application uses HTTP protocol which is stateless.
When we do not want to retain a connection for a particular amount of time or reuse the connection for transmitting data; An HTTP connection is slower than WebSockets.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

What is ExpressJS?

Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.

ExpressJS and Flask are two very popular frameworks, and sometimes deciding which to use can be particularly challenging—especially if you’re a beginner and wondering where to start. This post will help the beginner decide which framework is right for them.

What is a web framework?
A web framework is a component designed to support the development of web applications. Essentially, it is a tool representing a collection of libraries and modules that provide a web app developer with the necessary resources to easily develop web applications.

What is Flask?
Flask is a Python web microframework, officially launched in 2010 as an open source web development framework. Flask is designed to allow developers to build anything they want, from a blog to a commercial website. To get started with Flask, click here.

What is Express?
Express is a minimal and flexible Node.js web framework providing the core resources and tools required to build web applications. Using Express, you can easily build web servers that are maintainable, readable and flexible. To get started with Express, click here.

Advantages of Flask
Python framework: Python is considered an easier language to learn compared to other popular languages, so Flask could be a better beginning option.

Great documentation: The official documentation is very thorough, providing lots of details with well-written examples and clear tutorials.

Lots of resources available: Flask is arguably one of Python’s most popular web frameworks, with plenty of tutorials and libraries available to add to your apps.

Minimalistic: Flask is a lightweight framework with few dependencies. It takes just a few lines of Python to load Flask, and because it is modular, you can restrict the dependencies to suit your needs.

Simplicity: As a minimalistic framework, Flask provides the necessary tools to easily and quickly build a web app prototype after installation.

Easy Database Integration: Integration with database toolkits like SQLAlchemy, SQL databases like SQLite and MySQL, and NoSQL databases like DynamoDB and MongoDB is relatively easy.

Flexibility: Flask provides developers generous flexibility for developing their web applications.

Disadvantages of Flask
Flask is not async-friendly, as it was not designed to handle asynchronous programming. This is a problem because as a single-threaded framework, its web server can only handle one request at a time.

Thread locals and global variables used everywhere: The default way of creating applications with Flask makes applying reusable code difficult.

Setting up a large project: Setting up a large project with Flask is not easy. Blueprints are a useful tool to help developers, but they require some additional reading and may be a bit tricky for beginners.

Advantages of Express
JavaScript: JavaScript is an expressive language, and it is currently one of the most popular languages (if not the most popular).

Node framework: Node.js is an extremely fast framework built on Chrome’s V8 JavaScript engine. It is single-threaded, asynchronous and event-driven.

Easy to learn: Once you have a basic understanding of Node.js, you can move to Express. You will be creating express applications in no time.

Support for lots of plugins: Express takes advantage of NPM (Node Package Manager) to distribute and install countless third-party plugins, making it very easy to achieve what you want with Express.

Largest user base: Express is by far the most popular Node.js framework.

Minimalistic: Express is a lightweight, flexible framework with few dependencies. Express can be installed using a single line.

Great routing API: Express’ extremely powerful routing API allows developers to build routes for web apps, to use route parameters and query strings, and build a REST API.

Massive ecosystem of middleware: Express provides developers with various types of middleware, including application-level, router-level, error-handling, built-in, and third-party.

Disadvantages of Express
There are no strict standards with Express. Express considers itself to be a minimalistic, unopinionated framework—meaning it gives the developer the freedom to determine how their project will be organized. While it provides the flexibility and power to use multiple libraries and organize a project to your liking, the fact that there is no single recommended way of doing things can be a trap, especially if you’re a beginner.

Final thoughts
Flask and Express are two popular frameworks. The language you are most comfortable with may influence which one you choose, but I recommend you try out both frameworks. I guarantee there is a lot to gain from both.



  [README.md](https://github.com/user-attachments/files/21596854/README.md)

# Basic User Registeration And Display Users (Admin Access Only) API

This is a Basic Backend API which can be implemented in any MERN Stack Project, It includes APIs for Registering User, Log in the User and Fetch List of Registered Users (Admin Only).

## How Admin Only Access Works
On Login, Backend generates a json web token which has details about the user type.
On requesting users list, the token is sent along with the request.
This token is received by the backend which decodes the token and check the user type, If the user type is admin the request is accepted and a list of Users as a response is sent.

The client receives list of Users as a JSON object.

## Tech Stack

**Server:** Node, Express, MongoDB, JWT (Authentication).



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`: Store the Mongo DB Connection String in this variable.

`SECRET_KEY`: Store your secret key for JWT authentication in this variable.

`PORT`: Store your Port Number here, For Local Development.


## Setup

Following packages are necessary to run the server file-> 

    1. jsonwebtoken
    2. bcrypt
    3. dotenv
    4. mongoose
    5. express

Or just run the following command in your root directory->

#### npm install jsonwebtoken bcrypt dotenv mongoose express

optional-> 

#### npm i nodemon 

## Run command

From your root directory use the following command-> 

#### node server.js or nodemon server.js (If using nodemon).

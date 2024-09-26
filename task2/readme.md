# README - User Authentication with JWT

## Project Overview

This project demonstrates how to implement user authentication in a Node.js application using **JSON Web Tokens (JWT)**. The goal is to allow users to register, log in, and receive a JWT upon successful authentication. The JWT is then used to protect specific routes, allowing access only to authenticated users.

### Features:

- **User Registration**: Create a new user with email and password.
- **User Login**: Authenticate a user and return a JWT upon successful login.
- **JWT Protection**: Protect certain routes (e.g., `/profile`, `/settings`) by validating the JWT.
- **Password Hashing**: Securely hash passwords before storing them in the database using **bcrypt**.
- **Token-Based Authentication**: Use JWT for stateless authentication.

## Prerequisites

Make sure you have the following installed before you proceed:

- **Node.js**: Ensure that Node.js is installed on your system.
- **MongoDB**: The project uses MongoDB as the database to store user data.

## Installation & Setup

1. **Clone the repository**:

   git clone <repository-url>

2. **Navigate to the project directory**:

   cd <project-directory>

3. **Install dependencies**:

   Ensure that you have the necessary dependencies installed. Run the following command to install them:

   npm install

4. **Configure environment variables**:

   In the project root, create a `.env` file and add the following environment variables:

   PORT=3000
   MONGODB_URL= <enter your mongodb url>
   JWT_SECRET_KEY= <enter your jwt secret key>
   JWT_EXPIRE= <enter your jwt expire time>


## Running the Project

1. **Start the server**:

   After completing the setup, run the application using the following command:

   npm start

2. **Server Output**:

   Once the server is running, you should see a message indicating that it’s listening on the specified port:

   Server is running on port 3000
   MongoDB connected successfully

## Conclusion

This project implements a simple user authentication system using **JWT** in a Node.js application. Users can register, log in, and access protected routes with a valid JWT. The authentication flow is designed to be stateless, secure, and easy to scale. You can further extend this system by adding features like password reset, token refresh, and user roles.

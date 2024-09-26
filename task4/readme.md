# README - Node.js CRUD Operations with MongoDB

## Project Overview

This project is a simple Node.js application that demonstrates how to integrate a MongoDB database using **Mongoose**. The project sets up a basic CRUD (Create, Read, Update, Delete) functionality for a sample entity. MongoDB is used as the database, and we use Mongoose for object modeling and interactions with MongoDB.

### Features:
- Connect to a MongoDB database.
- Define a Mongoose schema and model for users.
- Implement basic CRUD operations:
  - Create a user.
  - Retrieve all users or a specific user.
  - Update a user by ID.
  - Delete a user by ID.

## Prerequisites

Make sure you have the following installed before you proceed:

- **Node.js**: Ensure that Node.js is installed on your system.
- **MongoDB Atlas Account**: The project connects to MongoDB Atlas, a cloud-based MongoDB service. You should have an active MongoDB Atlas account and cluster set up.

## Installation & Setup

1. **Clone the repository**:

   git clone <repository-url>

2. **Navigate to the project directory**:

   cd <project-directory>

3. **Install dependencies**:

   npm install

4. **Configure environment variables**:

   In the project root, create a `.env` file and add the following environment variables:

   PORT=3000
   MONGODB_URL= ""

   - Replace the `MONGODB_URL` with your MongoDB Atlas connection string if necessary.
   - The `PORT` can be modified based on your requirements.

## Running the Project

1. **Start the server**:

   After completing the setup, run the application using the following command:

   npm start

2. **Server Output**:

   Once the server is running, you should see a message indicating that it’s connected to MongoDB and listening on the specified port:

   ```
   Server is running on port 3000
   MongoDB connected successfully
   ```

## Conclusion

This Node.js project demonstrates how to set up a basic CRUD API integrated with MongoDB using Mongoose. You can extend it by adding more features like authentication, pagination, etc. This project can be used as a starting point for more complex applications involving database interactions.



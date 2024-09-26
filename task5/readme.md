# README - Real-time Notifications with WebSockets (Socket.IO)

## Project Overview

This project demonstrates how to implement real-time notifications using **WebSockets** with the help of **Socket.IO** in a Node.js environment. The goal is to set up a WebSocket server that allows clients to connect and receive real-time notifications whenever a specific event occurs.

### Features:

- Set up a WebSocket server using **Socket.IO**.
- Create a connection endpoint for clients to subscribe to real-time updates.
- Broadcast real-time notifications to all connected clients when a new event (e.g., a new message) occurs.

## Prerequisites

Make sure you have the following installed before you proceed:

- **Node.js**: Ensure that Node.js is installed on your system.
- **Socket.IO Client**: Clients that want to connect to the WebSocket server must use **Socket.IO Client** in their frontend code.

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

   The `PORT` can be modified based on your requirements.

## Running the Project

1. **Start the server**:

   After completing the setup, run the application using the following command:

   npm start

2. **Server Output**:

   Once the server is running, you should see a message indicating that it’s listening on the specified port:

   Server is running on port 3000

## Conclusion

This project shows how to implement real-time notifications using **WebSockets** with **Socket.IO**. Clients can connect to the WebSocket server and receive live updates when certain events (like a new message being posted) occur. This project can serve as a foundation for adding real-time features to your web application, such as notifications, live chat, or activity tracking.

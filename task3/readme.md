# README - Fetch Data from External API with Caching

## Project Overview

This project demonstrates how to fetch data from an external API and implement caching to optimize performance. The goal is to reduce the number of requests made to the external API by caching the responses for a specific duration. If cached data is available and valid, it is served to the client; otherwise, new data is fetched from the API and stored in the cache.

For the caching mechanism, this project uses **Redis** or an **in-memory cache** (depending on your preference). Redis is a popular, high-performance in-memory data structure store that is often used as a cache.

### Features:

- Fetch data from an external API (e.g., weather data).
- Cache API responses for 10 minutes using Redis or in-memory caching.
- Serve cached data if available; otherwise, fetch new data from the API and update the cache.

## Prerequisites

Make sure you have the following installed before you proceed:

- **Node.js**: Ensure that Node.js is installed on your system.
- **Redis**: If using Redis for caching, set up the redis in cloud.

---

## Installation & Setup

1. **Clone the repository**:

   git clone <repository-url>

2. **Navigate to the project directory**:

   cd <project-directory>

3. **Install dependencies**:

   npm install

4) **Configure environment variables**:

   In the project root, create a `.env` file and add the following environment variables:

   PORT=3000
   API_KEY= <enter your wether api key>
   REDIS_PORT= <enter redis port>
   REDIS_PASSWORD= <enter redis password>
   REDIS_HOST= <enter redis host>

## Running the Project

1. **Start the server**:

   After completing the setup, run the application using the following command:

   npm start

2. **Server Output**:

   Once the server is running, you should see a message indicating that it’s listening on the specified port:

   Server is running on port 3000

## Conclusion

This project demonstrates how to fetch data from an external API and implement caching using either Redis or in-memory caching. By caching the responses for a specific duration (e.g., 10 minutes), the number of requests to the external API is reduced, leading to improved performance and reduced latency. This setup is ideal for applications where data doesn't change frequently and can be cached for a short period.

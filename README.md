
# Sports Facility Booking Platform Backend

Welcome to the Sports Facility Booking Platform Backend! This backend service provides a robust and scalable solution for managing sports facility bookings. With a powerful set of APIs and features, it simplifies the process of booking sports facilities for users while offering seamless management capabilities for administrators.

## Features

- **User Management**: Allow users to sign up, log in, and manage their accounts.
- **Facility Management**: Enable admins to add, update, delete, and view sports facilities.
- **Booking Management**: Allow users to create, view, and cancel bookings for sports facilities.
- **Availability Check**: Provide an endpoint to check the availability of time slots for booking on specific dates.
- **Error Handling**: Implement robust error handling middleware for consistent and informative error responses.
- **Authentication & Authorization**: Secure API endpoints with JWT-based authentication and role-based authorization.
- **Zod Validation**: Ensure data consistency and integrity with input validation using Zod.

## Technology Stack

- **TypeScript**: A statically typed superset of JavaScript, providing improved code quality and maintainability.
- **Express.js**: A fast, unopinionated, and minimalist web framework for Node.js, ideal for building RESTful APIs.
- **Mongoose**: An elegant MongoDB object modeling tool designed to work in an asynchronous environment, simplifying interactions with MongoDB.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties, used for user authentication.
- **Zod**: A TypeScript-first schema declaration and validation library, ensuring data consistency and preventing runtime errors.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nasimrifat101/Assignment-3.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Assignment-3
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables to the `.env` file:

   ```plaintext
   PORT=3000
   MONGODB_URI=<mongodb-uri>
   JWT_SECRET=<jwt-secret>
   ```

### Running the Application

Start the server:

```bash
npm run start:dev
```

The server will start running at `http://localhost:5000`.

## API Endpoints


1. **Sign Up**
   - **Route:** `POST /api/auth/signup`

2. **Login**
   - **Route:** `POST /api/auth/login`

3. **Create a Facility (Admin Only)**
   - **Route:** `POST /api/facility`

4. **Update a Facility (Admin Only)**
   - **Route:** `PUT /api/facility/:id`

5. **Delete a Facility - Soft Delete (Admin Only)**
   - **Route:** `DELETE /api/facility/:id`

6. **Get All Facilities**
   - **Route:** `GET /api/facility`

7. **Check Availability**
   - **Route:** `GET /api/check-availability`

8. **Create a Booking (User Only)**
   - **Route:** `POST /api/bookings`

9. **View All Bookings (Admin Only)**
   - **Route:** `GET /api/bookings`

10. **View Bookings by User (User Only)**
    - **Route:** `GET /api/bookings/user`

11. **Cancel a Booking (User Only)**
    - **Route:** `DELETE /api/bookings/:id`

## API Endpoints Detailed
### User Routes

- **User Sign Up**
  - Route: `POST /api/auth/signup`
  - Request Body: 
    ```json
    {
      "name": "Programming Hero",
      "email": "web@programming-hero.com",
      "password": "programming-hero",
      "phone": "01322901105",
      "role": "admin",
      "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "User registered successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c4",
        "name": "Programming Hero",
        "email": "web@programming-hero.com",
        "role": "admin",
        "phone": "01322901105",
        "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
      }
    }
    ```
- **User Login**
  - Route: `POST /api/auth/login`
  - Request Body:
    ```json
    {
      "email": "web@programming-hero.com",
      "password": "programming-hero"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "User logged in successfully",
      "token": "JWT_TOKEN",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c4",
        "name": "Programming Hero",
        "email": "web@programming-hero.com",
        "role": "admin",
        "phone": "01322901105",
        "address": "Level-4, 34, Awal Centre, Banani, Dhaka"
      }
    }
    ```
- **Create a Facility (Admin Only)**
  - Route: `POST /api/facility`
  - Headers: 
    ```
    Authorization: Bearer JWT_TOKEN
    ```
  - Request Body:
    ```json
    {
      "name": "Tennis Court",
      "description": "Outdoor tennis court with synthetic surface.",
      "pricePerHour": 30,
      "location": "456 Sports Ave, Springfield"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Facility added successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Tennis Court",
        "description": "Outdoor tennis court with synthetic surface.",
        "pricePerHour": 30,
        "location": "456 Sports Ave, Springfield",
        "isDeleted": false
      }
    }
    ```


- **Update a Facility (Admin Only)**
  - Route: `PUT /api/facility/:id`
  - Headers:
    ```
    Authorization: Bearer JWT_TOKEN
    ```
  - Request Body:
    ```json
    {
      "name": "Updated Tennis Court",
      "description": "Updated outdoor tennis court with synthetic surface.",
      "pricePerHour": 35,
      "location": "789 Sports Ave, Springfield"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Facility updated successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Updated Tennis Court",
        "description": "Updated outdoor tennis court with synthetic surface.",
        "pricePerHour": 35,
        "location": "789 Sports Ave, Springfield",
        "isDeleted": false
      }
    }
    ```
- **Delete a Facility - Soft Delete (Admin Only)**
  - Route: `DELETE /api/facility/:id`
  - Headers:
    ```
    Authorization: Bearer JWT_TOKEN
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Facility deleted successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c5",
        "name": "Updated Tennis Court",
        "description": "Updated outdoor tennis court with synthetic surface.",
        "pricePerHour": 35,
        "location": "789 Sports Ave, Springfield",
        "isDeleted": true
      }
    }
    ```
- **Get All Facilities**
  - Route: `GET /api/facility`
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Facilities retrieved successfully",
      "data": [
        {
          "_id": "60d9c4e4f3b4b544b8b8d1c5",
          "name": "Tennis Court",
          "description": "Outdoor tennis court with synthetic surface.",
          "pricePerHour": 30,
          "location": "456 Sports Ave, Springfield",
          "isDeleted": false
        }
      ]
    }
    ```
- **Check Availability**
  - Route: `GET /api/check-availability`
  - Query Parameters:
    - date (string, optional): The date for which availability is to be checked. Format: YYYY-MM-DD. If not provided, today's date will be used by default.
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Availability checked successfully",
      "data": [
        {
          "startTime": "08:00",
          "endTime": "10:00"
        },
        {
          "startTime": "14:00",
          "endTime": "16:00"
        }
      ]
    }
    ```



- **Create a Booking (User Only)**
  - Route: `POST /api/bookings`
  - Headers:
    ```
    Authorization: Bearer JWT_TOKEN
    ```
  - Request Body:
    ```json
    {
      "facility": "60d9c4e4f3b4b544b8b8d1c5",
      "date": "2024-06-15",
      "startTime": "10:00",
      "endTime": "13:00"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Booking created successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c6",
        "facility": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "10:00",
        "endTime": "13:00",
        "user": "60d9c4e4f3b4b544b8b8d1c4",
        "payableAmount": 90,
        "isBooked": "confirmed"
      }
    }
    ```
- **View All Bookings (Admin Only)**
  - Route: `GET /api/bookings`
  - Headers:
    ```
    Authorization: Bearer JWT_TOKEN
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Bookings retrieved successfully",
      "data": [
        {
          "_id": "60d9c4e4f3b4b544b8b8d1c6",
          "facility": {
            "_id": "60d9c4e4f3b4b544b8b8d1c5",
            "name": "Tennis Court",
            "description": "Outdoor tennis court with professional-grade surface.",
            "pricePerHour": 30,
            "location": "123 Main Street",
            "isDeleted": false
          },
          "date": "2024-06-15",
          "startTime": "10:00",
          "endTime": "13:00",
          "user": {
            "_id": "60d9c4e4f3b4b544b8b8d1c4",
            "name": "Programming Hero",
            "email": "programming.hero@example.com",
            "phone": "+1234567890",
            "role": "user",
            "address": "456 Elm Street"
          },
          "payableAmount": 90,
          "isBooked": " confirmed"
        }
      ]
    }
    ```
- **View Bookings by User (User Only)**
  - Route: `GET /api/bookings/user`
  - Headers:
    ```
    Authorization: Bearer JWT_TOKEN
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Bookings retrieved successfully",
      "data": [
        {
          "_id": "60d9c4e4f3b4b544b8b8d1c6",
          "facility": {
            "_id": "60d9c4e4f3b4b544b8b8d1c5",
            "name": "Tennis Court",
            "description": "Outdoor tennis court with professional-grade surface.",
            "pricePerHour": 30,
            "location": "123 Main Street",
            "isDeleted": false
          },
          "date": "2024-06-15",
          "startTime": "10:00",
          "endTime": "13:00",
          "user": "60d9c4e4f3b4b544b8b8d1c4",
          "payableAmount": 90,
          "isBooked": " confirmed"
        }
      ]
    }
    ```
- **Cancel a Booking (User Only)**
  - Route: `DELETE /api/bookings/:id`
  - Headers:
    ```
    Authorization: Bearer JWT_TOKEN
    ```
  - Response:
    ```json
    {
      "success": true,
      "statusCode": 200,
      "message": "Booking cancelled successfully",
      "data": {
        "_id": "60d9c4e4f3b4b544b8b8d1c6",
        "facility": {
          "_id": "60d9c4e4f3b4b544b8b8d1c5",
          "name": "Tennis Court",
          "description": "Outdoor tennis court with professional-grade surface.",
          "pricePerHour": 30,
          "location": "123 Main Street",
          "isDeleted": false
        },
        "date": "2024-06-15",
        "startTime": "10:00",
        "endTime": "13:00",
        "user": "60d9c4e4f3b4b544b8b8d1c4",
        "payableAmount": 90,
        "isBooked": "cancelled"
      }
    }
    ```

### Bonus Features

1. **No Data Found Response:**
   - When retrieving data, if the database collection is empty or no matching data is found, the API returns the following response:
     ```json
     {
       "success": false,
       "statusCode": 404,
       "message": "No Data Found",
       "data": []
     }
     ```

2. **Error Handling:**
   - Proper error handling is implemented throughout the application. Global error handling middleware catches and handles errors, providing appropriate error responses with error messages. Error responses include the following properties:
     - `success`: Indicates whether the request was successful (`false` for errors).
     - `message`: Describes the type of error encountered (e.g., Validation Error, Cast Error, Duplicate Entry).
     - `errorMessages`: An array containing detailed error messages specifying the erroneous fields and reasons.
     - `stack`: Error stack trace for debugging purposes.
   - **Sample Error Response:**
     ```json
     {
       "success": false,
       "message": "E11000 duplicate key error collection: univerity-management.students index: email_1 dup key: { email: \"user2@gmail.com\" }",
       "errorMessages": [
           {
               "path": "",
               "message": "E11000 duplicate key error collection: project index: email_1 dup key: { email: \"user2@gmail.com\" }"
           }
       ],
       "stack": "MongoServerError: E11000 duplicate key error collection: project index: email_1 dup key: { email: \"user2@gmail.com\" }\n    at H:\\next-level-development\\project-management-auth-service\\node_modules\\mongodb\\src\\operations\\insert.ts:85:25\n    at H:\\next-level-development\\university-management-auth-service\\node_modules\\mongodb\\src\\cmap\\connection_pool.ts:574:11\n    at H:\\next-level-development\\university-writeOrBuffer (node:internal/streams/writable:391:12)"
     }
     ```

3. **Not Found Route:**
   - A global "Not Found" handler is implemented for unmatched routes. When a route is not found, the API responds with a generic message:
     ```json
     {
       "success": false,
       "statusCode": 404,
       "message": "Not Found"
     }
     ```

4. **Authentication Middleware:**
   - An Authentication Middleware is implemented to authenticate the application. It ensures that only users and admins can access their own accessible routes.
     ```json
     {
       "success": false,
       "statusCode": 401,
       "message": "You have no access to this route"
     }
     ```

5. **Zod Validation:**
   - The API employs Zod for input validation to ensure data consistency. When validation fails, a `400 Bad Request` status code is returned, accompanied by detailed error messages specifying the erroneous fields and reasons.

---
### Note
- I have run into several problems with Git while working on this project due to issues with my low configuration laptop and electricity problems. I had to delete three other repositories, causing me to lose my 70+ commit history. This repository is now my fourth attempt.
- Thank you for taking my thoughts/feelings/well-being into account.
---
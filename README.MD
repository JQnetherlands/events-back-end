# ⚙️ Events API

A structured **Node.js + Express REST API** for managing events, users, and categories, built with a focus on **clean architecture, scalability, and maintainability**.

This API powers the Events Manager frontend and demonstrates backend best practices such as **middleware composition, service-layer architecture, JWT authentication, and centralized error handling**.

---

# 🚀 Live API

Base URL:

https://events-back-end.onrender.com

---

# 🧠 Project Goal

This project was built as part of my **portfolio** to demonstrate real-world backend development practices.

The goal was not just to build endpoints, but to design a system that reflects **production-ready backend architecture**.

Key architectural goals:

- Clear separation of concerns
- Scalable folder structure
- Reusable business logic (service layer)
- Centralized error handling
- Secure authentication
- Clean and predictable API responses

---

# ✨ Features

## Event Management
- Get all events
- Get event by ID
- Create event (protected)
- Update event (protected)
- Delete event (protected)

## Categories
- Full CRUD support (protected for write operations)

## Users
- Full CRUD support (protected for write operations)

## Authentication
- Login endpoint
- JWT token generation
- Protected routes via middleware

---

# 🛠 Tech Stack

- Node.js
- Express
- JSON Web Tokens (JWT)
- REST API principles

---

# 📡 API Endpoints

## 🔐 Authentication

| Method | Endpoint   | Description          | Protected |
|--------|-----------|----------------------|----------|
| POST   | /login    | Login user & get JWT | ❌ |

---

## 📅 Events

| Method | Endpoint        | Description           | Protected |
|--------|----------------|-----------------------|----------|
| GET    | /events        | Get all events        | ❌ |
| GET    | /events/:id    | Get event by ID       | ❌ |
| POST   | /events        | Create new event      | ✅ |
| PUT    | /events/:id    | Update event          | ✅ |
| DELETE | /events/:id    | Delete event          | ✅ |

---

## 🏷 Categories

| Method | Endpoint            | Description        | Protected |
|--------|--------------------|--------------------|----------|
| GET    | /categories        | Get all categories | ❌ |
| GET    | /categories/:id    | Get category by ID | ❌ |
| POST   | /categories        | Create category    | ✅ |
| PUT    | /categories/:id    | Update category    | ✅ |
| DELETE | /categories/:id    | Delete category    | ✅ |

---

## 👤 Users

| Method | Endpoint        | Description        | Protected |
|--------|----------------|--------------------|----------|
| GET    | /users         | Get all users      | ❌ |
| GET    | /users/:id     | Get user by ID     | ❌ |
| POST   | /users         | Create user        | ✅ |
| PUT    | /users/:id     | Update user        | ✅ |
| DELETE | /users/:id     | Delete user        | ✅ |

---

# 📁 Project Structure

src/
├── data/
│   ├── categories.json
│   ├── events.json
│   └── users.json
│
├── routes/
│   ├── events.js
│   ├── categories.js
│   ├── users.js
│   └── login.js
│
├── services/
│   ├── events/
│   │   ├── createEvent.js
│   │   ├── getEvents.js
│   │   ├── getEventById.js
│   │   ├── updateEvent.js
│   │   └── deleteEvent.js
│   │
│   ├── categories/
│   │   ├── createCategory.js
│   │   ├── getCategories.js
│   │   ├── getCategoryById.js
│   │   ├── updateCategory.js
│   │   └── deleteCategory.js
│   │
│   └── users/
│       ├── createUser.js
│       ├── getUsers.js
│       ├── getUserById.js
│       ├── updateUserById.js
│       └── deleteUser.js
│
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   ├── logMiddleware.js
│   └── notFoundErrorHandler.js
│
├── errors/
│   └── NotFoundError.js
│
├── utils/
│   └── log.js
│
└── index.js

---

# 🧩 Architecture Highlights

## Service Layer (Business Logic)

All core logic is separated from routes and lives in:

src/services/

This ensures:

- reusable logic
- cleaner route handlers
- easier testing and scaling

---

## Middleware System

Custom middleware is used to handle cross-cutting concerns:

- auth.js → JWT authentication
- logMiddleware.js → request logging
- errorHandler.js → centralized error handling
- notFoundErrorHandler.js → 404 handling

---

## JWT Authentication

Authentication is implemented using JSON Web Tokens.

### Login Endpoint

POST /login

Response:

{
  "message": "Succesfully logged in!",
  "token": "your-jwt-token"
}

### Protected Routes

Require header:

Authorization: Bearer <token>

---

## Centralized Error Handling

Errors are handled through:

- errorHandler.js
- custom error classes (e.g. NotFoundError)

---

## Logging System

Custom logging via:

utils/log.js

---

# 🔐 Authentication Flow

1. User logs in via /login  
2. Server validates credentials  
3. Server returns JWT token  
4. Client sends token in Authorization header  
5. Middleware verifies token  

---

# 📦 Installation

Clone the repository:

git clone https://github.com/JQnetherlands/events-back-end

Install dependencies:

npm install

Run the server:

npm start

---

# ⚠️ Environment Variables

Create a .env file:

AUTH_SECRET_KEY=your-secret-key

---

# 🔮 Future Improvements

- Database integration (PostgreSQL / MongoDB)
- Input validation (Zod / Joi)
- Role-based authorization
- Pagination & filtering
- Rate limiting
- Testing (unit & integration)
- Refresh tokens

---

# 📚 What I Learned

- Designing scalable APIs
- Service-layer architecture
- JWT authentication
- Middleware patterns
- Centralized error handling

---

# 👤 Author

**Jhonny Quebrada**

GitHub:  
https://github.com/JQnetherlands

Portfolio:  
(add later)

---

# 📄 License

MIT License
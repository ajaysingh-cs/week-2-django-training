# Django REST Framework Authentication Dashboard System

## Project Overview

This project is a full-stack authentication dashboard system built using Django REST Framework (DRF) and React.

The project demonstrates API development, JWT authentication, protected routes, React integration, and CRUD operations.

---

## Tech Stack

### Backend

* Python
* Django
* Django REST Framework (DRF)
* Simple JWT
* SQLite

### Frontend

* React.js
* React Router DOM
* Bootstrap

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Dashboard
* Logout Functionality
* Protected Routes

### Product Management

* View Products
* Add Product
* Delete Product
* Product APIs

### DRF Concepts Implemented

* Serializers
* APIView
* ViewSets
* Routers
* JWT Authentication
* CRUD APIs

---

## Project Structure

Backend:

```text
django_learning/
│
├── core/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── forms.py
│
├── django_learning/
│   ├── settings.py
│   ├── urls.py
│
└── db.sqlite3
```

Frontend:

```text
react-training/
│
├── src/
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │
│   ├── components/
│   │   ├── ProductForm.jsx
│   │   ├── ProductTable.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   └── App.jsx
```

---

## API Endpoints

### Authentication APIs

#### Register User

```http
POST /api/register/
```

#### Login User

```http
POST /api/token/
```

#### Refresh Token

```http
POST /api/token/refresh/
```

#### Dashboard API

```http
GET /api/dashboard/
```

---

### Product APIs

#### Get Products

```http
GET /api/products/
```

#### Add Product

```http
POST /api/add-product/
```

#### Delete Product

```http
DELETE /api/delete-product/<id>/
```

---

### ViewSet APIs

#### Product ViewSet

```http
GET /viewset-products/
POST /viewset-products/
GET /viewset-products/<id>/
PUT /viewset-products/<id>/
DELETE /viewset-products/<id>/
```

---

## Authentication Flow

```text
Register
    ↓
Login
    ↓
JWT Access Token Generated
    ↓
Token Stored in localStorage
    ↓
Access Protected Dashboard
    ↓
Logout
    ↓
Token Removed
```

---

## DRF Concepts Used

### Serializer

Converts Django model objects into JSON format and validates incoming API data.

### APIView

Provides full control over HTTP methods such as GET and POST.

### ViewSet

Automatically provides CRUD operations with less code.

### Router

Automatically generates API URLs for ViewSets.

### JWT Authentication

Used for secure user authentication without server-side sessions.

### IsAuthenticated

Protects APIs so only authenticated users can access them.

---

## Learning Outcomes

* Built REST APIs using Django REST Framework.
* Implemented JWT-based authentication.
* Integrated React frontend with Django backend.
* Created protected routes in React.
* Learned APIView, ViewSets, Routers, and Serializers.
* Developed a complete authentication workflow.

---

## Repository

GitHub Repository:
https://github.com/ajaysingh-cs/week-2-django-training

---

## Author

Ajay Singh



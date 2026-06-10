# Week 2 Django + React Training

## Project Overview

This project demonstrates integration between a React frontend and a Django backend. The application allows users to view, add, and delete products through a simple Product Management System.

---

## Technologies Used

### Frontend

* React
* React Router DOM
* Bootstrap
* Fetch API

### Backend

* Django
* Django ORM
* JSON Response API
* django-cors-headers

### Database

* SQLite

---

## Features Implemented

### React

* Component-based architecture
* Routing using React Router
* State management using useState
* API calls using useEffect and Fetch API
* Bootstrap UI integration

### Django

* Product Model
* Product CRUD operations
* API endpoints
* CORS configuration

### Integration

* Fetch products from Django API
* Add product from React UI
* Delete product from React UI
* Real-time UI updates after API operations

---

## API Endpoints

### Get All Products

```http
GET /api/products/
```

### Add Product

```http
POST /api/add-product/
```

Request Body:

```json
{
  "name": "Keyboard",
  "price": 1200
}
```

### Delete Product

```http
DELETE /api/delete-product/<id>/
```

---

## Project Structure

```text
week_2_django_training/
│
├── django_learning/
│
├── core/
│   ├── models.py
│   ├── views.py
│   ├── forms.py
│
├── react-training/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Products.jsx
│   │   ├── components/
│   │   └── main.jsx
│
└── README.md
```

---

## Learning Outcomes

* Understanding React component architecture
* Working with React Router
* Using useState and useEffect hooks
* Building Django APIs
* Handling CORS in Django
* Connecting React frontend with Django backend
* Performing CRUD operations through APIs

---

## Current Status

### Completed

* React Setup
* Django Setup
* React Router
* Product Listing
* Add Product
* Delete Product
* Django API Integration
* CORS Configuration

### Next Improvements

* Update Product Feature
* Django REST Framework (DRF)
* MySQL Integration
* Authentication & Authorization
* Search and Filter Functionality

---


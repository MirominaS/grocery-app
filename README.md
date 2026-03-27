# Grocery App - Full Stack

## Overview

#### This is a full-stack grocery ordering application.

---
## Tech Stack

- **Frontend:** React (Vite), CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Containerization:** Docker, Docker Compose

---

##  Architecture

- Frontend communicates with backend via REST APIs
- Backend handles business logic and database interactions
- PostgreSQL stores:
  - Products
  - Orders
  - Order items
- Docker Compose orchestrates all services:
  - frontend
  - backend
  - database

---
## Project Structure
```
grocery-app/
│
├── grocery-app-frontend/ 
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── main.js
│   ├── Dockerfile
│   └── package.json
│
├── grocery-app-backend/ 
│   ├── controllers/
│   ├── config/
│   ├── routes/
│   ├── models/
│   ├── index.js
│   ├── .env
│   ├── Dockerfile
│   └── package.json
│
├── postgres-init/ 
│   └── init.sql
│
├── docker-compose.yml 
└── README.md
```
---
## Setup Instructions

### Prerequisites
Install:
- Docker 
- Docker Compose 

You can verify installation using:

```bash
docker --version
docker-compose --version 
```

###  1. clone repository
```bash
git clone https://github.com/MirominaS/grocery-app.git
cd grocery-app
```

### 2. Run with Docker Compose
```bash
docker-compose up --build
```

### 3. Access the application
 - Frontend : [http://localhost:5173]
 - Backend :  [http://localhost:3000]
 - PostgreSQL: localhost:5432 - internal use only

## API Endpoints

### Products
 - GET/grocery/products -> Fetch all products

### Orders
 - POST/grocery/orders -> Create a new order
 - GET/grocery/orders -> Retrieve all orders (admin)

##  Database Schema

The database is organized into two schemas:

- `product_details` → stores product-related data  
- `order_details` → stores order-related data  

---

### **Schema: `product_details`**

#### **Table Name:** `products`

| Column      | Type        | Description                          |
| ----------- | ----------- | ------------------------------------ |
| `id`        | SERIAL (PK) | Unique product identifier            |
| `name`      | TEXT        | Product name                         |
| `price`     | DECIMAL     | Price of the product                 |
| `category`  | TEXT        | Product category                     |
| `stock`     | INT         | Available stock quantity             |
| `image_url` | TEXT        | URL of the product image             |

---

### **Schema: `order_details`**

#### **Table Name:** `orders`

| Column          | Type        | Description                          |
| --------------- | ----------- | ------------------------------------ |
| `id`            | SERIAL (PK) | Unique order identifier              |
| `customer_name` | TEXT        | Name of the customer                 |
| `phone_no`      | TEXT        | Customer phone number                |
| `address`       | TEXT        | Delivery address                     |
| `total`         | DECIMAL     | Total order amount                   |
| `created_at`    | TIMESTAMP   | Order creation timestamp             |

---

#### **Table Name:** `order_items`

| Column       | Type        | Description                                      |
| ------------ | ----------- | ------------------------------------------------ |
| `id`         | SERIAL (PK) | Unique order item identifier                     |
| `order_id`   | INTEGER (FK)| References `order_details.orders(id)`            |
| `product_id` | INTEGER (FK)| References `product_details.products(id)`        |
| `quantity`   | INTEGER     | Quantity of the product in the order             |

---

## 🔗 Relationships

- One **order** → many **order_items**
- One **product** → can appear in many **order_items**
- `order_items` acts as a junction table between orders and products

---
## Future Improvements

- Authentication & Authorization
- Product Management (Admin Panel).
- Payment Integration

---

## Project Repositories

- Frontend - [https://github.com/MirominaS/grocery-app-frontend.git]

- Backend - [https://github.com/MirominaS/grocery-app-backend.git]

---
## Author

**Miromina**  
 smirona16@gmail.com  
 [LinkedIn](https://www.linkedin.com/in/miromina/) | [GitHub](https://github.com/MirominaS)

---
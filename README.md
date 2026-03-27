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

## Architecture Overview (Dockerized)

##### This project is built using a **containerized multi-service architecture**. It leverages Docker to ensure that the Grocery App environment is consistent, reproducible, and ready for deployment with a single command.
---

### Service Decomposition

#### Frontend Container (React + Nginx)
- **Multi-Stage Build:**
    - **Build Stage:** Uses `node:20` to compile the React/Vite source code into optimized static assets.
- **Networking:** Mapped to **Port 5173** on the host. It includes a custom `nginx.conf` to handle client-side routing and proxying to the backend.
- **Optimization:** The multi-stage approach ensures that heavy development dependencies and the Node.js runtime are excluded from the final production image, reducing the footprint and increasing security.

#### Backend Container (Node.js + Express)
- **Environment:** `node:18`.
- **Role:** Acts as the RESTful API gateway, handling business logic, stock validation, and SQL transactions.
- **Networking:** Runs on **Port 3000**.
- **Configuration:** Utilizes an `env_file` mapping to inject database credentials securely from the local `.env` file without hardcoding secrets.

#### Database Container (PostgreSQL 15)
- **Image:** `postgres:15`.
- **Automated Initialization:** Uses the `./postgres-init` volume mapping. Upon the first startup, Docker automatically executes the SQL scripts to:
    - Create schemas (`product_details`, `order_details`).
    - Define table structures and constraints.
- **Data Persistence:** Uses a named volume `postgres_data` to ensure that customer orders and stock levels are preserved even if the container is restarted.

---

### Orchestration & Networking

The entire stack is coordinated via `docker-compose.yml`, which establishes a private virtual network for the services:

1. **Service Discovery:** The Backend connects to the database using the internal hostname `postgres` (as defined in the services) rather than `localhost`.
2. **Startup Order:** The `depends_on` property ensures a logical boot sequence: 
   - **Postgres** starts first ➔ **Backend** waits for Postgres ➔ **Frontend** starts last.
---

### Dockerized Data Flow

1. **Client Access:** The user interacts with the **Nginx-backed Frontend** on port 5173.
2. **API Calls:** React makes asynchronous requests to the **Node.js Backend** container.
3. **Data Processing:** The Backend executes queries against the **PostgreSQL** container.
4. **Persistence:** All transactions (Orders/Items) are written to the **Persistent Volume** on the host machine.
5. **Initialization:** On the very first run, the database is pre-populated with products.

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
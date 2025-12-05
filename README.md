# E-commerce-app
# E-commerce App

A simple full-stack **E-commerce web application** built with **Node.js**, **Express**, **MongoDB**, **Docker**, and **React** (frontend). This project demonstrates a basic product management system with backend API and frontend display.

---

## Features

- Backend API using **Express.js** and **MongoDB** (with Mongoose)
- CRUD operations for products
  - Add products
  - Fetch all products
- Dockerized application:
  - Separate containers for frontend, backend, and MongoDB
- Cross-Origin Resource Sharing (CORS) enabled
- Fully containerized for easy deployment

---

## Technologies Used

- **Frontend:** React, Nginx, Node.js
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **DevOps:** Docker, Docker Compose
- **Version Control:** Git, GitHub

---

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (if running without Docker)
- Git

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Ratesh6/E-commerce-app.git
cd E-commerce-app
```

2. **Setup environment variables**

Create a `.env` file in the `backend` folder if needed (optional):

```
MONGO_URL=mongodb://mongo:27017/ecommerce
PORT=3000
```

3. **Build and start Docker containers**

```bash
docker-compose up -d --build
```

4. **Check running containers**

```bash
docker-compose ps
```

---

## Backend API Endpoints

- **Test API:**  
```http
GET http://localhost:3000/
```

- **Get all products:**  
```http
GET http://localhost:3000/products
```

- **Add a product:**  
```http
POST http://localhost:3000/products
Content-Type: application/json

{
  "name": "Sample Product",
  "price": 99.99,
  "description": "This is a sample description"
}
```

---

## Frontend

- The frontend runs on **port 8080** (via Nginx)
- Open in your browser: [http://localhost:8080](http://localhost:8080)

---

## Project Structure

```
ecommerce-app/
│
├── backend/          # Node.js + Express backend
│   ├── server.js     # Backend entry point
│   ├── package.json
│   └── ...
│
├── frontend/         # React frontend
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## Docker Notes

- **MongoDB container:** `mongo:6` running on port 27017
- **Backend container:** Node.js + Express running on port 3000
- **Frontend container:** React + Nginx running on port 8080
- Data is persisted via Docker volume `mongo-data`

---

## Git

- `.gitignore` includes:
```
node_modules/
frontend/node_modules/
backend/node_modules/
*.env
docker-compose.override.yml
mongo-data/
dist/
build/
```

---

## Contributing

- Fork the repository
- Create a branch (`git checkout -b feature/my-feature`)
- Commit changes (`git commit -m "Add new feature"`)
- Push branch (`git push origin feature/my-feature`)
- Open a pull request

---

## Author

**Ratesh K.**  
GitHub: [https://github.com/Ratesh6](https://github.com/Ratesh6)

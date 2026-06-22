# 🛒 OneCart Backend

A scalable e-commerce backend built with Node.js, Express.js, and MongoDB that powers the OneCart online shopping platform. It provides secure authentication, product management, order processing, and payment integration APIs.

## 🚀 Features

* 🔐 JWT Authentication & Authorization
* 👤 User Registration & Login
* 🛍️ Product Management
* 📦 Category Management
* 🛒 Shopping Cart APIs
* ❤️ Wishlist Functionality
* 📑 Order Management
* 💳 Payment Gateway Integration
* ☁️ Image Upload with Cloudinary
* 📊 Admin Dashboard APIs
* 🔍 Search & Filtering
* 📱 RESTful API Architecture

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Tokens)
* bcrypt.js

### File Storage

* Cloudinary
* Multer

### Other Tools

* dotenv
* cors
* cookie-parser
* nodemon

## 📂 Project Structure

```bash
oneCart-Backend/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── utils/
├── uploads/
│
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation

```bash
git clone https://github.com/Kundank8789/oneCart-Backend.git
cd oneCart-Backend
npm install
```

## 🔑 Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## ▶️ Run Locally

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

## API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/auth/profile`

### Products

* GET `/api/products`
* GET `/api/products/:id`
* POST `/api/products`
* PUT `/api/products/:id`
* DELETE `/api/products/:id`

### Orders

* POST `/api/orders`
* GET `/api/orders`
* GET `/api/orders/:id`

## 🌟 Future Improvements

* Stripe/Razorpay Integration
* Product Reviews & Ratings
* Inventory Management
* Analytics Dashboard
* Email Notifications
* Multi-vendor Support

## 👨‍💻 Author

**Kulbhushan Kumar**

GitHub: https://github.com/Kundank8789

---

⭐ If you found this project useful, please give it a star on GitHub.

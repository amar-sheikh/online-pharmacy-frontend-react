# online-pharmacy-frontend-react

This is the React-based frontend for the Online Pharmacy e-commerce platform. It connects to a Strapi backend and provides users with a responsive, user-friendly interface to browse and purchase medications and health products.

---

## 🚀 Tech Stack

- **React** – For building interactive UIs
- **Vite** – For lightning-fast builds and development server
- **JavaScript (ES6+)**
- **ESLint** – Code linting
- **Strapi (backend)** – Connects via API to fetch product and order data

---

## 💊 Functionality Overview

This is a **React + Vite** frontend for an online pharmacy e-commerce platform. It provides a modern shopping experience with category browsing, product search, reviews, branded listings, and Stripe-integrated checkout.

---

## 🧭 Homepage Features

### 📂 1. Categories Navigation
- Users can browse products by categories (e.g. Natural herb, Counter medicine, Supplements)
- Clicking a category filters and displays relevant products

### ⭐ 2. Popular Products Section
- Highlights bestsellers or highly-rated products
- Displays:
  - Product image
  - Name
  - Price
  - Review rating (e.g. stars or numbers)

### 🏢 3. Brands Section
- Lists major pharmaceutical or herbal brands
- Clicking a brand filters products by that brand

---

## 🔎 Product Discovery Features

### 🔍 4. Search Functionality
- Users can search for products by name or keyword
- Real-time matching results as the user types

### 🧠 5. Single-Product Details Page
When a product is clicked, a detailed view is shown including:
- Full description
- Dosage information
- Ingredients
- Brand and category
- Quantity updates
- Add to Cart
---

## 🛒 Cart & Checkout

### 🛍️ 6. Add to Cart
- Each product has an “Add to Cart” button
- Cart icon is located in the navigation bar (header)
- Clicking the cart icon opens a sliding sidebar from the right side
- Cart updates in real-time

### 🧾 7. Shopping Cart View
- Displays added products
- Allows:
  - Quantity updates
  - Item removal
  - Price calculations (subtotal, tax, total)

### 💸 8. Stripe Payment Integration
- Users enter shipping and payment details at checkout
- Integrated with **Stripe** for secure online payments:
  - Card validation
  - Tokenization
  - Payment confirmation

---

## 🌐 Backend Integration (Strapi)

This frontend communicates with a **Strapi** backend to:
- **Fetch:**
  - Product listings
  - Product details
  - Categories and brands
- **Send:**
  - Orders
  - User/customer form data

> ⚠️ Note: The Strapi backend is **not included in this repository**.

---

## 📁 Project Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit:
http://localhost:5173

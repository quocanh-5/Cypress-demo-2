 🧪 Cypress E2E Automation – SauceDemo by Tran Quoc Anh

## 📌 Project Overview

This project is an end-to-end (E2E) automation testing framework built using **Cypress** to validate core functionalities of the SauceDemo e-commerce web application.

The framework covers authentication, product management, and complete checkout workflow using modern automation best practices.

---

## 🚀 Test Coverage

### 🔐 Login Feature

* Login successfully with valid credentials (using fixture data)
* Validate error message with invalid password
* URL verification after successful login

### 🛒 Inventory Feature

* Add product to cart
* Verify cart badge count
* Sort products (A–Z)
* Network request monitoring using `cy.intercept()`

### 💳 Checkout Flow

* Add item to cart
* Open cart and initiate checkout
* Fill customer information
* Complete checkout process
* Verify successful order confirmation

---

## 🏗 Framework Design

This project applies automation best practices:

* ✅ Page Object Model (POM) design pattern
* ✅ Custom Cypress command (`cy.login`)
* ✅ Fixture-based test data management
* ✅ Reusable test setup using `beforeEach()`
* ✅ Network interception for request validation
* ✅ Structured test organization by feature

---

## 🛠 Tech Stack

* Cypress (v15+)
* JavaScript (ES6)
* Node.js & npm
* Git for version control

---

## 📂 Project Structure

```
cypress/
 ├── e2e/
 │    ├── login.cy.js
 │    ├── inventory.cy.js
 │    └── checkout.cy.js
 ├── fixtures/
 │    └── user.json
 ├── pages/
 │    ├── loginPage.js
 │    ├── inventoryPage.js
 │    └── checkoutPage.js
 └── support/
      └── commands.js
```

---

## ▶️ How to Run the Project

Install dependencies:

```
npm install
```

Open Cypress Test Runner:

```
npx cypress open
```

Run in headless mode:

```
npx cypress run
```

---

## 🎯 Learning Objectives

This project demonstrates:

* Building a maintainable Cypress automation framework
* Applying design patterns in test automation
* Structuring scalable UI test cases
* Implementing reusable commands and data-driven testing


Nếu bạn muốn, tôi có thể:

* Nâng README lên mức “portfolio quality” nhìn chuyên nghiệp hơn nữa
* Thêm badge (build status, Cypress version, etc.)
* Hoặc thêm phần “Future Improvements” để repo nhìn senior hơn

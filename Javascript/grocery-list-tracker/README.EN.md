# 🛒 Grocery List Tracker

## 📌 Project Overview

Grocery List Tracker is a simple JavaScript-based application that allows users to manage their shopping list directly from the console. It demonstrates core JavaScript concepts such as arrays, functions, and basic CRUD operations.

---

## 🚀 Features

* ➕ Add items to the grocery list
* ❌ Remove items from the list
* 📋 View all items with numbering
* ⚠️ Handles empty list cases
* 🔍 Checks if an item exists before removing

---

## 🧠 Concepts Used

* Arrays (`push`, `splice`, `indexOf`)
* Functions
* Conditional statements (`if/else`)
* Looping (`forEach`)
* Basic input/output (`console.log`)

---

## 🛠️ How It Works

### 1. Add Item

Adds a new item to the list.

Example:

```
Milk added to the grocery list.
```

---

### 2. Remove Item

Removes an item if it exists. Otherwise, shows an error message.

Examples:

```
Bread removed from the grocery list.
Cheese is not in the grocery list.
```

---

### 3. View List

Displays all items with numbering.

Example:

```
Grocery List:
1. Milk
2. Eggs
3. Butter
```

If empty:

```
The grocery list is empty.
```

---

## ▶️ Usage

Run the script and test functions like this:

```javascript
viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");
```

---

## 📈 Future Improvements

* Add user input (prompt or UI)
* Build a simple web interface (HTML/CSS)
* Store data using Local Storage
* Add edit/update functionality

---

## 🎯 Purpose

This project is designed for beginners to practice JavaScript fundamentals and understand how basic data manipulation works.

---

## 👨‍💻 Author

Aygün

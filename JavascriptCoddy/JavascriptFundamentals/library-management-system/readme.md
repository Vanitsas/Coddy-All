# Library Management System

A simple JavaScript-based library management system that demonstrates core programming concepts such as arrays, objects, loops, conditionals, CRUD operations, filtering, and search functionality.

## Features

- Print all books
- Print all readers
- Add new books
- Search books by title
- Filter books by genre
- Mark books as read
- Add ratings to books
- Validate rating input
- Handle invalid actions

## Technologies Used

- JavaScript

## Project Structure

```bash
library-management-system/
│
├── index.js
└── README.md
```

## Example Actions

### Add a Book

```js
manageLibrary(
  ['addBook'],
  [{
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian"
  }]
);
```

### Search by Title

```js
manageLibrary(
  ['searchByTitle'],
  ['gatsby']
);
```

### Filter by Genre

```js
manageLibrary(
  ['filterByGenre'],
  ['Fiction']
);
```

### Mark as Read

```js
manageLibrary(
  ['markAsRead'],
  [{
    bookId: 1,
    rating: 5
  }]
);
```

## Concepts Practiced

- Arrays & Objects
- Loops
- Switch Statements
- Functions
- CRUD Logic
- Data Validation
- Search & Filtering
- Case-insensitive Search

## Goal

This project was created to practice JavaScript fundamentals and simulate real-world application logic used in frontend and backend development.

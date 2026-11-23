# Vanilla JS Shop

A multi-page online store built with plain HTML, CSS and JavaScript. No frameworks, no build step, no dependencies.

I built it to consolidate the core of the language: the DOM, events, data structures, modules and browser storage, all without a library doing the work for me.

**Live demo:** https://yehorh000.github.io/javascript-amazon-clone/

## Background

The project follows the vanilla JavaScript course by SuperSimpleDev. I used it to refresh and deepen my JavaScript fundamentals before moving on to TypeScript, React and Node.js (see my other repositories).

## Features

- Product grid rendered from a data file, with search
- Shopping cart with quantity changes and removal, persisted in `localStorage`
- Order summary with item total, shipping options, tax and order total
- Checkout that creates an order and stores it
- Orders page with order history
- Delivery tracking page with a progress indicator
- Responsive layout

## What I practised

- DOM manipulation and rendering UI from data without a framework
- Event handling and event delegation
- Array methods (`map`, `filter`, `find`, `reduce`) on real data
- ES modules and splitting code into small files
- Persisting state in `localStorage`
- Working with dates (delivery estimates) and money calculations (rounding, tax)
- Fetching data and handling asynchronous code
- Basic unit tests

## Tech stack

HTML5, CSS3, JavaScript (ES modules). No build tools.

## Getting started

```bash
git clone https://github.com/YehorH000/javascript-amazon-clone.git
cd javascript-amazon-clone
```

Open `index.html` in a browser. Because the project uses ES modules, some browsers need a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Project structure

```
├── index.html          # product list and search
├── checkout.html       # cart and order summary
├── orders.html         # order history
├── tracking.html       # delivery tracking
├── data/
│   └── products.js     # product data
├── scripts/            # cart, orders, utilities
└── styles/
```

## Ideas for future improvements

These are ideas, not commitments or a schedule.

**Home page and search**

- Sorting (default, price ascending/descending, rating)
- An empty state with a "Show all products" button when a search returns nothing

**Shopping**

- Wishlist stored in `localStorage`, with a "favourites only" filter
- Product variations (size, colour) so that the same item in different sizes becomes separate cart lines
- Promo codes in the order summary, with correct recalculation of tax and total

**Orders**

- Cancel an order that has not been delivered yet (with confirmation)
- Filter orders by status: all, in transit, delivered
- Product detail page (`product.html?productId=...`) with a larger image, description and reviews

**Possible direction**

- A TypeScript version, and a React front end with a Node.js API, as a separate project

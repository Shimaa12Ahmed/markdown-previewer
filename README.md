# Markdown Previewer

A live **Markdown Editor and Previewer** built with **React** that converts Markdown syntax into formatted HTML in real time.

This project was developed as part of the **FreeCodeCamp Frontend Libraries Certification**.

---

## Live Demo
https://markdown-previewer-ten-kappa.vercel.app

---

## Features

- Live Markdown preview while typing
- Supports **GitHub Flavored Markdown (GFM)**
- Code blocks and inline code
- Blockquotes
- Ordered lists
- Links and images
- Dark / Light mode toggle
- Responsive UI using Bootstrap
- Secure HTML rendering using DOMPurify

---

## Technologies Used

- React
- JavaScript (ES6+)
- Marked.js
- DOMPurify
- Bootstrap 5
- CSS Grid
- Bootstrap Icons

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/markdown-previewer.git
```

Navigate into the project directory:

```bash
cd markdown-previewer
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## How It Works

The application contains two main panels:

### Editor
A textarea where users can write Markdown syntax.

### Preview
Displays the parsed Markdown as rendered HTML.

As the user types in the editor, the Markdown is parsed using **Marked.js** and safely rendered using **DOMPurify**.

---

## Supported Markdown Elements

The preview supports multiple Markdown elements including:

- Headers (`#`, `##`)
- Bold text (`**bold**`)
- Blockquotes (`>`)
- Ordered lists (`1.`)
- Links (`[text](url)`)
- Inline code (`` `code` ``)
- Code blocks (```javascript)
- Images (`![alt](url)`)

---

## Project Structure

```
src
 ├── components
 │    ├── Editor.jsx
 │    └── Preview.jsx
 ├── App.jsx
 ├── main.jsx
 └── styles.css
```

---

## Author

Shimaa Ahmed  
Frontend Developer


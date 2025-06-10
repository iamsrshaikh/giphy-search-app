# Giphy Search App

A modern React app to search and display trending or queried GIFs using the Giphy API.

## ✨ Features

- 🔍 Live search with debounce
- 🖼️ Responsive grid layout for GIFs
- 🔁 Load more pagination
- 💅 Component-scoped styling with CSS Modules
- 🎨 Centralized theme with CSS variables
- 🚫 Graceful error handling

## 📁 Project Structure

src/
├── components/
│   ├── GifCard/
│   │   ├── GifCard.jsx
│   │   └── GifCard.module.css
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.module.css
│   └── LoadingSpinner/
│       ├── LoadingSpinner.jsx
│       └── LoadingSpinner.module.css
│
├── styles/
│   └── colors.module.css
│
├── constants/
│   └── messages.js
│
├── utilities/
│   └── useGifs.js
│
├── App.jsx
└── App.css

## 🛠️ Getting Started

### 1. Clone the repository

- git clone https://github.com/iamsrshaikh/giphy-search-app.git
- cd giphy-search-app

## 2. Install dependencies

- npm install

## 3. Set up your Giphy API Key

- Replace your API key in useGifs.js or use environment variables.

- const API_KEY = process.env.REACT_APP_GIPHY_KEY;

## 4. Run the app

- npm start

# 🎨 Styling Guide

- All colors are defined in styles/colors.module.css.

- Each component uses scoped styles via *.module.css.

- Media queries ensure responsiveness for tablets and mobile devices.

# 🚧 TODOs

- Add support for dark mode

- Add trending/sticker filters

- Improve accessibility (A11y)

- Unit tests for core components

## Happy GIF hunting! 🎉


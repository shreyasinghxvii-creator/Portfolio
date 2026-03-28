import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global styles (Scrollbars, Fonts)
import App from './App.jsx'

// We hook the React App into the 'root' div in your index.html
createRoot(document.getElementById('root')).render(
  <App />
)
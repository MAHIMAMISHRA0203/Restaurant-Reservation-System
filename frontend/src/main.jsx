import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import './styles/dev-overlay.css'
import axios from "axios";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS (includes Popper.js)
import './custom.css';  // Your custom CSS
import './fonts.css'   // 👈 Import font


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

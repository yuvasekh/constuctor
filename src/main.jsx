import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
   <Header title="My header" subtitle="subtitle2" />
    <App />
  </Router>
  </React.StrictMode>,
)

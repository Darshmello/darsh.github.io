import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App';
import './styles/style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename="/darsh.github.io">  {/* Add basename for GitHub Pages */}
    <App />
  </Router>
);

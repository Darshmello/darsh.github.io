import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
import App from './App';
import './styles/style.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router> {/* Wrap the App component with Router */}
    <App />
  </Router>
);

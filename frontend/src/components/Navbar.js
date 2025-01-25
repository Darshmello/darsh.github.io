import React from "react";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog"> Blog</Link></li>
          <li><Link to="/photography">Photography</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

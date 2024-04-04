import React from "react";
import './styles/tailwind.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><Link to = "/home">Home</Link></li>
        </ul> 
      </nav>
    </div>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <h1>Header Component</h1>
      <nav>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/list")}>List</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" data-aos="fade-down">
      <div className="logo">Logo</div>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Features</a>
        <a href="#">Blogs</a>
        <a href="#">Contact</a>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </header>
  );
}

export default Header;

import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">lamabooking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to = "/login">
              <button className="navButton">Login</button>
            </Link>
            <button className="navButton" onClick={onLogout}>Logout</button>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
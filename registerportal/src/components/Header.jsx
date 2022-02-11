import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#37517e"}}>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-4 mt-3 mb-lg-0">
        <li className="nav-item mx-3">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
        </li>
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item " to="/userLogin">User Login</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/adminLogin">Admin Login</NavLink></li>
          </ul>
        </li>
        <li className="nav-item ms-3 me-5">
          <NavLink className="nav-link" to="/signUp">Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  );
}

export default Header;


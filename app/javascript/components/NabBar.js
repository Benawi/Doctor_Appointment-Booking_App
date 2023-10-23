import React  from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return(
    <div className="Navigation">
      <p>Logo</p>
      <ul className="Menu-Items">
        <li>
          <NavLink to='/'>DOCTORS</NavLink>
        </li>
        <li>
          <NavLink to='/reserve-form'>RESERVE FORM</NavLink>
          
        </li>
        <li>
          <NavLink to='/my-reservation'>MY RESERVATION</NavLink>
          
          </li>
        <li>
          <NavLink to='/add-doctor'>ADD DOCTOR</NavLink>
        </li>
        <li>
          <NavLink to='/delete-doctor'>DELETE DOCTOR</NavLink>
        </li>
        <li>
          <a href="/logout" >Sign Out</a>
        </li>
      </ul>
      <div>
        <ul className="Footer-contents">
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
          <p>Copyright</p>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
import React  from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <div className="Navigation">
      <p>Logo</p>
      <ul className="Menu-Items">
        <li>
          <Link to='/doctors'>DOCTORS</Link>
        </li>
        <li>
          <Link to='/reserve-form'>RESERVE FORM</Link>
          
        </li>
        <li>
          <Link to='/my-reservation'>MY RESERVATION</Link>
          
          </li>
        <li>
          <Link to='/add-doctor'>ADD DOCTOR</Link>
        </li>
        <li>
          <Link to='/delete-doctor'>DELETE DOCTOR</Link>
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
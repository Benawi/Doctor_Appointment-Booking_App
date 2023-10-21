import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/stylesheets/main.css";
import "../../assets/stylesheets/responsive.css";
import logo from "../../assets/images/doctor-logo.png";
import fb from "../../assets/images/fb-icon-home.png";
import twitter from "../../assets/images/twitter-icon-home.png";
import insta from "../../assets/images/insta-icon-home.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const social = [{ icon: twitter }, { icon: fb }, { icon: insta }];

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav>
      <div className="desktop-nav">
        {/* Desktop nav links */}

        <nav className="navbar">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="links-container">
            <ul>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active link" : "link"
                  }
                  to="/doctors"
                >
                  Doctors
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active link" : "link"
                  }
                  to="/reserve-form"
                >
                  reserve form
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active link" : "link"
                  }
                  to="/my-reservation"
                >
                  My Reservations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active link" : "link"
                  }
                  to="/add-doctor"
                >
                  add doctor
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? "active link" : "link"
                  }
                  to="/delete-doctor"
                >
                  Delete a Doctor
                </NavLink>
              </li>
              <li>
                <NavLink to="/users/sign_out">Sign Out</NavLink>
              </li>
            </ul>
          </div>
          <div className="social-net socialicon">
            {social.map((item) => (
              <a href="/" key={item.icon}>
                <img src={item.icon} alt="social" className="w-8" />
              </a>
            ))}
          </div>
          <p className="copyright">&copy; 2023 Bena & Toyo</p>
        </nav>
      </div>
      <div className="mobile-nav">
        <FaBars onClick={() => setShowMobileMenu(!showMobileMenu)} />

        {showMobileMenu && (
          <div className="mobile-menu">
            {/* Mobile nav links */}

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

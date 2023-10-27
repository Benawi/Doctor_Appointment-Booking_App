import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const csrfToken = document
        .querySelector("meta[name=csrf-token]")
        .getAttribute("content");
      await fetch("https://doctor-appointment-booking-app1.onrender.com/users/sign_out", {
        method: "DELETE",
        credentials: "include",
        headers: {
          "X-CSRF-Token": csrfToken,
        },
      });

      navigate("/login");
      location.reload(true);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
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
                <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
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
            <div className="links-container">
              <ul className="mobile-nav">
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
                    Reserve Form
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
                    Add Doctor
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
                  <button className="signout-button" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

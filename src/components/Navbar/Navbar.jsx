import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { logo } from "../../constants/images";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from 'react-router-dom';

const Navbar = React.memo(() => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation()
  const path = location.pathname;
  return (
    <>
      <nav className="app__navbar">
        <Link to="/">
          <div className={`app__navbar-logo`}>
            <img src={logo} alt="app logo" />
          </div>
        </Link>
        <ul className="app__navbar-links">
          <Link to="/">
            <li className={`p__space-mono app__navbar-links__li ${path === "/" ? "active" : null}`}>
              Home
            </li>
          </Link>
          <Link to="about">
            <li className={`p__space-mono app__navbar-links__li ${path === "/about" ? "active" : null}`}>
             About us
            </li>
          </Link>
          <Link to="training">
            <li className={`p__space-mono app__navbar-links__li ${path === "/training" ? "active" : null}`}>
              Training
            </li>
          </Link>
          <Link to="teachers">
            <li className={`p__space-mono app__navbar-links__li ${path === "/teachers" ? "active" : null}`}>
              Teachers
            </li>
          </Link>
          <Link to="contact">
            <li className={`p__space-mono app__navbar-links__li ${path === "/contact" ? "active" : null}`}>
              Contact
            </li>
          </Link>
        </ul>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#ed5f43"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay-bg flex__center slide-left">
              <div className="app__navbar-smallscreen_overlay">
                <FaTimes
                  fontSize={27}
                  className="overlay__close"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                />
                <ul className="app__navbar-smallscreen_links">
                  <div className="app__navbar-smallscreen_links-line"></div>
                  <Link to="/">
                    <li className={`p__space-mono app__navbar-links__li ${path === "/" ? "active" : null}`}>
                      Home
                    </li>
                  </Link>
                  <div className="app__navbar-smallscreen_links-line"></div>
                  <Link to="about">
                    <li className={`p__space-mono app__navbar-links__li ${path === "/about" ? "active" : null}`}>
                      About us
                    </li>
                  </Link>
                  <div className="app__navbar-smallscreen_links-line"></div>
                  <Link to="training">
                    <li className={`p__space-mono app__navbar-links__li ${path === "/training" ? "active" : null}`}>
                      Training
                    </li>
                  </Link>
                  <div className="app__navbar-smallscreen_links-line"></div>
                  <Link to="teachers">
                    <li className={`p__space-mono app__navbar-links__li ${path === "/teachers" ? "active" : null}`}>
                      Teachers
                    </li>
                  </Link>
                  <div className="app__navbar-smallscreen_links-line"></div>
                  <Link to="contact">
                    <li className={`p__space-mono app__navbar-links__li ${path === "/contact" ? "active" : null}`}>
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
})

export default Navbar;

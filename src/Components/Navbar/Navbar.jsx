import React, {useState} from 'react';
import './navbar.css';
import { GiFizzingFlask } from 'react-icons/gi';
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
//Code to toggle show navbar

  const [active, setActive] = useState('navBar');
  const showNav = () => {
    setActive('navBar activeNavbar');
  }
// Code to close navbar
  const closeNav = () => {
    setActive('navBar');
  };

// Code to add background color to the header
  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };
  window.addEventListener('scroll', addBg);
  

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <Link to="/" className="logo link">
            <h1 className="flex">
              <GiFizzingFlask className="icon" />
              <span className="brandName">Nomad's Alchemy</span>
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="#" className="navLink link">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink link">
                Visas
              </Link>
            </li>

            <li className="navItem">
              <Link to="/countries/" className="navLink link">
                Countries
              </Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink link">
                Activities
              </Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink link">
                About
              </Link>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <Link to="#" className="link">
                  Login
                </Link>
              </button>

              <button className="btn">
                <Link to="#" className="link">
                  Sign Up
                </Link>
              </button>
            </div>
          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;

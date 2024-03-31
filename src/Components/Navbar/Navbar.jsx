import React, {useState} from 'react';
import './navbar.css';
import { GiFizzingFlask } from 'react-icons/gi';
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

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
          <a href="#" className="logo">
            <h1 className="flex">
              <GiFizzingFlask className="icon" />
              <span className="brandName">Nomad's Alchemy</span>
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Visas
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Countries
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Activities
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>

              <button className="btn">
                <a href="#">Sign Up</a>
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

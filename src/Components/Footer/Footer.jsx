import React, {useEffect} from 'react';
import './footer.css';
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

import { GiFizzingFlask } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div
            
            className="footerLogo"
          >
            <Link to="/" className="logo flex link">
              <h1 className="flex">
                <GiFizzingFlask className="icon" />
                <span className="brandName">Nomad's Alchemy</span>
              </h1>
            </Link>
          </div>

          <div
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitterX className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <Link to="" className="link">Home</Link>
          </li>
          <li>
            <Link to="" className="link">Visas</Link>
          </li>
          <li>
            <Link to="" className="link">Countries</Link>
          </li>
          <li>
            <Link to="" className="link">Blog</Link>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Useful Links</span>
          <li>
            <Link to="" className="link">Destination</Link>
          </li>
          <li>
            <Link to="" className="link">Activities</Link>
          </li>
          <li>
            <Link to="" className="link">Support</Link>
          </li>
          <li>
            <Link to="" className="link">Privacy</Link>
          </li>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+353 87 196 0859</span>
          <span className="email ">nomads-alchemy@google.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

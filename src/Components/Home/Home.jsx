import React, {useEffect} from "react";
import "./home.css";

import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css"; 

import Popular from "../Popular/Popular";
import About from "../About/About";
import Blog from "../Blog/Blog";



const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-up" className="title">
              Turn Your Wanderlust into a Workcation Lifestyle
            </h1>

            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
              Discover countries offering digital nomad visas & craft your dream
              remote work adventure.
            </p>

            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <Link to="/countries/" className="link">Explore Now</Link>
            </button>
          </div>

          <div className="homeCard grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="locationDiv"
            >
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Dream Destination" />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              className="distDiv"
            >
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder="11/meters" />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="priceDiv"
            >
              <label htmlFor="price">Price Range</label>
              <input type="text" placeholder="$140-$500" />
            </div>
            <button
              data-aos="fade-left"
              data-aos-duration="2000"
              className="btn"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <Popular />
      <About />
      <Blog />
    </>
  );
};

export default Home;

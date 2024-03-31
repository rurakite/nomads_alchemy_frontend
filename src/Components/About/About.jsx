import React, {useEffect} from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";

import globe from "../../Assets/globe.png";
import puzzle from "../../Assets/puzzle.png";
import clock from "../../Assets/clock.png";

import video from "../../Assets/video.mp4";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">Discover What Sets Us Apart</h2>
        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={globe} alt="" />
            <h3>Seamless Travel Integration</h3>
            <p>
              Stay connected to the world while navigating visa requirements as
              a digital nomad. Our platform offers insights into visa
              regulations, embassy contacts, and essential travel documents,
              ensuring you're equipped to explore new destinations hassle-free.
              From visa application processes to visa-free travel options, we
              provide comprehensive support to facilitate your journey as a
              global citizen.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={puzzle} alt="" />
            <h3>Visa Solutions Tailored to You</h3>
            <p>
              Find visa-friendly destinations that align with your remote work
              lifestyle effortlessly. Whether you're seeking long-term residency
              options, temporary work permits, or digital nomad visas, our
              platform curates personalized recommendations based on your
              specific visa needs and preferences. Discover destinations where
              you can live, work, and thrive as a digital nomad with ease.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={clock} alt="" />
            <h3>Simplify Your Visa Journey</h3>
            <p>
              Eliminate the complexities of visa research and streamline your
              digital nomad lifestyle with our efficient visa planning tools.
              Gain access to curated visa information, application guidelines,
              and expert insights designed to save you time and effort. With our
              user-friendly interface and comprehensive visa resources, you can
              focus on your remote work while we handle the details of your visa
              journey.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Immerse Yourself in Nature's Beauty!</h2>
              <p>
                Experience the tranquility of nature's wonders through our
                captivating video guides, inspiring your next digital nomad
                adventure.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp.4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
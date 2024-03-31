import React, { useState, useEffect } from "react";
import './popular.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Popular = () => {
  const [Countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/countries/");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error.message);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="secTitle">Popular Destinations</h2>
            <p>
              From spreadsheets to sunsets, ditch the desk for a life redefined.
              Nomad's Alchemy unlocks your remote work dream.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Countries.slice(0, 4).map((country, index) => {
            return (
              <div
                key={country.id}
                data-aos="fade-up"
                className="singleDestination"
              >
                <div className="destImage">
                  {country.images.map((image) => (
                    <img key={image.id} src={image.image} alt={country.name} />
                  ))}
                  <div className="overlayInfo">
                    <h3>{country.capital}</h3>
                    <p>The capital of {country.name}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{index + 1}</div>

                  <div className="destText flex">
                    <h6>{country.name}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;

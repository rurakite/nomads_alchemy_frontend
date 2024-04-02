import React, { useState, useEffect } from "react";
import "./countriesList.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaWifi, FaRegClock, FaRegMoneyBillAlt } from "react-icons/fa";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const CountriesList = () => {
const baseUrl = "http://127.0.0.1:8000/api";
const [Countries, setCountries] = useState([]);
const [totalResults, setTotalResults] = useState(0);
const [nextPage, setNextPage] = useState(null);
const [previousPage, setPreviousPage] = useState(null);
const continents = [
  "All",
  "Africa",
  "Asia",
  "Europe",
  "North America",
  "South America",
  "Oceania",
];
const [selectedContinent, setSelectedContinent] = useState("All");

const fetchCountries = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch countries");
    }
    const data = await response.json();
    setCountries(data.results);
    setNextPage(data.links.next);
    setPreviousPage(data.links.previous);
    setTotalResults(data.count);
  } catch (error) {
    console.error("Error fetching countries:", error.message);
  }
};

useEffect(() => {
  fetchCountries(baseUrl + "/countries/");
}, []);

  const handleContinentChange = (event) => {
    setSelectedContinent(event);
  };
  
  const filteredCountries = Countries.filter(
    
    (country) =>
      country.continent === selectedContinent || selectedContinent === "All"
      
  );

const handlePageChange = (url) => {
  fetchCountries(url);
};


  const links = [];
  if (totalResults > 0) {
    for (let i = 1; i <= Math.ceil(totalResults / 24); i++) {
      links.push(
        <li key={i}>
          <Link
            to={`/countries/?page=${i}`}
            onClick={() => handlePageChange(`${baseUrl}/countries/?page=${i}`)}
            className="link"
          >
            {i}
          </Link>
        </li>
      );
    }
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="popular section container">
        <div className="secContainer">
          <div className="secHeader flex">
            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              className="textDiv"
            >
              <h2 className="secTitle">Brows All Countries</h2>
              <p>
                From spreadsheets to sunsets, ditch the desk for a life
                redefined. Nomad's Alchemy unlocks your remote work dream.
              </p>

              <div className="continent-buttons">
                {continents.map((continent) => (
                  <button
                    key={continent}
                    className={selectedContinent === continent ? "active" : ""}
                    onClick={() => handleContinentChange(continent)}
                  >
                    {continent}
                  </button>
                ))}
              </div>
            </div>
            <div className="secPagination">
              <ul className="pagination ">
                <li>
                  <Link
                    to={previousPage || "#"}
                    onClick={() =>
                      previousPage && handlePageChange(previousPage)
                    }
                  >
                    <BsArrowLeftShort className="link" />
                  </Link>
                </li>
                {links}
                <li>
                  <Link
                    to={nextPage || "#"}
                    onClick={() => nextPage && handlePageChange(nextPage)}
                  >
                    <BsArrowRightShort className="link" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mainContent grid">
            {filteredCountries.map((country, index) => {
              return (
                <div
                  key={country.id}
                  data-aos="fade-up"
                  className="singleDestination"
                >
                  <div className="destImage">
                    {country.images.map((image) => (
                      <img
                        key={image.id}
                        src={image.image}
                        alt={country.name}
                      />
                    ))}
                    <div className="overlayInfo">
                      <h3>{country.capital}</h3>
                      <p>The capital of {country.name}</p>

                      <Link to={`/country/${country.id}`}>
                        <BsArrowRightShort className="icon" />
                      </Link>
                    </div>
                  </div>
                  <div className="destFooter">
                    <div className="destText flex">
                      <h6>{country.name}</h6>
                      <span className="flex">
                        <span className="dot">
                          <img
                            className="icon"
                            src={country.flag_url}
                            alt="Country flag"
                          />
                        </span>
                      </span>
                    </div>
                    <div className="destIcons">
                      <div className="destIcon">
                        <FaRegMoneyBillAlt className="my-anchor-element" />
                        <span>${country.cost_of_living}/m</span>
                      </div>
                      <div className="destIcon">
                        <FaWifi />
                        <span>{country.mobile_speed}mbps</span>
                      </div>
                      <div className="destIcon">
                        <FaRegClock />
                        <span>GMT+3</span>
                      </div>
                      <div className="destIcon">
                        <FaTemperatureThreeQuarters />
                        <span>{country.temperature}°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CountriesList;

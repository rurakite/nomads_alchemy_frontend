import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./singleCountry.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";



const SingleCountry = () => {
  const [country, setCountry] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch data for the single country when the component mounts
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/country/${id}/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Error fetching country data:", error.message);
      }
    };

    fetchCountryData();
  }, [id]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (!country) {
    // Return loading state while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <section className="singleCountry container">
      <div className="single-country-container">
        {country ? (
          <>
            <header>
              <h1>{country.name}</h1>
              <img src={country.flag_url} alt={`${country.name} Flag`} />
            </header>
            <main>
              <section>
                <h2>Basic Information</h2>
                <p>Capital: {country.capital}</p>
                <p>Continent: {country.continent}</p>
                <p>Temperature: {country.temperature}</p>
                {/* Add more basic information fields as needed */}
              </section>
              <section>
                <h2>Climate & Environment</h2>
                <p>Climate Zone: {country.climate_zone}</p>
                <p>Temperature: {country.temperature}</p>
                console.log(country.temperature)
                {/* Add more climate and environment details */}
              </section>
              <section>
                <h2>Healthcare & Safety</h2>
                <p>Safety Index: {country.safety_index}</p>
                <p>Healthcare Index: {country.healthcare_index}</p>
                {/* Add more healthcare and safety details */}
              </section>
              {/* Add more sections for additional details */}
              <section>
                <h2>Description</h2>
                <p>{country.description}</p>
              </section>
              <section>
                <h2>Related Blog Articles</h2>
                {/* Display related blog articles if available */}
                {/* You can fetch related articles from a related model */}
              </section>
            </main>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default SingleCountry;


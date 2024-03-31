import React, {useEffect} from 'react';
import './blog.css';
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

import img1 from '../../Assets/Japan.webp';
import img2 from "../../Assets/paris.jpg";
import img3 from "../../Assets/Indonasia.webp";
import img4 from "../../Assets/Iceland.webp";

const Posts = [
  {
    id: 1,
    postImage: img1,
    title: "Beautiful Morocco",
    desc: "Explore the vibrant culture and stunning landscapes of Morocco. From bustling markets to tranquil desert oases, Morocco offers a unique adventure for every traveler.",
  },
  {
    id: 2,
    postImage: img2,
    title: "Charming Paris",
    desc: "Discover the romance and elegance of Paris, the City of Light. From iconic landmarks like the Eiffel Tower to charming cafes along the Seine, Paris captivates visitors with its charm.",
  },
  {
    id: 3,
    postImage: img3,
    title: "Enchanting Bali",
    desc: "Immerse yourself in the natural beauty and rich cultural heritage of Bali. With its lush rice terraces, pristine beaches, and vibrant festivals, Bali offers an unforgettable escape.",
  },
  {
    id: 4,
    postImage: img4,
    title: "Spectacular Iceland",
    desc: "Experience the breathtaking landscapes and otherworldly beauty of Iceland. From towering waterfalls to majestic glaciers, Iceland is a paradise for nature lovers and adventurers alike.",
  },
];



const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to increase your productivity and overall happiness.
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt="{title}" />
                </div>
                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">
                    {desc}
                  </p>
                </div>
                <a
                  href=""
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  className="flex"
                >
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "./Carousel/Carousel";
import { Typewriter } from "react-simple-typewriter";

export default function ImageCarousel() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/Petshop`)
      .then((res) => {
        setPets(res.data);
      })

      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div id="headerBgImg">
        <div className="main_hero">
          <h1 className="text-5XL">Hello!</h1>
          <h1>Welcome to our PetShop</h1>
          <div className="fs-4 px-3 text-2">
            <span style={{ color: "orange" }}>
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
                words={[
                  "Happy pets, happy life.",
                  "Where pets are family.",
                  "Love is a four-legged word.",
                ]}
              />
            </span>
          </div>
          {/* <div id="image_hero">
              <img src={Ateev1} alt="Ateev" className="image_hero" />
            </div> */}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <Carousel show={4}>
          {pets.map((e) => (
            <div key={e._id}>
              <div style={{ padding: 8 }}>
                {/* <Link to={`/${e._id}`}> */}
                <img
                  src={e.image}
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
                {/* </Link> */}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

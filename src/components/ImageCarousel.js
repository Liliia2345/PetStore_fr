import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "./Carousel/Carousel";

import HeroPoster from "./HeroPoster";

export default function ImageCarousel() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop`)
      .then((res) => {
        setPets(res.data);
      })

      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <HeroPoster />
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

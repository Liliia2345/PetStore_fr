import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import Pets from "./Pets";

import HeroPoster from "./HeroPoster";

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
                <Link
                  to={`${process.env.REACT_APP_SERVER_BASE_URL}/api/Petshop/${e._id}`}
                >
                  <img
                    src={e?.image}
                    alt="placeholder"
                    className="w-full h-48 object-cover"
                    // style={{ width: "100%" }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </Carousel>

        <Pets />
      </div>
    </>
  );
}

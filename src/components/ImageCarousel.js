import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "./Carousel/Carousel";

export default function ImageCarousel({ animalType }) {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop`)
      .then((res) => {
        setPets(res.data);
      })

      .catch((e) => console.log(e));
  }, []);

  const filterList = pets.filter((pet) => pet.animalType === animalType);
  console.log(filterList);

  return (
    <>
      <h1 className="title">{animalType}</h1>
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
      >
        <Carousel show={4}>
          {filterList.map((e) => (
            <div key={e._id}>
              <div style={{ padding: 8 }}>
                <Link
                  to={`${process.env.REACT_APP_BACKEND_URL}/api/Petshop/${e._id}`}
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
      </div>
    </>
  );
}

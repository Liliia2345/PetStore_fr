import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetDetails = () => {
  const [pet, setPet] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/petshop/${_id}`)
      .then((res) => setPet(res.data))
      .catch((e) => console.log(e));
  }, [_id]);

  return (
    <div className="container mx-auto">
      {pet ? (
        <div className="max-w-md mx-auto my-16 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={pet.image}
                alt={`A ${pet.size} ${pet.breed} named ${pet.name}`}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {pet.animalType}
              </div>
              <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                {pet.breed}
              </h1>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">Age:</span>{" "}
                {pet.age}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">Gender:</span>{" "}
                {pet.gender}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">Size:</span>{" "}
                {pet.size}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">Playfulness:</span>{" "}
                {pet.playfulness}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">Care:</span>{" "}
                {pet.care}
              </p>
              <div className="mt-4">
                <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  Adopt {pet.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PetDetails;
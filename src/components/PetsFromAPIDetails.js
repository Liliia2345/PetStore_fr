import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const PetFromAPIDetails = () => {
  const [pet, setPet] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/images/${id}`)
      .then((res) => setPet(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="container mx-auto">
      {pet ? (
        <div className="max-w-md mx-auto my-16 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={pet.url}
                alt={`A ${pet.size} ${pet.breed} named ${pet.name}`}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {pet.id}
              </div>
              <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
                {pet.breeds}
              </h1>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">URL:</span>{" "}
                {pet.url}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">Image Height:</span>{" "}
                {pet.height}
              </p>
              <p className="mt-2 text-gray-500">
                <span className="text-gray-800 font-medium">Image Width:</span>{" "}
                {pet.width}
              </p>
              <div className="grid gap-4 grid-cols-1 mt-5">
                <Link
                  to={`/`}
                  className="bg-gray-800  grid gap-4  text-white font-bold py-2 px-5 rounded"
                >
                  Back to Home
                </Link>
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

export default PetFromAPIDetails;

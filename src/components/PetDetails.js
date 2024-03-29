import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import moment from 'moment';


const PetDetails = () => {
  const [pet, setPet] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();
  const [deletePet, setDeletePet] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop/${_id}`)

      .then((res) => setPet(res.data))
      .catch((e) => console.log(e));
  }, [_id]);

  const handleDelete = (e) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop/${_id}`)
      .then((res) => navigate("/api/Petshop"))
      .catch((e) => console.log(e));
    setDeletePet(!deletePet);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop/${_id}`)
      .then((res) => setPet(res.data))
      .catch((e) => console.log(e));
  }, [deletePet]);

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
              <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                {pet.animalType}
              </div>
              <h1 className="block mt-1 text-lg leading-tight font-bold text-black">
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
              <p className="mt-2 text-gray-500">
              Pet added {moment(pet.createdAt).fromNow()}
              </p>
              <div className="grid gap-4 grid-cols-2">
                <Link
                to={`/updatePet/${pet._id}`}
                  className="bg-gray-800  grid gap-4  text-white font-bold py-2 px-5 rounded">
                    Update{/*{pet.name}*/}
                
                </Link>

                <Link>
                  <button
                    onClick={handleDelete}
                    className="bg-gray-800 text-white   grid gap-4   font-bold py-2 px-5 rounded"
                  >
                    Delete {pet.name}
                  </button>
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

export default PetDetails;

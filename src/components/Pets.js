import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop`)
      .then((res) => setPets(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 mt-4 place-items-center">
        <h1 className="title">Pet List</h1>
        <Link to={"/newPet"}>
          <button className="place-items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            <span> Add new pet</span>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-10 gap-5 xl:grid-cols-5 xl:gap-x-8">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <Link to={`/Petshop/${pet._id}`}>
              <img
                src={pet?.image}
                alt={pet?.animalType}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {pet.animalType} - {pet.breed}
              </h2>
              <p className="text-gray-700">
                {pet.size}, {pet.age} years old, {pet.gender}
              </p>
              <Link
                to={`/Petshop/${pet._id}`}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                See more details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Pets;
//➢ home page to show all user added pets

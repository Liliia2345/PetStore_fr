import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/Petshop`)
      .then((res) => setPets(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1 className="title">Pet List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-10 gap-5 xl:grid-cols-5 xl:gap-x-8">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <Link
              to={`${process.env.REACT_APP_SERVER_BASE_URL}/api/Petshop/${pet._id}`}

            >
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

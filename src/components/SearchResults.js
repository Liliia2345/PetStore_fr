import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function SearchResults() {
  const { query } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop/search/${query}`)
      .then((res) => setPets(res.data))
      .catch((e) => console.log(e));
  }, [query]);

    // Show "No results found" message if there are no search results
    if (pets.length === 0) {
        return (
          <div className="flex justify-center items-center h-screen ">
            <h1 className="text-lg text-indigo-500 font-bold"> No results found for "{query}"</h1>
          </div>
        );
      }
      
  return (
    <div className="container mx-auto mt-10 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-10 gap-5 xl:grid-cols-4 xl:gap-x-8 ">
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
                className="mt-4 inline-block bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                See more details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SearchResults;

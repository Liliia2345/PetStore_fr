import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PetsFromAPI() {
  const [petsApi, setPetsApi] = useState([]);

  useEffect(() => {
    axios
      // .get(
      //   `https://api.thecatapi.com/v1/images/search?limit=5&api_key=${process.env.CAT_API_KEY}`
      // )
      .get("https://api.thecatapi.com/v1/images/search?format=json&limit=10", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.CAT_API_KEY}`,
        },
      })
      .then((response) => setPetsApi(response.data))
      .then((res) => console.log(petsApi))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 mt-4 place-items-center">
        <h1 className="title">Pets from API</h1>
        {/* <Link to={"/newPet"}>
          <button className="place-items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
            <span> Add new pet</span>
          </button>
        </Link> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-10 gap-5 xl:grid-cols-5 xl:gap-x-8">
        {petsApi.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <Link to={`/Petsapi/${pet.id}`}>
              <img
                src={pet?.url}
                alt={pet?.url}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{pet.id}</h2>
              <p className="text-gray-700">
                {/* {pet.height}{pet.age} years old, {pet.gender} */}
              </p>
              <Link
                to={`/Petsapi/${pet.id}`}
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
export default PetsFromAPI;
//➢ home page to show all user added pets

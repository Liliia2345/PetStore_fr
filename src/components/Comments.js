/*import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/details.css";
import Comments from "./Comments";
import DeleteMovie from "./DeleteMovie";

export default function PetDetails() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [pet, setPet] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/petshop/${_id}`)
      .then((res) => setMovie(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleRemove = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_BASE_URL}/api/petshop/${_id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };

  const openConfirmation = () => {
    setShowModal(true);
  };

  return (
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between mb-4">
            <h1 className="text-4xl font-bold text-gray-900">{pet.name}</h1>
            <div className="flex items-center">
              <Link to={`/update-pet/${id}`} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:bg-gray-700">
                Edit
              </Link>
              <button
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 focus:bg-red-500"
                onClick={openConfirmation}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
              <img
                className="w-full rounded-lg shadow-lg object-cover object-center"
                src={pet.image}
                alt={pet.name}
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 px-4">
              <div className="flex mb-4">
                <div className="w-1/3">
                  <p className="text-gray-800 font-medium">Type:</p>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{pet.animalType}</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/3">
                  <p className="text-gray-800 font-medium">Breed:</p>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{pet.breed}</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/3">
                  <p className="text-gray-800 font-medium">Size:</p>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-600">{pet.size}</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/3">
                  <p className="text-gray-800 font-medium">Age:</p>
                </div>*/


import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function PetsDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.MONGODB_ATLAS_CONNECTION_STRING}`)
      .then((res) => setPet(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleDelete = (e) => {
    axios
      .delete(
        `${process.env.MONGODB_ATLAS_CONNECTION_STRING}/api/pets/${e.target.value}`
      )
      .then((res) => navigate("/api/pets"))
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <img className="petDetailsImages" src={pet?.image} alt={pet?.breed} />
      <h3 className="pet-name">Pet</h3>
      <h2 className="text-white">{pet?.breed}</h2>
    </div>
  );
}

export default PetsDetails;
//➢ pokemon details to show specific pokemon details from db

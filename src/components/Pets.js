import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Pets() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.MONGODB_ATLAS_CONNECTION_STRING}`)
      .then((res) => setPets(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {pets.map((pet) => (
        <p key={pet._id}>
          <Link to={`/pet/${pet._id}`}>{pet.breed}</Link>
        </p>
      ))}
    </div>
  );
}
export default Pets;
//➢ home page to show all user added pokemons

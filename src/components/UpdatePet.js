import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UpdatePet() {
  const navigate = useNavigate();
  // const [animalType, setAnimalType] = useState("");
  // const [breed, setBreed] = useState("");
  // const [size, setSize] = useState(0);
  // const [age, setAge] = useState(0);
  // const [gender, setGender] = useState("");
  // const [playfulness, setPlayfulness] = useState("");
  // const [care, setCare] = useState("");
  // const [image, setImage] = useState("");
  const [formError, setFormError] = useState("");
  const [formErrorHandler, setFormErrorHandler] = useState("");


  const [updatePet, setUpdatePet] = useState(true);
  // const [Pet, setPet] = useState([]);
  const { _id } = useParams();
  const [Pet, setPet] = useState({
  animalType: "",
  breed: " ",
  size: 0,
  age: 0,
  gender: " ",
  playfulness: 0,
  care:" ",
  image: " ",

     });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop/${_id}`)

       .then((res) => setPet(res.data))
      // .then ((res)=> console.log(res.data))

      .catch((e) => console.log(e));
  },[_id] );

  // const handleUpdate = (e) => {
  //   axios
  //     .put(`${process.env.REACT_APP_BACKEND_URL}/api/petshop/${_id}`, Pet)
  //     .then((res) => navigate("/api/Petshop"))
  //     .catch((e) => console.log(e));
  //   setUpdatePet(!updatePet);
  // };

  // const formErrorHandler = (message) => {
  //   alert(message);
  // };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPet({ ...Pet, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //   Check if animalType is empty
    if (Pet.animalType.trim().length !== 0) {
      console.log("animalType is set");
    } else {
      formErrorHandler("animalType should not be empty!");
      return setFormError(`Please do not send empty animalType`);
    }
    //   Check if breed is empty
    if (Pet.breed.trim().length !== 0) {
      console.log("breed is set");
    } else {
      formErrorHandler("breed should not be empty!");
      return setFormError(`Please do not send empty breed`);
    }
    //   Check if size is empty
    if (Pet.size.toString().trim().length !== 0) {
      console.log("size is set");
    } else {
      formErrorHandler("size should not be empty!");
      return setFormError(`Please do not send empty size`);
    }

    //   Check if age Duration is empty
    if (Pet.age.toString().trim().length !== 0) {
      console.log("age is set");
    } else {
      formErrorHandler("age should not be empty!");
      return setFormError(`Please do not send empty age`);
    }

    //   Check if gender is empty
    if (Pet.gender.trim().length !== 0) {
      console.log("gender is set");
    } else {
      formErrorHandler("gender should not be empty!");
      return setFormError(`Please do not send empty gender`);
    }

    //   Check if playfulness is empty
    if (Pet.playfulness.toString().trim().length !== 0) {
      console.log("playfulness is set");
    } else {
      formErrorHandler("playfulness should not be empty!");
      return setFormError(`Please do not send empty playfulness`);
    }

    //   Check if care is empty
    if (Pet.care.trim().length !== 0) {
      console.log("care is set");
    } else {
      formErrorHandler("care should not be empty!");
      return setFormError(`Please do not send empty care`);
    }

    //   Check if image is empty
    if (Pet.image.trim().length !== 0) {
      console.log("image is set");
    } else {
      formErrorHandler("image should not be empty!");
      return setFormError(`Please do not send empty image url`);
    }

    // axios
    //   .post(`${process.env.REACT_APP_BACKEND_URL}/api/petshop`, {
    //     animalType,
    //     breed,
    //     size,
    //     age,
    //     gender,
    //     playfulness,
    //     care,
    //     image,
    //   })
    //   .then((res) => navigate("/api/Petshop"))
    //   .catch((e) => console.log(e));
  
  axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/api/Petshop/${_id}`, Pet)
      .then((res) => navigate(`/api/Petshop`))
      .catch((e) => console.log(e));
  
    };
  useEffect(() => {
    console.log(formError);
  }, [setFormError]);


  return (
    <div className="place-items-center ">
      <h1 className="title">Update Pet Details</h1>
      <form
        className="w-full max-w-sm place-items-center "
        onSubmit={handleSubmit}
      >
        {/* Animal Type */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="animalType"
            >
              Animal Type
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="animalType"
              name="animalType"
              value={Pet.animalType}
              onChange={handleInput} 
            />
          </div>
        </div>

        {/* breed */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="breed"
            >
              Breed
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="breed"
              name="breed"
              value={Pet.breed}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Size */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="size"
            >
              Size
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="size"
              name="size"
              value={Pet.size}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Age */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="age"
            >
              Age
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="age"
              name="age"
              value={Pet.age}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Gender */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="gender"
            >
              Gender
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="gender"
              name="gender"
              value={Pet.gender}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* playfulness */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="playfulness"
            >
              Playfulness
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="playfulness"
              name="playfulness"
              value={Pet.playfulness}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Care */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="care"
            >
              Care
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="care"
              name="care"
              value={Pet.care}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* Image */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="image"
            >
              Image URL
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="image"
              name="image"
              value={Pet.image}
              onChange={handleInput}
            />
          </div>
        </div>

        {/* update button */}
        <div className="place-items-center">
          <button
            type="submit" //onClick = {handleUpdate}  
            className="bg-gray-800 text-white font-bold py-2 px-5 rounded"
          >
            Update 
          </button>
          <br />
          <br />
          {formError !== "" ? (
            <div style={{ color: "red" }}>{formError}</div>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
}

export default UpdatePet;


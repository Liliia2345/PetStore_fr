import React, { useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

const Search = ({ setResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/Petshop/search/${query}`
      );
      setResults(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center my-8">
      <input
        type="text"
        placeholder="Search for pets..."
        className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Pets from "./components/Pets";
import PetDetails from "./components/PetDetails";
import Footer from "./components/Footer";
import NewPet from "./components/NewPet";
import UpdatePet from "./components/UpdatePet";
import PetFromAPIDetails from "./components/PetsFromAPIDetails";
import PetsFromAPI from "./components/PetsFromAPI";

function App() {
  const [SearchResults, setResults] = useState([]);

  return (
    <div className="App">
      <Header />
      <Search setResults={setResults} />
      <SearchResults SearchResults={searchResults} />
      <div>
        <Routes>
        <Route path="/search/:query" element={<SearchResults />} /> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/api/Petshop" element={<Pets />}></Route>
          <Route path="/Petshop/:_id" element={<PetDetails />}></Route>
          <Route path="/api/Petsapi" element={<PetsFromAPI />}></Route>
          <Route path="/Petsapi/:id" element={<PetFromAPIDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/newPet" element={<NewPet />}></Route>
          <Route path="/updatePet/:_id" element={<UpdatePet />}></Route>
          <Route path="/adopt"></Route>
          <Route path="/donate"></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

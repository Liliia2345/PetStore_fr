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

function App() {
  const [searchResults, setResults] = useState([]);

  return (
    <div className="App">
      <Header />
      <Search handleSearch={handleSearch} />

      <div>
        <Routes>
        <Route path="/search/:query" element={<SearchResults />} /> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/api/Petshop" element={<Pets />}></Route>
          <Route path="/Petshop/:_id" element={<PetDetails />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/newPet" element={<NewPet />}></Route>
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

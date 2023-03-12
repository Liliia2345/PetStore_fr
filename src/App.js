import React from "react";
import "./App.css";
import Pets from "./components/Pets";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/api/pets" element={<Pets />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

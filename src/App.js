import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Pets from "./components/Pets";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/api/Petshop" element={<Pets />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/adopt"></Route>
          <Route path="/donate"></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App

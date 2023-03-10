import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <>
      <nav>
        <NavLink to="/" className="link-item ">
          Home
        </NavLink>
        <NavLink to="/about" className="link-item ">
          About Us
        </NavLink>
        <NavLink to="/adopt" className="link-item">
          Adopt
        </NavLink>
        <NavLink to="/donate" className="link-item">
          Donate
        </NavLink>
        <NavLink to="/contact" className="link-item">
          Contact us
        </NavLink>
        <button id="join" type="button">
          Join Us
        </button>
      </nav>

      <div id="headerBgImg">
        <div className="main_hero">
          <h1 className="text-5XL">Hello!</h1>
          <h1>Welcome to our PetShop</h1>
          <div className="fs-4 px-3 text-2">
            <span style={{ color: "white" }}>
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={1000}
                words={[
                  "Happy pets, happy life.",
                  "Where pets are family.",
                  "Love is a four-legged word.",
                ]}
              />
            </span>
          </div>
          {/* <div id="image_hero">
              <img src={Ateev1} alt="Ateev" className="image_hero" />
            </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;

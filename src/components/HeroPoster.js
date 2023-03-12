import React from "react";
import { Typewriter } from "react-simple-typewriter";
function HeroPoster() {
  return (
    <div id="headerBgImg">
      <div className="main_hero">
        <h1 className="text-5XL">Hello!</h1>
        <h1>Welcome to our PetShop</h1>
        <div>
          <span style={{ color: "orange" }}>
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
  );
}

export default HeroPoster;

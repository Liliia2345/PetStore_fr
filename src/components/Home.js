import React from "react";
import HeroPoster from "./HeroPoster";
import Pets from "./Pets";

// import ImageCarousel from "./ImageCarousel";

export default function Home() {
  return (
    <>
      <HeroPoster />
      {/* <ImageCarousel animalType="Cat" />
      <ImageCarousel animalType="Dog" /> */}
      <Pets />
    </>
  );
}

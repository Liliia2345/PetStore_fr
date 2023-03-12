import React from "react";
import HeroPoster from "./HeroPoster";

function About() {
  return (
    <>
      <HeroPoster />
      <section>
        <h1 className="about-title">About us</h1>
        <p className="about-para">
          Welcome to <b>PetShop! 🐈</b> We're a team of passionate pet owners
          who want to make it easier for people to care for their furry friends.
          We know how much pets mean to their owners, and we're committed to
          providing the best possible service and products to help you keep your
          pets happy and healthy 😍🐶.
        </p>
        <p className="about-para">
          Our app is designed to be simple and intuitive, so you can quickly
          find the products you need and place your order with ease. We offer a
          wide selection of pet food, toys, accessories, and more, so you can
          find everything you need in one place. And if you ever have any
          questions or concerns, our customer service team is here to help.
        </p>
        <p className="about-para">
          We believe in giving back to the pet community, which is why we donate
          a portion of our profits to local animal shelters and rescue
          organizations. We're also committed to reducing our environmental
          impact, so we use eco-friendly packaging whenever possible. Thank you
          for choosing <b>PetShop!</b> We're excited to help you care for your
          beloved pets and be a part of your pet-loving community.
        </p>
      </section>
    </>
  );
}

export default About;

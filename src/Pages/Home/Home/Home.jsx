/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";
import Modal from "../Modal/Modal";

const Home = () => {
  return (
    <div>
      <Modal></Modal>

      <Banner></Banner>
      <About></About>

      <Services></Services>
    </div>
  );
};

export default Home;

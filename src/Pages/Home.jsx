import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import Trending from "../Components/Trending/Trending";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Trending />
      <Footer />
    </div>
  );
};

export default Home;

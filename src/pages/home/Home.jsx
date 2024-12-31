import React from "react";
import HomeSlider from "./HomeSlider";
import Category from "../../components/Category";
import BestSeles from "./BestSeles";
import Fetures from "./Fetures";

import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BookQuill | Home</title>
      </Helmet>
      <HomeSlider />
      <Category />
      <BestSeles />
      <Fetures />
    </div>
  );
};

export default Home;

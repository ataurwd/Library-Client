import React from "react";
import HomeSlider from "./HomeSlider";
import Category from "../../components/Category";
import BestSeles from "./BestSeles";
import Fetures from "./Fetures";

import { Helmet } from "react-helmet";
import FollowSteps from "../../components/FollowSteps";
import Review from "../../components/Review";
import { FcAbout } from "react-icons/fc";
import About from './../../components/About';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BookQuill | Home</title>
      </Helmet>
      <HomeSlider />
      <Fetures />
      <About/>
      <Category />
      <BestSeles />
      <FollowSteps />
      <Review/>
    </div>
  );
};

export default Home;

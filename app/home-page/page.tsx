import React from "react";
import { TextParallaxContentExample } from "./components/hero";
import MissionVision from "./components/mission-vision";
import WhyUs from "./components/why-us";
import OurValues from "./components/our-values";
import Industries from "./components/industries";
import ProductCategoryCarousel from "./components/products";
import Testamonial from "./components/testamonials";

const HomePage = () => {
  return (
    <div className="bg-white">
      <TextParallaxContentExample />
      <MissionVision />
      <OurValues />
      <Industries />
      <Testamonial />
      <WhyUs />
      <ProductCategoryCarousel />
    </div>
  );
};

export default HomePage;

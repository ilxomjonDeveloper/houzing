import React from "react";
import Banner from "../Banner";
import Carousel from "../Carousel";
import Category from "../Category";
import Recent from "../Recent";
import Recommended from "../Recommended";
import Testimonials from "../Testimonials";
import Why from "../Why";
import { Container } from "./style";

const Home = () => {
  return <Container>
    <Carousel />
    <Recommended />
    <Why />
    <Category />
    <Banner />
    <Recent />
    <Testimonials />
  </Container>;
};

export default Home;

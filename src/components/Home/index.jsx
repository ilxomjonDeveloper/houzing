import React from "react";
import Carousel from "../Carousel";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";

const Home = () => {
  return <Container>
    <Carousel />
    <CategoryCard />
  </Container>;
};

export default Home;

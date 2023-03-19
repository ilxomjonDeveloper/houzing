import React from "react";
import { Blur, Container, Content, Img } from "./style";
import Button from '../Generics/Button'
import img2 from "../../assets/img/house2.png";

const Banner = () => {
  return (
    <Container>
      <div>
      <Img src={img2} />
      </div>
      <Blur />
      <Content>
        <Content.Title>Vermont Farmhouse With Antique Jail Is
the Week's Most Popular Home</Content.Title>
        <Button type="primary">Read more</Button>
      </Content>
    </Container>
  );
};

export default Banner;

import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

const contentStyle = {
  height: "571px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const GenCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const slider = useRef();
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") slider.current.prev();
    if (name === "right") slider.current.next();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img2} />
        <Img src={img1} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="subChild">112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow left="true" data-name="left" onClick={onMove} />
      <Arrow data-name="right" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;

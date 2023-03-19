import React from "react";
import Slider from "react-slick";
import { Container, Content, Icon, TestimonialsCard, Wrapper } from "./style";

const Testimonials = () => {
  const settings = {
    // dots: true,
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // dotsClass: "slick-dots",
  };
  return (
    <Container>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 className="title">Testimonials</h1>
        <div className="infoDesc">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </div>
      <Wrapper>
        <Slider {...settings}>
          <TestimonialsCard>
            <Content className="infoDesc" width="380px">
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </Content>
            <Icon.User />
            <div className="subTitle">Ilxomjon Matkurbanov</div>
            <div className="infoDesc">JS Developer</div>
          </TestimonialsCard>
          <TestimonialsCard>
            <Content className="infoDesc" width="380px">
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </Content>
            <Icon.User />
            <div className="subTitle">Ilxomjon Matkurbanov</div>
            <div className="infoDesc">JS Developer</div>
          </TestimonialsCard>
          <TestimonialsCard>
            <Content className="infoDesc" width="380px">
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </Content>
            <Icon.User />
            <div className="subTitle">Ilxomjon Matkurbanov</div>
            <div className="infoDesc">JS Developer</div>
          </TestimonialsCard>
          <TestimonialsCard>
            <Content className="infoDesc" width="380px">
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </Content>
            <Icon.User />
            <div className="subTitle">Ilxomjon Matkurbanov</div>
            <div className="infoDesc">JS Developer</div>
          </TestimonialsCard>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;

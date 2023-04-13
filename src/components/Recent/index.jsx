import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Recent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: 'slick-dots'
  };

  return (
    <Container>
      <Content>
        <h1 className="title">Recent Properties for Rent</h1>
        <div className="infoDesc">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      </Content>
      <Slider className="cards-slick" {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              onClick={() => navigate(`/properties/${value?.id}`)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recent;

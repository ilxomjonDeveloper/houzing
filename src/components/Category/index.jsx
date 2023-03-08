import React, { useEffect, useState } from "react";
import { Container } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);

  const navigate = useNavigate()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        {
          data.map((value)=>{
            return <CategoryCard onClick={() => navigate(`/properties?category_id=${value?.id}`)} key={value.id} data={value} />
          })
        }
      </Slider>
    </Container>
  );
};

export default Category;

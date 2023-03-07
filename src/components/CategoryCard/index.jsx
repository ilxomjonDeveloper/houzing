import React from "react";
import {
  Blur,
  CardBtn,
  CardBtns,
  Container,
  Content,
  Img,
  ImgContainer,
  InfoContainer,
} from "./style";

import categoryImg from "../../assets/img/category.png";

const CategoryCard = ({ data = {} }) => {
  const { name } = data;
  return (
    <Container className="shadow">
      <Img
        src={categoryImg}
        alt="Category Img"
      />
      <Blur />
      <Content>
        {name || "Category Name"}
      </Content>
    </Container>
  );
};

export default CategoryCard;

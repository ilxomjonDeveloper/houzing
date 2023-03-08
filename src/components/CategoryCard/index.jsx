import React from "react";
import {
  Blur,
  Container,
  Content,
  Img,
} from "./style";

import categoryImg from "../../assets/img/category.png";

const CategoryCard = ({ data = {}, onClick }) => {
  const { name } = data;
  return (
    <Container onClick={onClick} className="shadow">
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

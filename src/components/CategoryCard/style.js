import styled from "styled-components";
import { ReactComponent as beds } from "../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../assets/icons/bath.svg";
import { ReactComponent as cars } from "../../assets/icons/car.svg";
import { ReactComponent as rulers } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;
  background: #ffffff;

  border-radius: 3px;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  border-radius: 3px;
`;

const Icons = styled.img``;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`;

export { Container, Img, Content, Icons, Blur };

import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  height: fit-content;
  position: relative;
`;
const Arrow = styled(arrow)`
  z-index: 20;
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  left: ${({ left }) => left && "20px"};
  right: ${({ left }) => !left && "20px"};
  transition: background 0.2s ease;
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 5px;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
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
`;

Content.Title = styled.div`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
`;

Content.Desc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 48px;
`;

Content.Price = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
`;

export { Container, Arrow, Img, Blur, Content };

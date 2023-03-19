import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;
  background: #ffffff;

  margin-left: 60px;
  margin-bottom: 20px;

  border-radius: 3px;
  cursor: pointer;
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

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`;

export { Container, Img, Content, Blur };

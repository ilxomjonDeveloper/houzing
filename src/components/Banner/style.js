import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  position: relative;
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
  background: rgba(0, 0, 0, 0.65);
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
width: 566px;
text-align: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 48px;
`;

export { Container, Img, Blur, Content };

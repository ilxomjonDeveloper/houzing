import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 580px;
  height: 100%;
  max-height: 376px;
  padding: 30px;
  background: #fff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  button {
    width: 100%;
  }
  * {
    margin: 10px 0;
  }
`;

export { Container, Wrapper };

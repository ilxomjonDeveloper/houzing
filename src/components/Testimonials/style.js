import styled from "styled-components";
import { ReactComponent as user } from "../../assets/icons/user2.svg";

const Container = styled.div`
  width: 100%;
  background: #f5f7fc;
  padding: 48px 130px;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1440px;
`;

const TestimonialsCard = styled.div`
  text-align: center;
  width: 380px;
  position: relative;
  margin-left: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  padding: 40px 48px;
  padding-bottom: 61px;
  background-color: #fff;
  margin-bottom: ${({ margin }) => margin && "32px"};
  width: ${({ width }) => (width ? width : "")};
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 10px 50px 0 rgba(13, 38, 59, 0.1);
`;

const Icon = styled.div``;
Icon.User = styled(user)`
  margin-top: -20px;
  margin-bottom: 18px;
`;

export { Container, Content, Wrapper, Icon, TestimonialsCard };

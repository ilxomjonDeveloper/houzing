import React from "react";
import { Button } from "../Generics";
import { Container, Content, FooterInfo, Icon, Line, Logo, Wrapper } from "./style";

const Footer = () => {
  const showTop = () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' })

  }

  return (
    <Container>
      <Wrapper>
        <Content height="276px">
          <Content.Title>Contact Us</Content.Title>
          <Content.Item maxWidth="256px">
            329 Queensberry Street, North Melbourne VIC 3051, Australia.
          </Content.Item>
          <Content.Item>123 456 7890</Content.Item>
          <Content.Item>support@houzing.com</Content.Item>
          <Content.Item>support@houzing.com</Content.Item>
        </Content>
        <Content height="276px">
          <Content.Title>Discover</Content.Title>
          <Content.Item>Chicago</Content.Item>
          <Content.Item>Los Angeles</Content.Item>
          <Content.Item>Miami</Content.Item>
          <Content.Item>New York</Content.Item>
        </Content>
        <Content height="276px">
          <Content.Title>Lists by Category</Content.Title>
          <Content.Item>Apartments</Content.Item>
          <Content.Item>Condos</Content.Item>
          <Content.Item>Houses</Content.Item>
          <Content.Item>Offices</Content.Item>
          <Content.Item>Retail</Content.Item>
          <Content.Item>Villas</Content.Item>
        </Content>
        <Content height="276px">
          <Content.Title>Lists by Category</Content.Title>
          <Content.Item>About Us</Content.Item>
          <Content.Item>Terms & Conditions</Content.Item>
          <Content.Item>Support Center</Content.Item>
          <Content.Item>Contact Us</Content.Item>
        </Content>
      </Wrapper>
      <Line />
      <FooterInfo>
        <Content flex="row"><Logo /><h3>Houzing</h3></Content>
        <Content flex="row">
          <Content.Item marginRight="70px" marginBottom="0px">Copyright © 2021 CreativeLayers. All Right Reserved.</Content.Item>
          <Button onClick={showTop} minWidth="45px" width={45} type="primary"><Icon.Arrow /></Button>
        </Content>
      </FooterInfo>
    </Container>
  );
};

export default Footer;

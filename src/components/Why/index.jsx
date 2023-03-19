import React from "react";
import { Container, Content, Icon, Wrapper } from "./style";

const Why = () => {
  return (
    <Container>
      <Content margin>
        <h1 className="title">Why Choose Us</h1>
        <div className="infoDesc">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Wrapper>
        <Content width="235px">
          <Icon.Message />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="infoDesc">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content width="235px">
          <Icon.Calculator />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="infoDesc">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content width="235px">
          <Icon.House />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="infoDesc">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content width="235px">
          <Icon.Maps />
          <div className="subTitle">Trusted By Thousands</div>
          <div className="infoDesc">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;

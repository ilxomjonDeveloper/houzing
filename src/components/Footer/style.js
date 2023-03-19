import styled from "styled-components";

import { ReactComponent as cardMessage } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

// cardMessage
// calculator
// cardHouse
// cardMaps

const Container = styled.div`
  width: 100%;
  background: #0d263b;
  color: #fff;
`;
const Wrapper = styled.div`
  margin: auto;
  padding: 48px 130px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? flex : "column")};
  align-items: ${({flex}) => flex ? "center" : "start"};
  justify-content: flex-start;
  margin-bottom: ${({ margin }) => margin && "32px"};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
`;

Content.Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : ''};
  margin-right: ${({marginRight}) => marginRight ? marginRight : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? marginBottom : '20px'};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
`

const Icon = styled.div``;

Icon.Message = styled(cardMessage)`
  & path {
    fill: #0061df;
  }
  margin-bottom: 24px;
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
Icon.Arrow = styled(arrow)`
  transform: rotateX(180deg);
`

const FooterInfo = styled.div`
  margin: auto;
  padding: 16px 130px;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

export { Container, Content, Wrapper, Icon, FooterInfo, Logo, Line };

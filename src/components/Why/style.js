import styled from "styled-components";

import { ReactComponent as cardMessage } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

// cardMessage
// calculator
// cardHouse
// cardMaps

const Container = styled.div`
  width: 100%;
  background: #f5f7fc;
  padding: 48px 130px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ margin }) => margin && "32px"};
  width: ${({ width }) => width ? width : ''};
  text-align: center;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

export { Container, Content, Wrapper, Icon };

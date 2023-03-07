import styled from "styled-components";
import {ReactComponent as setting} from "../../assets/icons/setting.svg"
import {ReactComponent as search} from "../../assets/icons/search.svg"
import {ReactComponent as houses} from "../../assets/icons/houses.svg"


const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  margin: auto;
  max-width: 1440px;
`
const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Setting = styled(setting)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
  h1 {
    margin-bottom: 10px;
  }
`
const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  div {
    width: 200px;
  }
`

export {Container, Icons, MenuWrapper, Section};
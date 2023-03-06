import styled from "styled-components";
import { ReactComponent as beds } from "../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../assets/icons/bath.svg";
import { ReactComponent as cars } from "../../assets/icons/car.svg";
import { ReactComponent as rulers } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

const Container = styled.div`
  width: 380px;
  height: 429px;
  background: #ffffff;

  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;
const InfoContainer = styled.div`
  padding: 0px 20px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
`;

const CardBtns = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const CardBtn = styled.button`
  background: ${({ primary }) => (primary ? "#0061df" : "#0D263B")};
  color: #fff;
  border-radius: 3px;
  padding: 5px 12px;
  border: none;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
`;

const MoreInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;
const MoreInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #696969;
`;

const Icons = styled.img``;

Icons.Beds = styled(beds)``;
Icons.Baths = styled(baths)``;
Icons.Cars = styled(cars)``;
Icons.Rulers = styled(rulers)``;
Icons.Resize = styled(resize)`
`;
Icons.Love = styled(love)`
display: flex;
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 50%;
  background-color: #f6f8f9; ;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #e6e9ec;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

CardFooter.Icons = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  justify-content: space-between;
`

export {
  Container,
  Img,
  CardBtns,
  CardBtn,
  ImgContainer,
  InfoContainer,
  MoreInfo,
  MoreInfoItem,
  Icons,
  Line,
  CardFooter,
};

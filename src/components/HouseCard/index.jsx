import React from "react";
import {
  CardBtn,
  CardBtns,
  CardFooter,
  Container,
  Icons,
  Img,
  ImgContainer,
  InfoContainer,
  Line,
  MoreInfo,
  MoreInfoItem,
} from "./style";
import { ReactComponent as beds } from "../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../assets/icons/bath.svg";
import { ReactComponent as cars } from "../../assets/icons/car.svg";
import { ReactComponent as rulers } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";

import noimg from "../../assets/img/noimg.jpeg";

const HouseCard = ({data = {} }) => {
  const { attachments, address, city, country, description, category, houseDetails, price, salePrice } = data;
  return (
    <Container>
      <ImgContainer>
        <Img src={attachments && attachments[0]?.imgPath.includes("https") ? attachments[0]?.imgPath : noimg} alt="home img"/>
        <CardBtns>
          <CardBtn primary>FEATURED</CardBtn>
          <CardBtn>FOR SALE</CardBtn>
        </CardBtns>
      </ImgContainer>
      <InfoContainer>
        <div className="subTitle inline">{city}, {country}, {description}</div>
        <div className="infoDesc between"><span>{address || "Quincy St, Brooklyn, NY, USA"}</span><span>{category?.name || "Category"}</span></div>
        <MoreInfo>
          <MoreInfoItem>
            <Icons.Beds src={beds} />
            <div className="infoDesc">{houseDetails?.beds || 0} Beds</div>
          </MoreInfoItem>
          <MoreInfoItem>
            <Icons.Beds src={baths} />
            <div className="infoDesc">{houseDetails?.bath || 0} Baths</div>
          </MoreInfoItem>
          <MoreInfoItem>
            <Icons.Beds src={cars} />
            <div className="infoDesc">{houseDetails?.garage || 0} Garage</div>
          </MoreInfoItem>
          <MoreInfoItem>
            <Icons.Beds src={rulers} />
            <div className="infoDesc">Area {houseDetails?.area || 0} kv</div>
          </MoreInfoItem>
        </MoreInfo>
      </InfoContainer>
      <Line></Line>
      <CardFooter>
        <div>
          <div className="infoDesc">${salePrice || 0}/mo</div>
          <div className="subTitle">${price || 0}/mo</div>
        </div>
        <CardFooter.Icons>
          <Icons.Resize src={resize} />
          <Icons.Love src={love}/>
        </CardFooter.Icons>
      </CardFooter>
    </Container>
  );
};

export default HouseCard;

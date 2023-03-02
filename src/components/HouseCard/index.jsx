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

const HouseCard = ({ url, title, bed, bath, garage, ruler, info }) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={url || noimg} />
        <CardBtns>
          <CardBtn primary>FEATURED</CardBtn>
          <CardBtn>FOR SALE</CardBtn>
        </CardBtns>
      </ImgContainer>
      <InfoContainer>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="infoDesc">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <MoreInfo>
          <MoreInfoItem>
            <Icons.Beds src={beds} />
            <div className="infoDesc">{bed || 0} Beds</div>
          </MoreInfoItem>
          <MoreInfoItem>
            <Icons.Beds src={baths} />
            <div className="infoDesc">{bath || 0} Baths</div>
          </MoreInfoItem>
          <MoreInfoItem>
            <Icons.Beds src={cars} />
            <div className="infoDesc">{garage || 0} Garage</div>
          </MoreInfoItem>
          <MoreInfoItem>
            <Icons.Beds src={rulers} />
            <div className="infoDesc">{ruler || 0} Sq Ft</div>
          </MoreInfoItem>
        </MoreInfo>
      </InfoContainer>
      <Line></Line>
      <CardFooter>
        <div>
          <div className="infoDesc">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
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

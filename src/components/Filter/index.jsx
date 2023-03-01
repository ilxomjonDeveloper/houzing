import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Button, Input } from "../Generics";
import { Container, Icons, MenuWrapper, Section } from "./style";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const menu = () => (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder="Country" width={200} />
        <Input ref={regionRef} placeholder="Region" width={200} />
        <Input ref={cityRef} placeholder="City" width={200} />
        <Input ref={zipRef} placeholder="Zip code" width={200} />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder="Rooms" width={200} />
        <Input ref={sizeRef} placeholder="Size" width={200} />
        <Input ref={sortRef} placeholder="Sort" width={200} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min Price" width={200} />
        <Input ref={maxPriceRef} placeholder="Max Price" width={200} />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      />
      <Dropdown dropdownRender={menu} placement="bottomRight">
        <div>
          <Button type={"light"}>
            <Icons.Setting /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;

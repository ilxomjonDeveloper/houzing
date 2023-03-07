import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Button, Input } from "../Generics";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";

// id-201 delete

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

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const onChange = ({ target: { name, value } }) => {
    // console.log(name, value)
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = () => (
    <MenuWrapper className="shadow">
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={onChange}
          name="country"
          ref={countryRef}
          placeholder="Country"
          width={200}
        />
        <Input
          defaultValue={query.get("region")}
          onChange={onChange}
          name="region"
          ref={regionRef}
          placeholder="Region"
          width={200}
        />
        <Input
          defaultValue={query.get("city")}
          onChange={onChange}
          name="address"
          ref={cityRef}
          placeholder="City"
          width={200}
        />
        <Input
          defaultValue={query.get("zip_code")}
          onChange={onChange}
          name="zip_code"
          ref={zipRef}
          placeholder="Zip code"
          width={200}
        />
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

  // console.log(useReplace("address", "Tashkent"));

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      />
      <Dropdown dropdownRender={menu} placement="bottomRight" trigger="click">
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

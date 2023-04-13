import { Dropdown } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "../Generics";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";

// id-201 delete

const Filter = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []))
  })

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
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
  const onChangeCategory = (e) => {
    console.log(e.target.value);
    navigate(`/properties/${uzeReplace("category_id", e.target.value)}`);
  };
  const onChangeSort = (sort) => {
    navigate(`/properties/${uzeReplace("sort", sort.target.value)}`);
  }

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
        <Input ref={roomsRef} placeholder="Rooms" defaultValue={query.get("room")}
          onChange={onChange}
          name="room" width={200} />
        <Input ref={sizeRef} placeholder="Size" defaultValue={query.get("size")}
          onChange={onChange}
          name="size" width={200} />
        <select name="sort" onChange={onChangeSort}>
          <option value="asc" selected>O'suvchi</option>
          <option value="desc">Kamayuvchi</option>
        </select>
        <select
          defaultValue={query.get("category_id") || "Select"}
          onChange={onChangeCategory}
        >
          <option value="default" disabled selected>Select Category</option>
          {data.map((value) => {
            return (
              <option value={value?.id} key={value.id}>
                {value?.name}
              </option>
            );
          })}
        </select>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min Price" defaultValue={query.get("min_price")}
          onChange={onChange}
          name="min_price" width={200} />
        <Input ref={maxPriceRef} placeholder="Max Price" defaultValue={query.get("max_price")}
          onChange={onChange}
          name="max_price" width={200} />
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

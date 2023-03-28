import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const {search} = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, [search]);
  const onSelect = (id) => {
    navigate(`/properties/${id}`)
  }
  return (
    <Container>
      {data.map((value) => {
        return <HouseCard onClick={() => onSelect(value.id)} key={value.id} data={value} />;
      })}
    </Container>
  );
};

export default Properties;

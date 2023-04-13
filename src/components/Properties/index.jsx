import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import HouseCard from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        setLoading(true);
        window.scrollTo(0, 0);
      });
  }, [search]);
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <>
      {loading ? (
        <>
          <Content>
            <h1 className="title">Properties</h1>
            <div className="infoDesc">
              Nulla quis curabitur velit volutpat auctor bibendum consectetur
              sit.
            </div>
          </Content>
          <Container>
            {data.map((value) => {
              return (
                <HouseCard
                  onClick={() => onSelect(value.id)}
                  key={value.id}
                  data={value}
                />
              );
            })}
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Properties;

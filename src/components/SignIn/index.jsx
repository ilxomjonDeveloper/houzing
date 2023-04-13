import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import Input from "../Generics/Input";
import Button from "../Generics/Button";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const SignIn = () => {
  const request = useRequest();
  const navigate = useNavigate();
  const [body, setBody] = useState({});

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.success("Successfully logged in!");
  };
  const warning = () => {
    message.warning("Email or password wrong!");
  };

  const onSubmit = async () => {
    console.log(body);
    let res = await request({me: true, url: '/public/auth/login', method: 'POST', body})
    if (res?.authenticationToken) {
      localStorage.setItem("token", res?.authenticationToken)
      navigate("/home");
      info();
    } else warning();
  };

  return (
    <>
      <Container>
        <Wrapper>
          <div className="subTitle">Sign in</div>
          <Input onChange={onChange} placeholder="email" type="email" />
          <Input onChange={onChange} placeholder="password" type="password" />
          <Button onClick={onSubmit} type="primary">
            Login
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default SignIn;

import React, { useState } from "react";
import { Container, Wrapper } from "./style";
import Input from "../Generics/Input";
import Button from "../Generics/Button";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const SignIn = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const request = useRequest();
  const navigate = useNavigate();
  const [body, setBody] = useState({});

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const onSubmit = () => {
    // console.log(body)
    request({
      url: `/public/auth/login`,
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          messageApi.open({
            type: "success",
            content: "Successfully logged in!",
          });
        } else {
          messageApi.open({
            type: "warning",
            content: "Email or password wrong!",
          });
        }
      });
  };

  return (
    <>
      {contextHolder}
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

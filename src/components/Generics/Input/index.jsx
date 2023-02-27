import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  defaultValue,
  value,
  name,
  width,
  height,
}) => {
  return (
    <Container
      defaultValue={defaultValue}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;

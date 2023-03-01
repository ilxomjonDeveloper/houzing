import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      placeholder,
      defaultValue,
      value,
      name,
      width,
      height,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
        ref={ref}
          icon={icon}
          defaultValue={defaultValue}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);

export default Input;

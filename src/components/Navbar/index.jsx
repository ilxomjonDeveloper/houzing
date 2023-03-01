import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import Button from "../Generics/Button";
import { Container, InnerWrapper, Link, Logo, Section, Wrapper } from "./style";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return !hidden && (
                <Link
                  key={index}
                  to={path}
                  className={({ isActive }) => isActive && "active"}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <Button onClick={()=>navigate("/signin")} type="dark">Sign In</Button>
          </Section>
        </InnerWrapper>
      </Wrapper>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;

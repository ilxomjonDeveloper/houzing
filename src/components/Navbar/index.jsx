import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
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
            {navbar.map(({ title, path }, index) => {
              return (
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
            <button>Sign In</button>
          </Section>
        </InnerWrapper>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;

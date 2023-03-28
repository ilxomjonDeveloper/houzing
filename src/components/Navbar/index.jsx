import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import Footer from "../Footer";
import Button from "../Generics/Button";
import { Container, InnerWrapper, Link, Logo, Section, Wrapper } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {location.pathname !== "/signin" && <Button onClick={() => navigate("/signin")} type="dark">
              Sign In
            </Button>}
          </Section>
        </InnerWrapper>
      </Wrapper>
      { location.pathname !== "/signin" && <Filter />}
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;

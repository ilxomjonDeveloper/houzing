import styled from "styled-components";

const getType = ({type}) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  min-width: 120px;
  color: #0d263b;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  /* ${getType} */
  padding-left: ${({icon}) => icon ? "35px" : "20px"};
  outline: none;
  transition: border .2s ease;
  :focus {
    border: 1px solid var(--backgroundPrimary)
  }
  :active {
    border: 1px solid var(--backgroundPrimary)
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`
const Icon = styled.div`
  position: absolute;
  left: 10px;
`

export { Container, Wrapper, Icon };

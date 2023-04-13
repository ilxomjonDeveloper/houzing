import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: var(--padding);
  
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; */

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
`

export { Container, Content };

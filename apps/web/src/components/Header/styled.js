import styled from "styled-components";

export const Container = styled.nav`
  z-index: 1000;
  font-family: var(--font-family);
`;

export const Centralização = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    justify-content: left;
    padding-inline: 20px;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1900px;

  @media (max-width: 2000px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

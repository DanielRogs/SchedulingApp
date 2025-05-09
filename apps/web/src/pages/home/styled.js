import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const LeftBar = styled.div`
  width: 450px;
  margin-right: 50px;
  height: 100vh;
  background: var(--secondary-color);
  padding-inline: 25px;
  padding-block: 20px;
  position: relative; /* necessário para posicionar o pseudo-elemento */

  box-shadow: -20px 0px 100px 0px black;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px; /* altura do degradê */
    background: linear-gradient(to top, #2eb600, transparent);
    pointer-events: none;
    z-index: 1;
  }

  .reservation-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    position: relative;
    z-index: 2; /* garante que os elementos fiquem acima do degradê */
  }

  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 2px var(--primary-color);
  }
`;

export const Content = styled.div`
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
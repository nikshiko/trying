import styled, { createGlobalStyle } from "styled-components";

const StyledLayout = styled.div`
  height: 100%;
  box-sizing: border-box;
`;

export const GlobalStyle = createGlobalStyle`
   * {
     padding: 0;
     margin: 0;
     box-sizing: box-shadow;
     font-family: 'Press Start 2P', cursive;
   }
   html, body {
     height: 100%;
   }
  #root {
    height: 100%;
  }
  `;
export default StyledLayout;

import React from "react";
import StyledLayout, { GlobalStyle } from "./styled";

export default function Layout(props) {
  return (
    <StyledLayout>
      <GlobalStyle />
      {props.children}
    </StyledLayout>
  );
}

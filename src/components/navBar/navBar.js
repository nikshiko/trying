import React, { useState } from "react";
import { StyledNavBar, StyledList, StyledLink } from "./styled";

export default function NavBar() {
  const [isMenuOpen, toggleMenu] = useState(false);

  function handleClick() {
    toggleMenu(!isMenuOpen);
  }
  return (
    <StyledNavBar isMenuOpen={isMenuOpen}>
      <StyledList isMenuOpen={isMenuOpen}>
        <div>
          <img
            src="https://img.icons8.com/cotton/64/000000/menu.png"
            alt="click here to  collapse"
            onClick={handleClick}
          />
        </div>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>

          <li>
            <StyledLink to="/photos">Photos</StyledLink>
          </li>

          <li>Projects</li>
          <li>Blogs</li>
          <li>Learnings</li>
        </ul>
      </StyledList>
    </StyledNavBar>
  );
}

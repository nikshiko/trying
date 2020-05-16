import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.div`
  text-decoration: none;

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledList = styled.div`
  img {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    list-style: none;
    perspective: 2000;
  }
  ul li {
    padding: 10px;
    margin: 20px;
    transform: rotateY(40deg);
    transition: all 0.5s;
    box-shadow: 1px 1px 10px 1px black;
  }

  ul li:hover {
    transform: scale(1.5) rotateY(-40deg);
    box-shadow: 1px solid black;
  }

  @media (max-width: 700px) {
    position: relative;
    z-index: 2;
    font-size: 200%;
    color: black;
    height: 100%;
    margin: 0;
    width: 100%;
    img {
      display: block;
      margin-left: 80%;
      cursor: pointer;
    }
    ul {
      height: 100%;
      margin-left: ${props => (props.isMenuOpen ? "0" : "-120%")};
      transition: margin-left 0.3s ease-in-out;
      width: 100%;
      background-color: whitesmoke;
      padding: 0;
      max-width: 100%;
      flex-direction: column;
      text-decoration: none;
      list-style: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

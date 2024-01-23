import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 8vh;
  width: calc(100% - 1.5rem);
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
  width: 40%;
  height: 100%;
  margin-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  z-index: 10000;
  @media (max-width: 913px) {
    margin-right: 0px;
    width: 6rem;
  }
`;

export const StyledNavBar = styled.div`
  width: 100%;
  z-index: 10000;
  text-align: center;

  @media screen and (max-width: 912px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    transform: translateX(110%);
    /* transition: transform 0.5s ease-in, opacity 1s ease-in; */
    opacity: 0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    width: 85%;

    @media screen and (max-width: 912px) {
      background-color: hsl(0, 0%, 98%);
      position: absolute;
      right: 0;
      top: 0;
      width: 65%;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 10rem 0 0 3rem;
      gap: 3rem;
      transform: translateX(110%);
    }

    & li {
      list-style: none;
      margin-left: 10px;
      margin-right: 10px;
    }

    & li a {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      color: black;
      &:hover {
        color: hsl(0, 0%, 8%);
      }
    }
  }

  &.active {
    transform: translateX(0%);
    opacity: 1;

    & > ul {
      transform: translateX(0%);
      transition: transform 0.3s ease-in, opacity 1s ease-in;
    }
  }

  img {
    transition: transform 0.3s ease-in-out;
  }

  .icon-rotate {
    transform: rotateZ(180deg);
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledSignUp = styled.div`
  width: 25%;
  gap: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a:hover {
    color: "hsl(0, 0%, 8%)";
  }

  @media screen and (max-width: 912px) {
    a,
    button {
      display: none;
    }
  }
`;

export const StyledBurger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 4;
  margin-left: 15px;

  @media screen and (min-width: 914px) {
    display: none;
  }
`;

export const StyledDropdown = styled.div`
  height: 160px;
  width: 153px;
  position: absolute;
  transform: translateX(500%);
  z-index: 1000;
  margin-top: 30px;

  .dropdown-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px;

    li {
      display: flex;
      width: 80%;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      color: hsl(0, 0%, 41%);
      font-size: 1.2rem;
    }

    img {
      width: 15px;
      height: 15px;
    }
  }

  &.dropdown-active {
    position: relative;
    transform: translateX(0%);
    transition: transform 0.5s ease-in-out;
  }

  @media screen and (min-width: 670px) {
    top: 8vh;
    background-color: #fff;
    height: 160px;
    width: 153px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: translateX(-40%);

    &.company {
      width: 116px;
      height: 128px;
      transform: translateX(-10%);
    }

    &.dropdown-active {
      opacity: 1;
      position: absolute;
      transform: translateX(-40%);

      &.company {
        transform: translateX(-10%);
      }
    }
  }
`;

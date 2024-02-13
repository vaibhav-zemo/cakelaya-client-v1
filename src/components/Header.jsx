import styled from "styled-components";
import Button from "./shared/Button";
import {
  StyledHeader,
  StyledNav,
  StyledNavBar,
  StyledSignUp,
  StyledBurger,
  StyledDropdown,
} from "./styles/Header.styled";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logOut } from "../redux/userRedux";
import { placeCity } from "../redux/cityRedux";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import { removeProduct } from "../redux/cartRedux";

const Filter = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  @media (max-width: 820px) {
    width: 0px 20px;
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media (max-width: 820px) {
    margin-right: 0px;
  }
`;

const City = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 40px;
  width: 100%;
  justify-content: space-around;
  padding: 0px;
  button {
    border: 2px solid black;
    padding: 5px;
    width: 100px;
    text-align: center;
    background: none;
    font-size: 15px;
    cursor: pointer;
  }
`;

const Pop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  div {
    background-color: rgb(255, 255, 255);
    opacity: 1;
    width: auto;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0px;
    flex-direction: column;
    border: 2px solid lightgray;
    padding: 0px 50px;
    span {
      width: auto;
      margin: 0px auto;
    }
  }
`;

const Left = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  width: 168px;
  margin-left: 10px;

  img {
    width: 100%;
    @media (max-width: 786px) {
      width: 100%;
    }
  }
`;

const MenuItem = styled.a`
  color: black;
  cursor: pointer;
  z-index: 1000;
`;

const List = styled.ul`
  z-index: 1000;
  top: 4.5vh;
  background-color: #fff;
  position: absolute;
  height: 200px;
  width: 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export default function Header() {
  // on small screens, display nav on burger icon

  const quantity = useSelector((state) => state.cart.quantity);
  const [city, setCity] = useState("Sultanpur");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [icon, setIcon] = useState(true);
  const [navStatus, setNavStatus] = useState("navbar-container");
  const location = useLocation();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSDD, setIsOpenSDD] = useState(false);

  const handleNav = () => {
    if (navStatus === "navbar-container") {
      setNavStatus("active");
      setIcon(true);
    } else {
      setNavStatus("navbar-container");
      setIcon(false);
    }
  };

  // display dropdown menu for feature/company icon
  const handleDropdown = (e) => {
    const features = document.querySelector(".features");
    const company = document.querySelector(".company");
    const iconFeatures = document.querySelector(".icon-features");
    const iconCompany = document.querySelector(".icon-company");

    if (e.target.classList.contains("link-features")) {
      features.classList.toggle("dropdown-active");
      iconFeatures.classList.toggle("icon-rotate");
    } else if (e.target.classList.contains("link-company")) {
      company.classList.toggle("dropdown-active");
      iconCompany.classList.toggle("icon-rotate");
    }
    setIsOpenSDD(!isOpenSDD);
  };

  const handleClick = () => {
    dispatch(logOut());
    window.location.href = process.env.REACT_APP_BASE_URL;
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne?.current?.contains(e.target)) {
      if (navStatus === "active") {
        setNavStatus("navbar-container");
        setIcon(true);
      }
    }
  };

  var body = document.body,
    html = document.documentElement;

  const goToTop = () => {
    window.scrollTo({
      top: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      ),
      behavior: "smooth",
    });
  };

  let flag = user ? true : false;
  let admin = false,
    merchant = false;
  if (flag) {
    admin = user.isAdmin ? true : false;
    merchant = user.isMerchant ? true : false;
  }

  return (
    <StyledHeader>
      <div style={{ display: "flex" }}>
        <Left
          href={
            location.pathname === "/gift" ||
            location?.state?.prevPath === "/gift"
              ? "/gift"
              : "/"
          }
        >
          <img
            src="/images/Mainlogo.png"
            alt=""
            style={{ marginTop: "-4px" }}
          />
        </Left>
      </div>
      <StyledNav>
        <StyledNavBar className={navStatus}>
          <ul className="navbar" ref={refOne}>
            <li>
              {location.pathname !== "/gift" &&
                location?.state?.prevPath !== "/gift" && (
                  <a className="link-features" href="/gift">
                    Gift Engine
                  </a>
                )}
              {(location.pathname === "/gift" ||
                location?.state?.prevPath === "/gift") && (
                <a className="link-features" href="/">
                  Home
                </a>
              )}
            </li>
            <li>
              <a
                className="link-company"
                onClick={(e) => {
                  handleDropdown(e);
                  if (isOpen) setIsOpen(false);
                }}
                style={{ cursor: "pointer" }}
              >
                Account
                <img
                  className="icon-company"
                  src="/images/icon-arrow-down.svg"
                  alt=""
                />
              </a>
              <StyledDropdown className="dropdown company">
                <ul className="dropdown-menu">
                  {user && <MenuItem href="/profile">My Profile</MenuItem>}
                  <MenuItem
                    onClick={() => {
                      history.push({
                        pathname: "/myorders",
                        state: { prevPath: location.pathname },
                      });
                    }}
                  >
                    My Orders
                  </MenuItem>
                  {admin && (
                    <MenuItem
                      onClick={() => {
                        history.push({
                          pathname: "/headq",
                          state: { prevPath: location.pathname },
                        });
                      }}
                    >
                      Admin
                    </MenuItem>
                  )}
                  {merchant && (
                    <MenuItem
                      onClick={() => {
                        history.push({
                          pathname: "/inventory",
                          state: { prevPath: location.pathname },
                        });
                      }}
                    >
                      Admin
                    </MenuItem>
                  )}

                  {user && <MenuItem onClick={handleClick}>Sign Out</MenuItem>}
                  {!user && <MenuItem href="/login">Sign In</MenuItem>}
                </ul>
              </StyledDropdown>
            </li>
            <li style={{ position: "relative" }}>
              <a
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer" }}
              >
                More
                <img
                  src="/images/icon-arrow-down.svg"
                  alt=""
                  style={{
                    transform: isOpen ? "rotateZ(180deg)" : "",
                    transition: isOpen ? "transform 0.3s ease-in-out" : "",
                  }}
                />
              </a>
              <List style={{ display: isOpen ? "flex" : "none" }}>
                <li>
                  <MenuItem
                    onClick={() => {
                      history.push({
                        pathname: "/about",
                        state: { prevPath: location.pathname },
                      });
                    }}
                  >
                    About Us
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    onClick={() => {
                      history.push({
                        pathname: "/privacy",
                        state: { prevPath: location.pathname },
                      });
                    }}
                  >
                    Privacy Policy
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    onClick={() => {
                      history.push({
                        pathname: "/return",
                        state: { prevPath: location.pathname },
                      });
                    }}
                  >
                    Return Policy
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    onClick={() => {
                      history.push({
                        pathname: "/shipping",
                        state: { prevPath: location.pathname },
                      });
                    }}
                  >
                    Shipping Policy
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    onClick={() => {
                      history.push({
                        pathname: "/refund",
                        state: { prevPath: location.pathname },
                      });
                    }}
                  >
                    Refund Policy
                  </MenuItem>
                </li>
                <li>
                  <MenuItem
                    onClick={() => {
                      history.push({
                        pathname: "/term",
                        state: { prevPath: location.pathname },
                      });
                    }}
                  >
                    T&C
                  </MenuItem>
                </li>
              </List>
            </li>
            <li>
              <a onClick={goToTop} style={{ cursor: "pointer" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </StyledNavBar>
        {location.pathname !== "/gift" &&
          location?.state?.prevPath !== "/gift" && (
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          )}
        <StyledBurger onClick={() => handleNav()}>
          <img
            className="icon-burger"
            src={icon ? "/images/icon-menu.svg" : "/images/icon-close-menu.svg"}
            alt="Navigation bar"
          />
        </StyledBurger>
      </StyledNav>
    </StyledHeader>
  );
}

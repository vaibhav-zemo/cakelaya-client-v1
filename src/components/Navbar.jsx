import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userRedux";
import { placeCity } from "../redux/cityRedux";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 786px) {
    padding: 10px 0px;
  }
`;

const Left = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;

  img {
    @media (max-width: 786px) {
      width: 100%;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 786px) {
    flex: 2;
    justify-content: center;
    margin-right: 12px;
  }
  #customized {
    @media (max-width: 786px) {
      text-align: center;
      width: 65px;
    }
  }
`;

const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 786px) {
    font-size: 12px;
    margin-left: 6px;
  }

  .downList {
    list-style: none;
    border: 2px solid lightgray;
    flex-direction: column;
    align-items: left;
    position: absolute;
    padding: 10px 5px;
    gap: 10px;
    background-color: #ffff;
    margin-top: 130px;
    z-index: 3;

    a {
      text-decoration: none;
      color: black;
      margin-left: 0px;
      width: 70px;
    }

    a:hover {
      color: red;
    }
  }
`;

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

const Filter = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: -5px;
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

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [city, setCity] = useState("Sultanpur");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [open, setOpen] = useState(true);
  const [openAc, setOpenAc] = useState(true);
  const [state, setState] = useState(city);
  const location = useLocation();

  const handleChange = () => {
    setState(undefined);
  };

  const toggle = () => {
    setOpen(!open);
    setOpenAc(true);
  };

  const toggleAc = () => {
    setOpenAc(!openAc);
    setOpen(true);
  };

  const handleClick = () => {
    dispatch(logOut());
    window.location.href = "https://cakelaya-client-v1.vercel.app/";
  };

  const handleClick2 = (e) => {
    const temp = e.target.innerHTML;
    dispatch(placeCity({ temp }));
    setState(temp);
  };

  let flag = user ? true : false;
  let admin = false,
    merchant = false;
  if (flag) {
    admin = user.isAdmin ? true : false;
    merchant = user.isMerchant ? true : false;
  }

  return (
    <Container>
      <Wrapper>
        <div style={{ display: "flex" }}>
          <Left href="/">
            <img
              src="/images/logoS.png"
              alt=""
              width={"200px"}
              style={{ "margin-top": "-4px" }}
            />
          </Left>
        </div>
        <Right>
          <MenuItem id="customized" href="/customized">
            Customized Cake
          </MenuItem>
          <MenuItem onClick={toggleAc}>
            Account
            <Icon icon="gridicons:dropdown" width="40" height="40" />
            <ul
              className="downList"
              style={{ display: openAc ? "none" : "flex" }}
            >
              <MenuItem href="/myorders">My Orders</MenuItem>
              {admin && <MenuItem href="/headq">Admin</MenuItem>}
              {merchant && <MenuItem href="/inventory">Admin</MenuItem>}
              {user && <MenuItem onClick={handleClick}>Sign Out</MenuItem>}
              {!user && <MenuItem href="/login">Sign In</MenuItem>}
            </ul>
          </MenuItem>
          <MenuItem onClick={toggle}>
            Reach Us
            <Icon icon="gridicons:dropdown" width="40" height="40" />
            <ul
              className="downList"
              style={{ display: open ? "none" : "flex" }}
            >
              <a href="/about">About Us</a>
              <a onClick={goToTop}>Contact Us</a>
            </ul>
          </MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

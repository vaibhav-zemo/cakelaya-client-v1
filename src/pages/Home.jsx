import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { placeCity } from "../redux/cityRedux";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import Header from "../components/Header";
// import addNotification from "react-push-notification";
// import { Notifications } from "react-push-notification";

const Container = styled.div`
`;

const Head = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0px auto;
  font-size: 50px;
  background-color: teal;
  padding: 10px 0px;
  color: white;
  margin-top: 10px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  @media (max-width: 820px) {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
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

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media (max-width: 786px) {
    margin: 10px 0px;
  }
`;
const Option = styled.option`
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
    div{
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
      span{
        width: auto;
        margin: 0px auto;
      }
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
    button{
      border: 2px solid black;
      padding: 5px;
      width: 100px;
      text-align: center;
      background: none;
      font-size: 15px;
      cursor: pointer;
    }
`;

const Home = () => {
  const cat = "All";
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const dispatch = useDispatch();
  const ccity = useSelector((state) => state.city);
  const [state, setState] = useState(ccity.city);
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // (function () {
  //   addNotification({
  //     title: "Warning",
  //     native: true,
  //   });
  // })();;

  const handleClick = (e) => {
    const temp = e.target.innerHTML;
    dispatch(
      placeCity({ temp })
    );
    setState(temp);
  }

  return (
    <Container>
      {/* {!state &&
        <Pop>
          <Filter>
            <FilterText>Select Your City</FilterText>
            <City>
              <button onClick={handleClick}>Sultanpur</button>
              <button onClick={handleClick}>Noida</button>
            </City>
          </Filter>
        </Pop>
      } */}
      <Announcement />
      {/* <Navbar /> */}
      <Header />
      <Slider />
      {/* <Head>Cakeलाया ? Special</Head> */}
      {/* <Categories /> */}
      <Head>All our Products</Head>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option>Quantity</Option>
            <Option>0.5 Kg</Option>
            <Option>1 Kg</Option>
            {state == "Sultanpur" &&<Option>1.5 Kg</Option>}
            {state == "Sultanpur" &&<Option>2 Kg</Option>}
            {state == "Sultanpur" &&<Option>2.25 L</Option>}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default Home;

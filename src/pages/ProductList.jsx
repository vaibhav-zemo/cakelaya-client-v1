import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Vortex } from "react-loader-spinner";
import Header from "../components/Header";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  @media (max-width: 786px) {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media (max-width: 786px) {
    margin-right: 0px;
  }
`;

const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  @media (max-width: 786px) {
    margin: 10px 0px;
  }
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const { isFetching } = useSelector((state) => state.loader);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  document.documentElement.scrollTop = 0;

  return (
    <Container>
      <Announcement />
      <Header />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option>Quantity</Option>
            {cat !== "Designer" &&
              cat !== "Valentine's" &&
              cat !== "FB" &&
              cat !== "Pastries" && <Option>0.5 Kg</Option>}
              
            {cat !== "FB" && cat !== "Pastries" && <Option>1 Kg</Option>}

            {(cat === "Designer" || cat === "BN") && <Option>1.5 Kg</Option>}
            {cat!=="Pastries" && cat!=="FB" && <Option>2 Kg</Option>}
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
      {isFetching && (
        <Loading>
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </Loading>
      )}
      <Footer />
    </Container>
  );
};

export default ProductList;

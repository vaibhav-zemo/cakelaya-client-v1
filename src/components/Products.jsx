import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { loadStart, loadSuccess } from "../redux/productRedux";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.city);
  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(loadStart());
        const res = await axios.get(
          cat
            ? `https://cakelaya.com/api/products?category=${cat}`
            : "https://cakelaya.com/api/products"
        );
        setProducts(
          res.data.filter((item) => {
            for (let i in item.location) {
              return item.location[i] == city;
            }
          })
        )
        dispatch(loadSuccess());
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (filters.size == "Quantity") {
      setFilteredProducts(
        products
      )
      return;
    }
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price[0] - a.price[0])
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price[0] - b.price[0])
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} cat={cat} key={item.id} filters={filters} />)
        : products
          .slice(0, products.length)
          .map((item) => <Product item={item} cat={cat} key={item.id} filter={filters} />)}
    </Container>
  );
};

export default Products;

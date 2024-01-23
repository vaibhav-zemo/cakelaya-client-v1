import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.ul`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
`;

const Box = styled.li`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  flex-direction: column;
  border: 2px solid whitesmoke;
  height: 270px;
  margin-top: 0px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Head = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0px auto;
  font-size: 50px;
  /* background-color: teal; */
  padding: 10px 0px;
  color: black;
  margin-top: 10px;
`;

const Button = styled.button`
  height: 50px;
  border: none;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  font-size: 20px;
  width: 50%;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 820px) {
    width: 100%;
  }
`;

const Success = ({ values }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.post(
        "https://cakelaya.com/api/gift/getGifts",
        values
      );
      setProducts(res.data);
      // console.log(res.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Head>You are done!</Head>
      <Container>
        {products.map((item) => {
          return (
            <Box>
              <iframe
                className="border-[3px] bg-white rounded-3xl w-9"
                sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                style={{ width: "120px", height: "240px", border: "none" }}
                src={item["Affiliate Link"].replace(/"/g, "")}
              ></iframe>
            </Box>
          );
        })}
      </Container>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Button onClick={() => (window.location.href = "/gift")}>
          Start Again
        </Button>
      </div>
    </div>
  );
};

export default Success;

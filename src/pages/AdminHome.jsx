import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

// import { Notifications } from 'react-push-notification';
// import addNotification from 'react-push-notification';

const Container = styled.div`
  margin: 10px;
  padding: 0px;
`;

const Head = styled.h1`
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
  z-index: -1;
`;

const Card = styled.div`
  /* background-color: whitesmoke; */
  margin-top: 10px;
  border: 2px solid lightgray;
  border-radius: 25px;
  padding: 10px 20px;
  button {
    margin-top: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 25px;
    padding: 10px;
    color: white;
    font-weight: 800;
    /* background-color: red; */
  }
`;

const Detail = styled.div`
  margin-top: 5px;
`;

const Product = styled.li`
  text-decoration: none;
  display: flex;
  margin-top: 15px;
`;

const Products = styled.div`
  margin-top: 15px;
  display: none;
`;

const Summary = styled.div`
  margin-left: 15px;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Home = () => {
  const [order, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        let res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (error) {
        console.log("Error While Fetching", error);
      }
    };
    getOrders();
  });

  // function successNotification (){
  //   addNotification({
  //     title: 'Success',
  //     subtitle: 'You have successfully submitted',
  //     message: 'Welcome to GeeksforGeeks',
  //     theme: 'light',
  //     closeButton:"X",
  //     backgroundTop:"green",
  //     backgroundBottom:"yellowgreen"
  //   })
  // };

  const handleClick = (i) => {
    const element = document.getElementById(i).style.display;
    const idx = "bnt2-" + i;
    if (element === "block") {
      document.getElementById(i).style.display = "none";
      document.getElementById(idx).innerHTML = "See More";
    } else {
      document.getElementById(i).style.display = "block";
      document.getElementById(idx).innerHTML = "See Less";
    }
  };

  const updateApp = async (id) => {
    try {
      await userRequest.put("/orders/" + order[id]._id);
      const idx = "bnt-" + id;
      document.getElementById(idx).style.backgroundColor = "lightgreen";
    } catch (error) {}
  };

  const updateDeli = async (id) => {
    try {
      await userRequest.put("/orders/deliver/" + order[id]._id);
      const idx = "bnt3-" + id;
      document.getElementById(idx).style.backgroundColor = "lightgreen";
    } catch (error) {}
  };

  const updateReq = async (id) => {
    try {
      await userRequest.put("/orders/reject/" + order[id]._id);
      const idx = "bnt3-" + id;
      document.getElementById(idx).style.backgroundColor = "lightgreen";
    } catch (error) {}
  };

  return (
    <Container>
      <Header />
      {order.length === 0 ? (
        <Head>No Orders</Head>
      ) : (
        <div>
          {order.map((item, i) => (
            <Card key={i}>
              <Detail>
                <b>Order ID</b>: {item._id}
              </Detail>
              <Detail>
                <b>Order Placed At</b>:{" "}
                {item.orderTime ? item.orderTime : item.name.split("*")[1]}
              </Detail>
              <br></br>
              <Detail>
                <b>Name</b>: {item.name.split("*")[0]}
              </Detail>
              <Detail>
                <b>Mobile Number</b>:{" "}
                <Link
                  onClick={() => {
                    window.location.href = `tel:${item.number}`;
                  }}
                >
                  {item.number}
                </Link>
              </Detail>
              <Detail>
                <b>Address</b>: {item.address}
              </Detail>
              <Detail>
                <b>Name on Cake</b>: {item.cakeName}
              </Detail>
              <Detail>
                <b>Delivery Time</b>: {item.time}
              </Detail>
              <Detail>
                <b>Occasion Type</b>: {item.occassion}
              </Detail>
              <button
                id={"bnt-" + i}
                onClick={() => updateApp(i)}
                style={{
                  backgroundColor:
                    item.status === "approve" ? "lightgreen" : "red",
                }}
              >
                Approve
              </button>
              <button
                id={"bnt3-" + i}
                onClick={() => updateReq(i)}
                style={{
                  backgroundColor:
                    item.delivered === "approve" ? "lightgreen" : "red",
                }}
              >
                Reject
              </button>
              <button
                id={"bnt3-" + i}
                onClick={() => updateDeli(i)}
                style={{
                  backgroundColor:
                    item.delivered === "approve" ? "lightgreen" : "red",
                }}
              >
                Delivered
              </button>
              <button
                id={"bnt2-" + i}
                onClick={() => handleClick(i)}
                style={{ color: "black" }}
              >
                See More
              </button>
              <Products id={i}>
                <h1>Products</h1>
                {item.products.map((product, j) => (
                  <Product key={j}>
                    <img src={product.img} alt="" width="100px" />
                    <Summary>
                      <Detail>
                        <b>Name</b>: {product.productId}
                      </Detail>
                      <Detail>
                        <b>Flavour</b>: {product.flavour}
                      </Detail>
                      <Detail>
                        <b>Quantity</b>: {product.quantity}
                      </Detail>
                      <Detail>
                        <b>Size</b>: {product.size}
                      </Detail>
                    </Summary>
                  </Product>
                ))}
              </Products>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Home;

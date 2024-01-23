import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useSelector } from "react-redux";

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
  blink {
    background-image: linear-gradient(
      to left,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red
    );
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 900;
    animation: 2s linear infinite condemned_blink_effect;
    @keyframes condemned_blink_effect {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0.5;
      }
      50% {
        opacity: 0;
      }
      75% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
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
  const city = useSelector((state) => state.city.city);
  const [click, setClick] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      try {
        let res = await userRequest.get("/orders/headapp");
        setOrders(res.data);
      } catch (error) {
        console.log("Error While Fetching", error);
      }
    };
    getOrders();
  },[click]);

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
    setClick(prev => prev + 1)
    try {
      await userRequest.put("/orders/headapp/" + order[id]._id, { city: city });
      const idx = "bnt-" + id;
    } catch (error) {}
  };

  const updateDeli = async (id) => {
    setClick(prev => prev + 1)
    try {
      await userRequest.put("/orders/deliver/" + order[id]._id);
      const idx = "bnt3-" + id;
      document.getElementById(idx).style.backgroundColor = "lightgreen";
    } catch (error) {}
  };

  const updateStock = async (id) => {
    setClick(prev => prev + 1)
    try {
      await userRequest.delete("/orders/" + order[id]._id);
      const idx = "bnt3-" + id;
      document.getElementById(idx).style.backgroundColor = "lightgreen";
    } catch (error) {}
  };

  const updateReq = async (id) => {
    setClick(prev => prev + 1)
    try {
      await userRequest.put("/orders/headapp/reject/" + order[id]._id);
      const idx = "bnt-" + id;
    } catch (error) {}
  };

  const updateRemove = async (id) => {
    setClick(prev => prev + 1)
    try {
      await userRequest.put("/orders/headapp/remove/" + order[id]._id);
      const idx = "bnt-" + id;
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
                <b>Restaurant Update</b>:
                {item.status == "pending" && (
                  <blink> YET TO BE ACCEPTED!</blink>
                )}
                {item.status == "approve" && <blink> ORDER ACCEPTED!</blink>}
                {item.status == "reject" && <blink> ORDER REJECTED!</blink>}
              </Detail>
              <Detail>
                <b>Customer Update</b>:
                {item.headApp == "amount" && (
                  <blink>
                    {" "}
                    AWAITING PAYMENT CONFIRMATION FROM THE BANK! ORDER NOT
                    CONFIRMED YET!
                  </blink>
                )}
                {item.headApp == "pending" && (
                  <blink>
                    {" "}
                    PAYMENT SUCCESSFUL! ORDER CONFIRMED! ORDER YET TO BE
                    ACCEPTED BY THE RESTAURANT!
                  </blink>
                )}
                {item.headApp == "approve" && item.delivered == "pending" && (
                  <blink>
                    {" "}
                    ORDER ACCEPTED BY THE RESTAURANT! YOUR ORDER IS BEING
                    PREPARED!
                  </blink>
                )}
                {item.headApp == "reject" && (
                  <blink>
                    {" "}
                    ORDER REQUEST REJECTED! AMOUNT IF DEDUCTED, WILL BE
                    REFUNDED!
                  </blink>
                )}
                {item.delivered == "approve" && <blink> DELIVERED</blink>}
              </Detail>
              <br></br>
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
              <br></br>
              <Detail>
                <b>Amount Paid</b>: ₹ {item.amount}
              </Detail>

              <button
                id={"bnt-" + i}
                onClick={() => updateApp(i)}
                style={{
                  backgroundColor:
                    item.headApp === "approve" ? "lightgreen" : "red",
                }}
              >
                Approve
              </button>

              <button
                id={"bnt-" + i}
                onClick={() => updateReq(i)}
                style={{
                  backgroundColor:
                    item.headApp === "reject" ? "lightgreen" : "red",
                }}
              >
                Reject
              </button>
              <button
                id={"bnt-" + i}
                onClick={() => updateDeli(i)}
                style={{
                  backgroundColor:
                    item.delivered === "approve" ? "lightgreen" : "red",
                }}
              >
                Delivered
              </button>
              <button
                id={"bnt-" + i}
                onClick={() => updateStock(i)}
                style={{ backgroundColor: "red" }}
              >
                Delete
              </button>
              <button
                id={"bnt-" + i}
                onClick={() => updateRemove(i)}
                style={{ backgroundColor: "red" }}
              >
                Remove
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

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Header from "../components/Header";

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

const Topic = styled.h1`
  width: 90%;
  text-align: left;
  margin-left: 15px;
  font-size: 35px;
  padding: 10px 0px;
  color: black;
  margin-top: 10px;
  font-weight: 500;
`;
const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Home = () => {
  const [order, setOrders] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getOrders = async () => {
      try {
        let res = await userRequest.get("/orders/find/" + user.currentUser._id);
        setOrders(res.data);
      } catch (error) {
        console.log("Error While Fetching", error);
      }
    };
    getOrders();
  });

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

  return (
    <div>
      <Announcement />
      <Header />
      <Topic>MY ORDERS</Topic>
      <Container>
        {order.length === 0 ? (
          <Head>No Orders</Head>
        ) : (
          <div>
            {order.map((item, i) => (
              <Card key={i}>
                <Detail>
                  <b>Order Status</b>:
                  {item.headApp == "amount" && (
                    <blink>
                      {" "}
                      AWAITING PAYMENT CONFIRMATION FROM THE BANK! ORDER NOT
                      CONFIRMED YET!
                    </blink>
                  )}
                  {item.headApp == "pending" &&
                    item.delivered !== "approve" && (
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
                  {item.delivered == "approve" && <blink> DELIVERED</blink>}
                  {item.headApp == "reject" && (
                    <blink>
                      {" "}
                      ORDER REQUEST REJECTED! AMOUNT IF DEDUCTED, WILL BE
                      REFUNDED!
                    </blink>
                  )}
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
                  <b>Mobile Number</b>: {item.number}
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
                  <b>Donated</b>: ₹ {Math.floor(item.amount/20)}
                </Detail>
                <Detail>
                  <b>Amount Paid</b>: ₹ {item.amount}
                </Detail>
                <br></br>
                <Detail>
                  <span>
                    (For support, mail us at:{" "}
                    <Link href="mailto:support@cakelaya.com">
                      <b>support@cakelaya.com</b>
                    </Link>
                    .)
                  </span>
                </Detail>
                <br></br>
                <div>
                  <b>Feedback Form</b>:{" "}
                  <a href="https://forms.gle/EzorwsP25DPBBTpr9">
                    https://forms.gle/EzorwsP25DPBBTpr9
                  </a>
                </div>
                <button
                  id={"bnt2-" + i}
                  onClick={() => handleClick(i)}
                  style={{ color: "white", backgroundColor: "red" }}
                >
                  Product Details
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
    </div>
  );
};

export default Home;

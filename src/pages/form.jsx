import React, { useState, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Announcement from "../components/Announcement.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import orderRedux, { createOrder } from "../redux/orderRedux";
import Header from "../components/Header";
import { userRequest } from "../requestMethods";
import { removeProduct } from "../redux/cartRedux";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 60%;
  padding: 20px;
  padding-left: 0px;
  margin: 5px auto;
  padding-top: 0px;
  @media (max-width: 786px) {
    width: 100%;
  }

  form {
    margin-top: 10px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: 0px;

    input {
      padding: 10px;
      width: 70%;
      text-align: center;
      border: 1px solid black;
      @media (max-width: 786px) {
        /* width: 100%; */
      }
    }

    label {
      font-weight: 800;
      width: 150px;
      height: auto;
      display: flex;
      align-items: center;
    }
  }
`;

const DataSelect = styled.div`
  display: flex;
  gap: 4rem;
`;

const Filter = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  word-break: break-all;
`;

const TimeSelect = styled.div`
  display: flex;
  gap: 6rem;
  @media (max-width: 1515px) {
    gap: 1.5rem;
    flex-direction: column;
  }
`;

const FilterTitle = styled.div`
  font-weight: 800;
  display: flex;
  width: 150px;
  height: 19.2px;
  word-break: break-word;
`;

const FilterSize = styled.select`
  padding: 10px;
  text-align: center;
  border: 1px solid black;
  color: gray;
  width: 166px;
  @media (max-width: 1515px) {
    width: 266px;
  }
`;

const FilterSizeOption = styled.option`
  text-align: center;
`;

const Note = styled.h1`
  /* padding: 10px; */
  text-align: left;
  margin-left: 0px;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 20px;
  @media (max-width: 913px) {
    text-align: center;
  }
`;

const Summary = styled.div`
  flex: 1;
  border-top: 0.5px solid lightgray;
  border-left: 0.5px solid lightgray;
  margin-top: 10px;
  padding: 20px;
  @media (max-width: 913px) {
    height: auto;
    height: 40vh;
    border-left: 0px;
  }
  #total {
    margin-bottom: 40px;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 30px;
  @media (max-width: 913px) {
    text-align: center;
  }
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Box = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
  margin-left: 0px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  @media (max-width: 786px) {
    margin: 10px 0px;
  }
`;

const Delivery = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 0.5px solid lightgray;
  padding-top: 35px;
`;

const Option = styled.option``;

// const Address = styled.ul`
//   display: flex;
//   flex-direction: row;
// `;

const PopupMessage = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
  top: 4%;
  @media (max-width: 913px) {
    margin: 1px 20px;
  }
`;

const Popup = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 13px 2px;
  text-align: center;
  border: 2px solid teal;
  width: 150px;
  font-size: 18px;
  background-color: white;
  cursor: pointer;
  font-weight: 800;
  margin-left: 10px;
  text-decoration: none;
  color: black;
  position: relative;
  top: 5%;
  &:hover {
    background-color: #f8f4f4;
  }
  @media (max-width: 786px) {
    font-size: 11px;
  }
`;

const Form = () => {
  const cart = useSelector((state) => state.cart);
  const category = useSelector((state) => state.cart.category);

  const user = useSelector((state) => state.user.currentUser);
  const [time, setTime] = useState("90 Minutes Delivery");
  const [number, setNumber] = useState("");
  const [cakename, setCakename] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const [state, setState] = useState("Uttar Pradesh");
  const [pincode, setPincode] = useState("228118");
  const [country, setCountry] = useState("India");
  const [landmark, setLandmark] = useState("");

  const [occassion, setOccassion] = useState("Birthday");
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = user._id;

  const ccity = useSelector((state) => state.city);
  const [city, setCity] = useState(ccity.city);

  const [showMessage, setShowMessage] = useState(false);

  const checkTime = setInterval(() => {
    const now = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const timeParts = now.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);

    if (hours * 60 + minutes >= 1315 || hours < 8) {
      setShowMessage(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowMessage(false);
      document.body.style.overflow = "auto";
    }
  }, 500);

  const onHandle = async () => {
    let add =
      address +
      ", " +
      landmark +
      ", " +
      city +
      ", " +
      state +
      ", " +
      country +
      ", " +
      pincode;

    const currentTime = new Date();
    const LocalTime = currentTime.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const currentDate = Date().toLocaleString();
    const orderTime = currentDate.split(" ");
    const captureTime =
      LocalTime + ", " + orderTime[2] + " " + orderTime[1] + " " + orderTime[3];

    const res = await userRequest.post("/orders", {
      products: cart.products.map((item) => ({
        productId: item.title,
        quantity: item.quantity,
        size: item.size.length == 0 ? "-" : item.size,
        flavour: item.color.length == 0 ? "-" : item.color,
        amount: Number(item.price),
        img: item.img,
      })),
      amount: cart.total,
      cart: cart,
      time: time,
      number: number,
      address: add,
      cakeName: cakename,
      name: name,
      occassion: occassion,
      userId: userId,
      orderTime: String(captureTime),
    });

    const orderId = res.data._id;

    dispatch(createOrder({ orderId }));
    dispatch(removeProduct({}));
  };

  const handleClick = () => {
    document.body.style.overflow = "auto";
    window.location.href = "https://cakelaya-client-v1.vercel.app";
  };

  const initPayment = (data) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Cakelaya",
      description: "Cakeलाया ? is a start-up based on delivering cakes",
      image: "images/Mainlogo.png",
      // order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await publicRequest.post(
            "razorpay/verify",
            response
          );
          onHandle();
          window.location.href = "https://cakelaya-client-v1.vercel.app/myorders"
        } catch (error) {
          console.log("Error", error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const { data } = await publicRequest.post("/razorpay/orders", {
        amount: parseInt(cart.total),
      });
      initPayment(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {showMessage && (
        <Popup>
          <PopupMessage>
            <p>
              NOTE: Our services are currently available only from 8:00 AM to
              10:00 PM!
            </p>
          </PopupMessage>
          {/* <Link to="/"> */}
          <Button
            onClick={handleClick}
            style={{
              marginTop: 30,
            }}
          >
            GO HOME
          </Button>
          {/* </Link> */}
        </Popup>
      )}
      <Announcement />
      <Header />
      <Box>
        <Container>
          <Note>USER DETAILS</Note>
          <form>
            <DataSelect>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </DataSelect>
            <DataSelect>
              <label htmlFor="contact">Mobile Number:</label>
              <input
                type="number"
                name="contact"
                id=""
                placeholder="Enter your Mobile Number"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </DataSelect>
            <DataSelect>
              <label htmlFor="cake">Name on Cake:</label>
              <input
                type="text"
                name="cake"
                placeholder="Enter the Name you want on Cake"
                onChange={(e) => setCakename(e.target.value)}
                required
              />
            </DataSelect>
            <TimeSelect>
              <Filter>
                <FilterTitle>Delivery Time:</FilterTitle>
                <FilterSize
                  name="time"
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <FilterSizeOption>90 Minutes Delivery</FilterSizeOption>
                </FilterSize>
              </Filter>
              <Filter>
                <FilterTitle>Occasion Type:</FilterTitle>
                <FilterSize
                  name="occassion"
                  onChange={(e) => setOccassion(e.target.value)}
                  required
                >
                  <FilterSizeOption>Select Occasion</FilterSizeOption>
                  <FilterSizeOption>Birthday</FilterSizeOption>
                  <FilterSizeOption>Anniversary</FilterSizeOption>
                  <FilterSizeOption>Other</FilterSizeOption>
                </FilterSize>
              </Filter>
            </TimeSelect>
            <br />
            <Delivery>
              <Note>DELIVERY ADDRESS</Note>
              <DataSelect>
                <label htmlFor="street_address">Street Address:</label>
                <input
                  type="text"
                  name="street_address"
                  placeholder="Enter your Street Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </DataSelect>
              <DataSelect>
                <label htmlFor="landmark_address">Landmark:</label>
                <input
                  type="text"
                  name="landmark_address"
                  placeholder="Enter nearby Landmark"
                  onChange={(e) => setLandmark(e.target.value)}
                  required
                />
              </DataSelect>
              <TimeSelect>
                <Filter>
                  <FilterTitle>City:</FilterTitle>
                  <FilterSize
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  >
                    <FilterSizeOption>{city}</FilterSizeOption>
                  </FilterSize>
                </Filter>
                <Filter>
                  <FilterTitle>Pincode:</FilterTitle>
                  {city == "Sultanpur" && (
                    <FilterSize
                      name="pincode"
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    >
                      <FilterSizeOption>Choose Your Pincode</FilterSizeOption>
                      <FilterSizeOption>228001</FilterSizeOption>
                      <FilterSizeOption>228118</FilterSizeOption>
                    </FilterSize>
                  )}
                  {city == "Noida" && (
                    <FilterSize
                      name="pincode"
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    >
                      <FilterSizeOption>Choose Your Pincode</FilterSizeOption>
                      <FilterSizeOption>201301</FilterSizeOption>
                      <FilterSizeOption>201303</FilterSizeOption>
                      <FilterSizeOption>201307</FilterSizeOption>
                      <FilterSizeOption>201309</FilterSizeOption>
                      <FilterSizeOption>201313</FilterSizeOption>
                    </FilterSize>
                  )}
                </Filter>
              </TimeSelect>
              <TimeSelect>
                <Filter>
                  <FilterTitle>State:</FilterTitle>
                  <FilterSize
                    name="state"
                    onChange={(e) => setState(e.target.value)}
                    required
                  >
                    <FilterSizeOption>Uttar Pradesh</FilterSizeOption>
                  </FilterSize>
                </Filter>
                <Filter>
                  <FilterTitle>Country:</FilterTitle>
                  <FilterSize
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <FilterSizeOption>India</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </TimeSelect>
            </Delivery>
          </form>
        </Container>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Charges</SummaryItemText>

            {city === "Sultanpur" && <SummaryItemPrice>₹ 0</SummaryItemPrice>}
            {city === "Noida" && <SummaryItemPrice>₹ 50</SummaryItemPrice>}
          </SummaryItem>
          <SummaryItem type="total" style={{ marginBottom: "49px" }}>
            <SummaryItemText>Total</SummaryItemText>
            {city == "Noida" && (
              <SummaryItemPrice>₹ {cart.total + 50} </SummaryItemPrice>
            )}
            {city == "Sultanpur" && (
              <SummaryItemPrice>₹ {cart.total + 0} </SummaryItemPrice>
            )}
          </SummaryItem>
          <Button
            onClick={(e) => {
              handlePayment();
            }}
            className="buy_btn"
          >
            Pay Now
          </Button>
        </Summary>
      </Box>
      <Footer />
    </div>
  );
};

export default Form;

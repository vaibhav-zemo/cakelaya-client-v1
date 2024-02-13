import React from "react";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div``;

const Content = styled.div`
  /* border-top: 2px solid lightgray; */
  margin: 20px auto;
`;
const Head = styled.h1`
  width: 100%;
  text-align: center;
  margin: 50px auto;
  margin-bottom: 10px;
  font-size: 50px;
`;
const Context = styled.div`
  width: 90%;
  margin: 40px auto;
  padding: 10px;
  text-align: justify;
  div {
    text-align: left;
  }
  @media (max-width: 786px) {
    width: 75%;
  }
`;

const Content2 = styled.div``;

const Context2 = styled.div`
  display: flex;
  padding: 5px;
  /* background-color: #f3f2ef; */
  flex-direction: row;
  justify-content: space-around;
  padding: 80px;
  margin: 10px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 400px;
  @media (max-width: 786px) {
    margin-top: 40px;
  }
`;

const Name = styled.h1`
  margin-top: 10px;
  text-align: center;
`;

const Image = styled.img`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 50%;
  height: 300px;
  width: 300px;
  padding: 10px;
  object-fit: contain;
`;

const Des = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

const Dep = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Refund = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Content style={{ border: "none" }}>
        <Head>Refund and Cancellation Policy</Head>
        <Context>
          At Cakeलाया ?, we prioritize customer satisfaction and strive to
          provide a seamless experience for all our customers. Please read the
          following policy regarding refunds, cancellations, and updates to your
          order:
        </Context>
        <Context>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              padding: "0",
            }}
          >
            <li>
              <b>Cancellation Policy</b> <br></br>
              Currently, the option to cancel your order is not available on our
              website/app. Therefore, we kindly request all customers to place
              their orders with utmost care. Once an order is placed, it cannot
              be cancelled through the website/app. However, if you need to make
              changes to your delivery address or cake flavour, please contact
              our customer support team at{" "}
              <a href="mailto:support@cakelaya.com">support@cakelaya.com</a> as
              soon as possible, and we will do our best to accommodate your
              request!
            </li>
            <li>
              <b>Refund Policy</b> <br></br>
              If you need to request a refund due to a genuine reason, we
              process refunds immediately after verification. However, please
              note that a standard deduction of 5% of the order value will be
              applied to all refund requests initiated by users. The remaining
              amount will be refunded back to your original payment method
              within 1-2 business days.
            </li>
            <li>
              <b>Contact Us</b> <br></br>
              If you have any questions or concerns regarding our refund and
              cancellation policy, or if you need assistance with your order,
              please do not hesitate to contact us at our official email ID:
              <a href="mailto:support@cakelaya.com">support@cakelaya.com</a>.
              Our customer support team is here to help address any inquiries or
              issues you may have. Thank you for choosing Cakeलाया ?. We look
              forward to serving you again in the future
            </li>
          </ul>
        </Context>
        <Context>
          Our customer support team is here to help address any inquiries or
          issues you may have. Thank you for choosing Cakeलाया ?. We look
          forward to serving you again in the future.
        </Context>
      </Content>
      <Footer />
    </Container>
  );
};

export default Refund;

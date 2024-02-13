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

const Return = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Content style={{ border: "none" }}>
        <Head>Return Policy</Head>
        <Context>
          At Cakeलाया ?, we understand the importance of customer satisfaction
          and are committed to providing high-quality products. Please read our
          return policy carefully regarding food items:
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
              <b>Perishable Nature of Food Item</b> <br></br>
              Due to the perishable nature of food items, once they are
              delivered, they cannot be returned or replaced. We prioritize the
              freshness and quality of our products and cannot accept returns
              for items that have already been delivered.
            </li>
            <li>
              <b>Product Quality Issues</b> <br></br>
              If you encounter any issues with the quality of the product you
              have received, we encourage you to contact us immediately. Please
              reach out to our customer support team at{" "}
              <a href="mailto:support@cakelaya.com">support@cakelaya.com</a> to
              raise a refund query. We take product quality concerns seriously
              and will work with you to address the issue promptly.
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
          Thank you for choosing Cakeलाया ?. We appreciate your understanding of
          our return policy regarding food items and look forward to serving you
          again in the future.
        </Context>
      </Content>
      <Footer />
    </Container>
  );
};

export default Return;

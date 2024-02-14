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

const Shipping = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Content style={{ border: "none" }}>
        <Head>Shipping Policy</Head>
        <Context>
          At Cakeलाया ?, we serve as an online platform that connects customers
          with local bakers, enabling them to list their products and sell them
          online. Please review our shipping policy below:
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
              <b>Shipping Timeline</b> <br></br>
              We provide FREE 90 Minutes instant delivery to our customers!
            </li>
            <li>
              <b>Third-Party Bakery Vendors</b> <br></br>
              All cakes available on our website are delivered to you by
              third-party bakery partners. As such, Cakeलाया ? holds no
              responsibility for the delivery process, including but not limited
              to shipping delays, damages during transit, or delivery issues.
            </li>
            <li>
              <b>Responsibility Disclaimer</b> <br></br>
              While we strive to partner with reliable bakery vendors to ensure
              a smooth delivery experience, Cakeलाया ? acts solely as an
              intermediary between customers and partner bakers. Therefore, any
              issues related to shipping, delivery, or product quality will be
              addressed directly by the respective bakery partner after
              consultation.
            </li>
            <li>
              <b>Customer Support</b> <br></br>
              Should you encounter any issues or have concerns regarding the
              shipping or delivery of your order, we encourage you to contact us
              at our official email ID:{" "}
              <a href="mailto:support@cakelaya.com">support@cakelaya.com</a>.
              Our customer support team is available to assist you and will do
              our best to facilitate communication between you and the relevant
              bakery partner to resolve the issue.
            </li>
            <li>
              <b>Communication</b> <br></br>
              We value transparency and strive to keep our customers informed
              throughout the ordering and delivery process. If there are any
              changes or updates regarding your order, including shipping status
              or delivery estimates, we will communicate them to you promptly
              via email.
            </li>
            <li>
              <b>Contact Us</b> <br></br>
              If you have any questions or require further assistance regarding
              our shipping policy or any other aspect of your order, please do
              not hesitate to reach out to us at our official email ID:
              <a href="mailto:support@cakelaya.com">support@cakelaya.com</a>. We
              are committed to providing excellent customer service and ensuring
              your satisfaction with every purchase.
              <br></br>
              <br></br>
              Thank you for choosing Cakeलाया ?. We appreciate your
              understanding of our shipping policy and look forward to serving
              you again in the future.
            </li>
          </ul>
        </Context>
      </Content>
      <Footer />
    </Container>
  );
};

export default Shipping;

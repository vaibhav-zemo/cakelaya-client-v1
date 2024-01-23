import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 1px;
  @media (min-width: 766px) and (max-width: 913px) {
    height: 72vh;
  }
`;

const Slide = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/gift-slide1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 913px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  @media (max-width: 913px) {
    font-size: 40px;
  }
`;

const Box = styled.div`
  height: 70%;
  margin: 10%;
  margin-right: 0px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10%;
  @media (max-width: 820px) {
    width: 90%;
    margin: 0px;
  }

  p {
    display: flex;
    flex-direction: row;
    gap: 30px;
    @media (max-width: 820px) {
      flex-direction: column;
    }
    button {
      height: 50px;
      border: none;
      border-radius: 20px;
      font-size: 20px;
      width: 80%;
      font-weight: 700;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      @media (max-width: 820px) {
        width: 100%;
      }
    }
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  span {
    @media (max-width: 820px) {
      font-size: 13px;
    }
  }
`;

const Body = styled.div`
  width: 80%;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    gap: 10px;
    justify-content: space-between;

    @media (max-width: 820px) {
      flex-wrap: wrap;
      width: 100%;
    }

    button {
      width: 40%;
      height: 50px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 20px;
      font-size: 20px;
      font-weight: 700;
      @media (max-width: 820px) {
        width: 48%;
      }
    }
`;

const Relation = ({ prevStep, nextStep, values, handleChange }) => {
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);
  const [allow, setAllow] = useState(false);

  // console.log(values);
  const handleClick1 = (e) => {
    e.preventDefault();
    setColor1(!color1);
    setColor2(false);
    setColor3(false);
    setColor4(false);
    if(color1) setAllow(false);
    else setAllow(true);
    handleChange("relation", e);
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    setColor1(false);
    setColor2(!color2);
    setColor3(false);
    setColor4(false);

    if(color2) setAllow(false);
    else setAllow(true);

    handleChange("relation", e);
  };
  const handleClick3 = (e) => {
    e.preventDefault();
    setColor1(false);
    setColor2(false);
    setColor3(!color3);
    setColor4(false);
    if(color3) setAllow(false);
    else setAllow(true);
    handleChange("relation", e);
  };
  const handleClick4 = (e) => {
    e.preventDefault();
    setColor1(false);
    setColor2(false);
    setColor3(false);
    setColor4(!color4);
    if(color4) setAllow(false);
    else setAllow(true);
    handleChange("relation", e);
  };
  const Continue = (e) => {
    e.preventDefault();
    if (color1 == false && color2 == false && color3 == false && color4 == false) {
      alert("Select atleast one option");
      return;
    }
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container>
      <Slide>
        <Box>
          <Head>
            <Title>Select Relation</Title>
            <span>(Enter your relation with the receipent, whom you wanna gift!)</span>
          </Head>
          <Body>
            <button
              style={{ backgroundColor: color1 ? "lightgrey" : "white" }}
              onClick={(e) => handleClick1(e)}
            >
              Family
            </button>
            <button
              style={{ backgroundColor: color2 ? "lightgrey" : "white" }}
              onClick={(e) => handleClick2(e)}
            >
              Romantic Partner
            </button>
            <button
              style={{ backgroundColor: color3 ? "lightgrey" : "white" }}
              onClick={(e) => handleClick3(e)}
            >
              Self
            </button>
            <button
              style={{ backgroundColor: color4 ? "lightgrey" : "white" }}
              onClick={(e) => handleClick4(e)}
            >
              Other
            </button>
          </Body>
          <p>
            <button onClick={Previous}>Previous</button>
            <button style={{ backgroundColor: allow ? "white" : "lightgrey" }} onClick={Continue}>Next</button>
          </p>
        </Box>
      </Slide>
    </Container>
  );
};

export default Relation;

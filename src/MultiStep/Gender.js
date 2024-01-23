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
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  @media (max-width: 820px) {
    width: 100%;
  }
  button {
    width: 150px;
    height: 50px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Gender = ({ prevStep, nextStep, handleChange, values }) => {
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [allow, setAllow] = useState(false);


  // console.log(values);
  const handleClick1 = (e) => {
    e.preventDefault();
    setColor1(!color1);
    setColor2(false);
    if (color1) setAllow(false);
    else setAllow(true);
    handleChange("gender", e);
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    setColor1(false);
    setColor2(!color2);
    if (color2) setAllow(false);
    else setAllow(true);
    handleChange("gender", e);
  };
  

  const Continue = (e) => {
    e.preventDefault();
    if (color1 == false && color2 == false) {
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
            <Title>Select Gender</Title>
            <span>(Enter gender of the receipent, whom you wanna gift!)</span>
          </Head>
          <Body>
            <button
              style={{ backgroundColor: color1 ? "lightgrey" : "white" }}
              onClick={(e) => handleClick1(e)}
            >
              Male
            </button>
            <button
              style={{ backgroundColor: color2 ? "lightgrey" : "white" }}
              onClick={(e) => handleClick2(e)}
            >
              Female
            </button>
            {/* <button
              style={{ backgroundColor: color3 ? "lightgrey" : "white" }}
              onClick={(e) => handleClick3(e)}
            >
              Other
            </button> */}
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

export default Gender;

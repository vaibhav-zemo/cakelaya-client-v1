import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems, sliderItems2 } from "../data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (min-width: 766px) and (max-width: 913px) {
    height: 72vh;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url(${(props) => (props.bg)});
  /* background:  url('images/back2.jpg'); */
  /* background-image: url('images/back.jpg'); */
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 913px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  @media (max-width: 913px) {
    height: 48%;
  }
`;

const Image = styled.img`
  height: ${(props)=> props.height};
  @media (max-width: 913px) {
    padding-top: 70px;
    width: 100%;
    height: 80%;
    object-fit: scale-down;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  @media (max-width: 913px) {
    padding: 10px 38px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  @media (max-width: 913px) {
    font-size: 40px;
  }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  @media (max-width: 913px) {
    margin: 10px 0px;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: black;
  /* text-decoration: none; */
  border: 2px solid lightgray;
  /* border-radius: 25px; */
  background-color: white;
`;

const Lower = styled.div`
  display: flex;
  gap: 10px;

  div {
    font-size: 16px;
    padding: 10px;
    display: flex;
    align-items: center;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const city = useSelector((state) => state.city.city);
  const handleClick = (direction, slider) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slider.length - 1);
    } else {
      setSlideIndex(slideIndex < slider.length - 1 ? slideIndex + 1 : 0);
    }
    // for (let index = 0; index < sliderItems.length; index++) {
    //   const element = sliderItems[index];
    //   setSlideIndex(index);      
    // }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left", city == "Sultanpur" ? sliderItems : sliderItems2)}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex} style={{ zIndex: "1" }}>
        {(city == "Sultanpur" ? sliderItems : sliderItems2).map((item, i) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} height={item.height} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Lower>
                <Link to={`/products/${item.cat}`}>
                  <Button>Order Now</Button>
                </Link>
                <div>Starting at just ₹{item.price}</div>
              </Lower>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right", city == "Sultanpur" ? sliderItems : sliderItems2)}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

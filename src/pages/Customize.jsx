import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import { Vortex } from "react-loader-spinner";
import { loadStart, loadSuccess } from "../redux/productRedux";
import Header from "../components/Header";


const Container = styled.div`
  position: relative;

  form {
    display: flex;
    flex-direction: column;
    #photo::file-selector-button {
      padding: 13px 5px;
      text-align: center;
      border: 2px solid teal;
      width: 119px;
      background-color: white;
      cursor: pointer;
      font-weight: 500;
      /* margin-left: 10px; */
      text-decoration: none;
      color: black;
      &:hover {
        background-color: #f8f4f4;
      }
      @media (max-width: 786px) {
        font-size: 11px;
      }
    }

    #submit {
      padding: 13px 5px;
      text-align: center;
      border: 2px solid teal;
      width: 119px;
      background-color: white;
      cursor: pointer;
      font-weight: 500;
      /* margin-left: 10px; */
      text-decoration: none;
      color: black;
      &:hover {
        background-color: #f8f4f4;
      }
      @media (max-width: 786px) {
        font-size: 11px;
      }
    }
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 786px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  border: 2px solid whitesmoke;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contian;
  @media (max-width: 786px) {
    height: auto;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  @media (max-width: 786px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 786px) {
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  justify-content: flex-start;
  border-bottom: 2px solid lightgray;
  margin-bottom: -3px;
  padding-bottom: 27px;
  margin-top: 20px;
  @media (max-width: 786px) {
    width: 100%;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 7px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.a`
  padding: 13px 5px;
  text-align: center;
  border: 2px solid teal;
  width: 119px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-left: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #f8f4f4;
  }
  @media (max-width: 786px) {
    font-size: 11px;
  }
`;

const Loading = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  /* left: 0px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

const Customized = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);
  const id = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [title, setTitle] = useState("Customized Cake - 20% OFF");
  const [price, setPrice] = useState("339");
  const [color, setColor] = useState("Butterscotch");
  const [size, setSize] = useState("0.5 Kg");
  const [category, setCategory] = useState("");

  const [file, setFile] = useState(false);
  const [imageName, setImageName] = useState("images/custom.png");
  const [product, setProduct] = useState({
    img: imageName,
    quantity: quantity,
    size: size,
    price: price,
    color: color,
    title: title,
  });
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.loader);
  const [display, setDisplay] = useState(false);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const submit = async (event) => {
    event.preventDefault();
    dispatch(loadStart());

    const formData = new FormData();
    formData.append("image", file);

    const result = await publicRequest.post("/images", formData, {});
    dispatch(loadSuccess());

    setImageName(result.data.img);
    setProduct({
      img: result.data.img,
      title: title,
      price: price,
      quantity: quantity,
      color: color,
      size: size,
    });
  };

  const handleClick = (action) => {
    if (!user) window.location.href = "https://cakelaya.com/login";
    if (!file) setDisplay(true);
    else {
      dispatch(addProduct({ ...product, quantity, color, size, price, action }));
    }
  };

  const handleSize = (e) => {
    const size = e.target.value;
    const flavour = color;
    if (
      flavour === "Butterscotch" ||
      flavour === "Pineapple" ||
      flavour === "Strawberry" ||
      flavour === "Vanilla"
    ) {
      if (size === "0.5 Kg") {
        setPrice("339");
      } else if (size === "1 Kg") {
        setPrice("589");
      } else if (size === "1.5 Kg") {
        setPrice("839");
      } else if (size === "2 Kg") {
        setPrice("1089");
      }
    } else if (flavour === "Black Forest" || flavour === "Chocolate") {
      if (size === "0.5 Kg") {
        setPrice("369");
      } else if (size === "1 Kg") {
        setPrice("619");
      } else if (size === "1.5 Kg") {
        setPrice("899");
      } else if (size === "2 Kg") {
        setPrice("1169");
      }
    } else if (flavour === "Designer" || flavour === "Truffle") {
      if (size === "1 Kg") {
        setPrice("949");
      } else if (size === "2 Kg") {
        setPrice("1799");
      }
    } else if (flavour === "Red Velvet") {
      if (size === "0.5 Kg") {
        setPrice("499");
      }
      if (size === "1 Kg") {
        setPrice("849");
      } else if (size === "1.5 Kg") {
        setPrice("1199");
      } else if (size === "2 Kg") {
        setPrice("1549");
      }
    }
    setSize(e.target.value);
  };

  const handleflavour = (e) => {
    const flavour = e.target.value;
    if (
      flavour === "Butterscotch" ||
      flavour === "Pineapple" ||
      flavour === "Strawberry" ||
      flavour === "Vanilla"
    ) {
      setPrice("339");
    } else if (flavour === "Black Forest" || flavour === "Chocolate") {
      setPrice("369");
    } else if (flavour === "Designer" || flavour === "Truffle") setPrice("949");
    else if (flavour === "Red Velvet") setPrice("499");
    setColor(e.target.value);
    setSize("0.5 Kg");
  };

  return (
    <Container className="products">
      <Announcement />
      <Header />
      <Wrapper>
        <ImgContainer>{imageName && <Image src={imageName} />}</ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Desc>
            Looking forward to ordering a customized cake, the cake that looks
            exactly like your imagination or the one your dream of or the one
            you saw at someone's party and wanted for yourself this time? We
            heard you! Yes, we heard you! Now, upload an image of the cake you
            want, and we will bake the exact cake and deliver it to you! So,
            what are you waiting for, boost your imagination, upload the image,
            and order a cake today!
            <br></br>
            <br></br>
            This cake is hand-delivered in a good-quality cardboard box. Every
            cake we offer is handcrafted and since each chef has his/her own way
            of baking and designing a cake, there might be slight variation in
            the product in terms of design and shape. The cake should be
            consumed within 24 hours if not refrigerated. Enjoy your cake!
          </Desc>
          <FilterContainer>
            <Filter>
              <FilterTitle>Flavour</FilterTitle>
              <FilterSize onChange={handleflavour}>
                <FilterSizeOption>Butterscotch</FilterSizeOption>
                <FilterSizeOption>Pineapple</FilterSizeOption>
                <FilterSizeOption>Strawberry</FilterSizeOption>
                <FilterSizeOption>Vanilla</FilterSizeOption>
                <FilterSizeOption>Black Forest</FilterSizeOption>
                <FilterSizeOption>Chocolate</FilterSizeOption>
                <FilterSizeOption>Truffle</FilterSizeOption>
                <FilterSizeOption>Designer</FilterSizeOption>
                <FilterSizeOption>Red Velvet</FilterSizeOption>
              </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle style={{ width: "62px" }}>Size</FilterTitle>
              <FilterSize onChange={handleSize} value={size}>
                {(color != "Designer" && color != "Truffle") && (
                  <FilterSizeOption>0.5 Kg</FilterSizeOption>
                )}
                <FilterSizeOption>1 Kg</FilterSizeOption>
                {(color != "Designer" && color != "Truffle") && <FilterSizeOption>1.5 Kg</FilterSizeOption>}
                <FilterSizeOption>2 Kg</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <form
            onSubmit={submit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "30px",
            }}
          >
            <input
              filename={file}
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="photo"
              required
            />
            {file && <input
              id="submit"
              type="submit"
              value="Upload"
            />}
          </form>
          {display && <b style={{ color: "red", marginBottom: "10px" }}>Upload the right Image</b>}
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={() => handleClick("Add")}>ADD TO CART</Button>
            <Button onClick={() => handleClick("Buy")}>
              BUY NOW
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      {isFetching && (
        <Loading>
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </Loading>
      )}

      <Footer />
    </Container>
  );
};

export default Customized;

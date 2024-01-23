import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct, resetError } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
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
  blink {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   -webkit-background-clip: text;
    color: transparent;
    font-weight: 900;
    font-size: 30px;
    animation: 2s linear infinite condemned_blink_effect;
    @keyframes condemned_blink_effect {
      0%{
        opacity: 1;
      }
      25%{
        opacity: 0.5;
      }
      50%{
        opacity: 0;
      }
      75%{
        opacity: 0.5;
      }
      100%{
        opacity: 1;
      }
    }
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  /* border: 2px solid whitesmoke; */
  position: relative;
  height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
  .ribbon {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
  }
  .ribbon::before,
  .ribbon::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid red;
  }
  .ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: red;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 "Lato", sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
  }
  /* top right*/
  .ribbon-top-right {
    top: -10px;
    right: -10px;
  }
  .ribbon-top-right::before,
  .ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent;
  }
  .ribbon-top-right::before {
    top: 0;
    left: 0;
  }
  .ribbon-top-right::after {
    bottom: 0;
    right: 0;
  }
  .ribbon-top-right span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
  }
`;

const Image = styled.img`
  object-fit: scale-down;
  width: 100%;
  height: 100%;
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

const Box = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  flex-wrap: wrap;
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
  margin-bottom: 30px;
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

const Product = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user.currentUser);
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("1/2 Kg");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.loader);
  const city = useSelector((state) => state.city.city);
  const cart = useSelector((state) => state.cart);

  const [file, setFile] = useState(false);
  const [imageName, setImageName] = useState("");
  const [customproduct, setCustomProduct] = useState({});
  const [display, setDisplay] = useState(false);

  document.documentElement.scrollTop = 0;

  useEffect(() => {
    dispatch(resetError());
  }, [])

  useEffect(() => {
    const getProduct = async () => {
      dispatch(loadStart());
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setCategory(res.data.categories[0]);
        setColor(res.data.color[0]);
        setSize(res.data.size[0]);
        setPrice(res.data.price[0]);
      } catch { }
      dispatch(loadSuccess());
    };
    getProduct();
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    dispatch(loadStart());

    const formData = new FormData();
    formData.append("image", file);

    const result = await publicRequest.post("/images", formData, {});
    dispatch(loadSuccess());

    setImageName(result.data.img);
    setCustomProduct({
      img: result.data.img,
      quantity: quantity,
      size: size,
      price: price,
      color: color,
      title: product.title,
    });
  };
  
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = (action) => {
    if (!user) window.location.href = "https://cakelaya-client-v1.vercel.app/login";
    if (product.title == "Photo Sheet Cake") {
      if (!file) setDisplay(true);
      else {
        dispatch(addProduct({ ...customproduct, quantity, color, size, price, action }));
      }
    }
    else {
      dispatch(addProduct({ ...product, quantity, color, size, price, category, action }));
    }
  };


  const handleSize = (e) => {
    const temp = e.target.value;
    if (temp == "0.5 Kg") {
      setPrice(product.price[0]);
    }
    else if (temp == "1 Kg" && (category == "Designer" || color == "Truffle")) {
      if (color == "Truffle" && city == "Noida") {
        setPrice(product.price[1]);
      }
      else {
        setPrice(product.price[0]);
      }
    }
    else if (temp == "1 Kg") {
      setPrice(product.price[1]);
    }
    else if (temp == "2 Kg" && category == "Cookies and Namkeens") {
      setPrice(product.price[3]);
    }
    else if (temp == "2 Kg" && (category == "Designer" || color == "Truffle")) {
      setPrice(product.price[1]);
    }
    else if (temp == "2 Kg") {
      setPrice(product.price[2] ? product.price[2] : product.price[1]);
    }
    else if (temp == "1.5 Kg" && category == "Cookies and Namkeens") {
      setPrice(product.price[2]);
    }
    else if (temp == "1.5 Kg" && category == "Designer") {
      setPrice(product.price[0]);
    }
    else if (temp == "Regular") {
      setPrice(product.price[0]);
    }
    else if (temp == "Medium") {
      setPrice(product.price[1]);
    }
    setSize(temp);
  };
  return (
    <Container className="products">
      <Announcement />
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src={imageName?imageName : product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Box>
            <div id="priceBox">
              <Price>&#8377; {price * quantity}</Price>
              {category !== "Foods and Beverages" && (
                <Price style={{ color: "gray", marginLeft: "20px" }}>
                  <strike>
                    ₹{Math.floor(price * quantity * (1 + 25 / 100))}
                  </strike>
                </Price>
              )}
            </div>
            {category !== "Foods and Beverages" && (<blink>20% OFF</blink>)}
          </Box>
          <FilterContainer>
            {category !== "Namkeen" && (
              <Filter>
                <FilterTitle>Flavour</FilterTitle>
                <FilterSize onChange={(e) => setColor(e.target.value)}>
                  {product.color?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            )}
            <Filter>
              <FilterTitle style={{ width: "62px" }}>Size</FilterTitle>
              <FilterSize onChange={handleSize}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          {
            product.title == "Photo Sheet Cake"
            &&
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
          }
          {display && product.title == "Photo Sheet Cake" && <b style={{ color: "red", marginBottom: "20px" }}>Upload Image First</b>}
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
          {cart.error && <b style={{ color: "red" }}>Chaats, Juices and Shakes can’t be ordered with other items.</b>}
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

export default Product;

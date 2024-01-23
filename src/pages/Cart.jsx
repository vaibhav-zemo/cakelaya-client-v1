import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import { mobile } from "../responsive";
import { useState } from "react";
// import { useHistory } from "react-router";
import { publicRequest } from "../requestMethods";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incQuantity, decQuantity } from "../redux/cartRedux";
import { useEffect } from "react";
import { addAddon } from "../redux/cartRedux";
import Header from "../components/Header";
import { useRef } from "react";

// const KEY = process.env.KEY_ID_;

const Container = styled.div`
  #details {
    max-width: 40%;
    width: 36%;
    @media (max-width: 786px) {
      max-width: 100%;
    }
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
`;

// const FilterTitle = styled.span`
//   font-size: 20px;
//   font-weight: 500;
// `;

// const FilterSize = styled.select`
//   margin-left: 10px;
//   padding: 5px;
// `;

// const FilterSizeOption = styled.option``;

const Wrapper = styled.div`
  padding: 20px;

  @media (max-width: 786px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  @media (max-width: 786px) {
    display: "none";
  }
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
  margin-right: 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  margin: 10px 0px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 122px;
  }
`;

const ProductName = styled.span`
  @media (max-width: 786px) {
    font-size: 13px;
  }
`;

// const ProductId = styled.span`
//   @media (max-width: 786px) {
//     font-size: 13px;
//   }
// `;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 120px;
    margin-left: 60%;
    margin-top: 10px;
  }
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media (max-width: 786px) {
    margin: 5px 15px;
    font-size: 20px;
  }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media (max-width: 786px) {
    margin-bottom: 20px;
    font-size: 25px;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  height: 98%;
  border-top: 0.5px solid lightgray;
  border-left: 0.5px solid lightgray;
  padding: 20px;
  @media (max-width: 913px) {
    /* height: auto; */
    height: 40vh;
    width: 85vw;
    border-left: 0px;
  }
  #total {
    margin-bottom: 49px;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 500;
  margin-bottom: 10px;
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

const Button = styled.a`
  width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  font-weight: 800;
  text-decoration: none;
  font-size: 15px;
  border: 2px solid black;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
  }
`;

const TimeDetails = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
`;

const Note = styled.ul`
  padding-left: 20px;
`;

const Addon = styled.div`
  margin-top: 17px;
  h1 {
    margin-bottom: 20px;
    font-weight: 500;
    @media (max-width: 913px) {
      text-align: center;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    @media (max-width: 786px) {
      flex-direction: column;
    }
  }
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  gap: 10px;
  padding: 10px;
  justify-content: space-between;
  img {
    width: 103px;
    height: 103px;
  }
  @media (max-width: 786px) {
    width: 100%;
    height: auto;
    padding: 5px;
    margin-top: 10px;
    img {
      width: 80px;
      height: 80px;
    }
  }
`;

const Detail = styled.div`
  margin-right: 25px;
  h3 {
    margin-bottom: 15px;
    text-align: center;
  }
  p {
    text-align: center;
  }
  button {
    padding: 5px;
    background-color: white;
    border-radius: 25px;
    margin-top: 10px;
    width: 50px;
    border-color: whitesmoke;
  }
  @media (max-width: 786px) {
    margin-right: 0px;
  }
`;

const Head = styled.div`
  display: flex;
  gap: 50px;
`;

const Desc = styled.div`
  h3 {
    margin-bottom: 10px;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [products, setProducts] = useState([]);
  const city = useSelector((state) => state.city.city);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://cakelaya.com/api/products");
        setProducts(res.data);
        if (city == "Sultanpur") {
          setProducts(
            res.data.filter((prod) => {
              return prod.location[0] == "Sultanpur";
            })
          );
        } else {
          setProducts(
            res.data.filter((prod) => {
              return prod.location[0] == "Noida";
            })
          );
        }
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (!user) window.location.href = "https://cakelaya.com/login";
    if (!cart.total) window.location.href = "https://cakelaya.com/";
  });

  const handleClick = (idx, type) => {
    if (type === "inc") {
      dispatch(incQuantity(idx));
    } else {
      dispatch(decQuantity(idx));
    }
  };

  const handleAddon = (product, type) => {
    dispatch(addAddon({ ...product }));
  };

  return (
    <Container>
      <Announcement />
      <Header />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>BACK TO HOME</TopButton>
          </Link>

          <Link to="/form">
            <TopButton>CHECKOUT NOW</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, i) => (
              <div>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      {/* <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId> */}
                      {(product.categories == undefined ||
                        product.categories[0] !== "Addon") && (
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      )}
                      {(product.categories == undefined ||
                        product.categories[0] !== "Addon") && (
                        <ProductSize>
                          <b>Flavour:</b> {product.color}
                        </ProductSize>
                      )}
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove onClick={() => handleClick(i, "dec")} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add onClick={() => handleClick(i, "inc")} />
                    </ProductAmountContainer>
                    <ProductPrice>
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              </div>
            ))}
            <Hr />
            <Addon>
              <h1>YOU MAY ALSO LIKE</h1>
              <section>
                {products.map((product) => (
                  <div>
                    {product.categories[0] === "Addon" && (
                      <Card>
                        <Head>
                          <div>
                            <img src={product.img} alt="" />
                          </div>
                          <Desc>
                            <h3>{product.title}</h3>
                            <span>{product.desc}</span>
                          </Desc>
                        </Head>
                        <Detail>
                          <p>₹ {product.price}</p>
                          <div>
                            <button onClick={() => handleAddon(product, "asc")}>
                              Add
                            </button>
                          </div>
                        </Detail>
                      </Card>
                    )}
                  </div>
                ))}
              </section>
            </Addon>
          </Info>

          <Container id="details">
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>
                  ₹ {city === "Sultanpur" ? 0 : 50}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem id="total" type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  ₹ {cart.total + (city === "Sultanpur" ? 0 : 50)}
                </SummaryItemPrice>
              </SummaryItem>
              <Button href="/form">CHECKOUT NOW</Button>
            </Summary>
          </Container>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

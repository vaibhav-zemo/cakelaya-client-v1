import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Header from "../components/Header";

const Button = styled.button`
  padding: 13px 5px;
  text-align: center;
  border: 2px solid teal;
  width: 200px;
  font-size: 18px;
  background-color: white;
  cursor: pointer;
  font-weight: 800;
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

const Cancel = () => {
  return (
    <section>
      <Announcement />
      <Header />
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <center>
          Payment Failed
        </center>
        <Link to="/">
          <Button
            style={{
              marginTop: 30,
            }}
          >
            GO TO HOME
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Cancel;

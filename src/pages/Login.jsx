import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { resetSate } from "../redux/userRedux";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Vortex } from "react-loader-spinner";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("images/login.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  @media (max-width: 786px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

const Error = styled.span`
  color: red;
`;

const Loading = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

const Login = () => {
  var [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error, userNot, passNot } = useSelector(
    (state) => state.user
  );

  const handleClick = (e) => {
    e.preventDefault();
    email = email.replace(/\s+/g, " ").trim();
    login(dispatch, { email, password });
  };

  const handleChangeUser = (e) => {
    setEmail(e.target.value);
    if ((userNot || passNot)) dispatch(resetSate());
  }

  const handleChangePass = (e) => {
    setPassword(e.target.value);
    if ((userNot || passNot)) dispatch(resetSate());
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="EMAIL ID"
            onChange={(e) => handleChangeUser(e)}
          />
          <Input
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => handleChangePass(e)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {userNot && <Error>User Not Found</Error>}
          {passNot && <Error>Password Not Matched</Error>}
          <Link href="/register">CREATE A NEW ACCOUNT</Link>
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
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

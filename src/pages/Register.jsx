import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSate } from "../redux/userRedux";
import { register } from "../redux/apiCalls";
import { Vortex } from "react-loader-spinner";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("images/register.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
  margin-left: 5px;
  text-align: left;
  padding: 12px 0px;
`;

const Loading = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

const Register = () => {
  var [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validEmail, setvalidEmail] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error, userNot, passNot } = useSelector(
    (state) => state.user
  );

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
    if (userNot || passNot) dispatch(resetSate());
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setvalidEmail(false);
    if (userNot || passNot) dispatch(resetSate());
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
    if (userNot || passNot) dispatch(resetSate());
  };

  const handleChangeConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
    if (userNot || passNot) dispatch(resetSate());
  };

  const handleClick = (e) => {
    e.preventDefault();
    username = username.replace(/\s+/g, " ").trim();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat)) {
      register(dispatch, {
        username,
        password,
        email,
        confirmPassword,
      });
    } else {
      setvalidEmail(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            type={"name"}
            placeholder="USERNAME"
            onChange={(e) => handleChangeUser(e)}
          />
          <Input
            type={"email"}
            placeholder="EMAIL ID"
            onChange={(e) => handleChangeEmail(e)}
          />
          <Input
            type={"password"}
            placeholder="PASSWORD"
            onChange={(e) => handleChangePass(e)}
          />
          <Input
            type={"password"}
            placeholder="CONFIRM PASSWORD"
            onChange={(e) => handleChangeConfirmPass(e)}
          />
          <Agreement>
            BY CREATING AN ACCOUNT, I CONSENT TO THE PROCESSING OF MY PERSONAL DATA IN ACCORDANCE WITH THE
            <b> PRIVACY POLICY</b>.
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>
          {userNot && <Error>User Already Exists</Error>}
          {passNot && (
            <Error>Password and Confirm Password Unmatched</Error>
          )}
          {
            validEmail && (
              <Error>Invalid Email ID</Error>
            )
          }
        </Form>

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
      </Wrapper>
    </Container>
  );
};

export default Register;

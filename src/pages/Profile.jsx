import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Vortex } from "react-loader-spinner";
import { publicRequest } from "../requestMethods";
import { logOut } from "../redux/userRedux";
import Header from "../components/Header";
import Announcement from "../components/Announcement";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("images/bg-profile.jpg") center;
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
  width: 100%;
  text-align: center;
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
  margin-left: 10px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
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
  color: red;
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

const Content = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = () => {
  const [wantDelete, setWantDelete] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { isFetching, error, userNot, passNot } = useSelector(
    (state) => state.user
  );

  const handleClick = async () => {
    await publicRequest.delete("/users/" + user._id);
    dispatch(logOut());
    window.location.href = "/";
  };

  useEffect(() => {
    if (!user) window.location.href = "/";
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Announcement />
      <Header />
      <Container>
        <Wrapper>
          <Title>My Profile</Title>
          <Content>
            <List>
              <h3>Username:</h3>
              <span>{user?.username}</span>
            </List>
            <List>
              <h3>Email:</h3>
              <span>{user?.email}</span>
            </List>
          </Content>
          <Box>
            <Link onClick={() => setWantDelete(!wantDelete)}>
              DELETE ACCOUNT
            </Link>
            <Button
              onClick={() => handleClick()}
              style={{ display: wantDelete ? "block" : "none" }}
            >
              Confirm?
            </Button>
          </Box>
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
    </div>
  );
};

export default Profile;

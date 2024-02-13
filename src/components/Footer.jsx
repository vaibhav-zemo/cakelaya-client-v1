import {
  Facebook,
  Instagram,
  MailOutline,
  Room,
  Twitter,
  WhatsApp,
  LinkedIn,
  Phone
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.a`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Payment = styled.img`
  width: 50%;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <>
      <Container className="footer">
        <Left>
          <Logo>About Cakeलाया ?</Logo>
          <Desc>
            Cakeलाया ? is a start-up based on delivering cakes and other
            savouries to your room at your convenience. All you need is just to
            take a chill pill, enjoy the occasion with your closed ones and let
            us take care of all your cake and zingy needs!
          </Desc>
          <SocialContainer>
            <SocialIcon
              color="4267B2"
              href="https://www.facebook.com/cakelaya/"
              target="_blank"
            >
              <Facebook />
            </SocialIcon>
            <SocialIcon
              color="E4405F"
              href="https://www.instagram.com/cakelayaa/"
              target="_blank"
            >
              <Instagram />
            </SocialIcon>

            <SocialIcon
              color="0A66C2"
              href="https://www.linkedin.com/company/cakelaya/"
              target="_blank"
            >
              <LinkedIn />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">About</Link>
            </ListItem>
            <ListItem>
              <Link href="/privacy">Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="/return">Return Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="/shipping">Shipping Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="/refund">Refund Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="/term">T&C</Link>
            </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> F - 143, F Block, Sector 22, Noida, U.P. (201301)
          </ContactItem>
          <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91-9999004086
        </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            <Link href="mailto:support@cakelaya.com">support@cakelaya.com</Link>
          </ContactItem>
        </Right>
      </Container>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}>
        Copyright© 2024 | ZESTEASE FOODTECH PRIVATE LIMITED® | All
        Rights Reserved
      </div>
    </>
  );
};

export default Footer;

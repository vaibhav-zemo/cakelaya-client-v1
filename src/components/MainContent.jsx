import Button from "./shared/Button";
import {
  StyledMainContent,
  StyledSection,
  StyledHeroImg,
  StyledFooter,
} from "./styles/MainContent.styled";


const theme = {
  colors: {
    almostWhite: "hsl(0, 0%, 98%)",
    mediumGray: "hsl(0, 0%, 41%)",
    almostBlack: "hsl(0, 0%, 8%)",
  },
  breakpoint: {
    small: "670px",
    medium: "860px",
    large: "1024",
  },
};

export default function MainContent() {
  return (
    <StyledMainContent>
      <StyledHeroImg
        className="mobile-img"
        src="./images/image-hero-mobile.png"
        alt=""
      />
      <StyledHeroImg
        className="desktop-img"
        src="./images/image-hero-desktop.png"
        alt=""
      />
      <StyledSection>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button text="Learn more" btnType="cta-btn" />
        <StyledFooter>
          <img src="./images/client-databiz.svg" alt="" />
          <img src="./images/client-audiophile.svg" alt="" />
          <img src="./images/client-meet.svg" alt="" />
          <img src="./images/client-maker.svg" alt="" />
        </StyledFooter>
      </StyledSection>
    </StyledMainContent>
  );
}

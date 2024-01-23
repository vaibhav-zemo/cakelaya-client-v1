import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 820px) {
    text-align: center;
    padding: 2px;
    height: auto;
  }
  blink {
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


const Announcement = () => {
  const location = useLocation();
  const ccity = useSelector((state) => state.city);
  // console.log(ccity)

  const handleClick = () => window.location.href = "https://forms.gle/vEGQ9PXUGZUtPKiB8";
  return (
    <Container>
      {location.pathname == '/gift' ? <blink onClick={handleClick} style={{ cursor: "pointer" }}>FLAT 2% Cashback on all purchases made via us! <u>CLICK HERE</u> to claim!</blink> : <blink>{ccity.city=='Sultanpur'?'FREE':''} 90 Minutes Delivery for Everyone!</blink>}
    </Container>
  );
};

export default Announcement;

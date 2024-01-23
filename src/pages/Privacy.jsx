import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Announcement from "../components/Announcement";

const Content = styled.div`
  /* border-top: 2px solid lightgray; */
  margin: 20px auto;
`;

const Head = styled.h1`
  width: 100%;
  text-align: center;
  margin: 50px auto;
  margin-bottom: 10px;
  font-size: 50px;
`;

const Context = styled.div`
  width: 90%;
  margin: 40px auto;
  padding: 10px;
  text-align: justify;
  div {
    text-align: left;
  }
  @media (max-width: 786px) {
    width: 75%;
  }
`;

const Privacy = () => {
  return (
    <>
      <Announcement />
      <Header />
      <Content style={{ border: "none" }}>
        <Head>Privacy Policy</Head>
        <Context>
          <b>Note:</b> Our Privacy Policy is subject to change at any time
          without notice. To make sure you are aware of any changes, please
          review this Privacy Policy Page periodically. By visiting this website
          you agree to be bound by the terms and conditions of this Privacy
          Policy. If you do not agree please do not use or access our Website.
          By mere use of the Website, you expressly consent to our use and
          disclosure of your personal information in accordance with this
          Privacy Policy. This Privacy Policy is incorporated into and subject
          to the Terms of Use.
          <br></br>
          <br></br>
          What personal information do we collect from the people who visit our
          blog, website or app? When ordering or registering on our site, as
          appropriate, you may be asked to enter your name, email address,
          receiver name, delivery address, billing address, phone number or
          other details to help you with your experience. How do we use your
          information? We may use the information we collect from you when you
          register, make a purchase, sign up for our newsletter, respond to a
          survey or marketing communication, surf the website, or use certain
          other site features in the following ways:
          <ul>
            <li>
              To personalize your experience and to allow us to deliver the type
              of content and product offerings in which you are most interested.
            </li>
            <li>To improve our website to better serve you.</li>
            <li>
              To allow us to better service you in responding to your customer
              service requests.
            </li>
            <li>
              To administer a contest, promotion, survey or other site feature.
            </li>
            <li> To quickly process your transactions.</li>
            <li>To ask for ratings and reviews of services or products.</li>
            <li>
              To follow up with them after correspondence (live chat, email or
              phone inquiries).
            </li>
            <li>
              To send transnational and promotional messages on your registered
              phone number.
            </li>
          </ul>{" "}
          <br></br>
          <b>How do we protect your information?</b>
          <br></br> Our website is scanned regularly for security holes and
          known vulnerabilities to make your visit to our site as safe as
          possible. We use regular Malware Scanning. Your personal
          information is contained behind secured networks and is only
          accessible by a limited number of persons who have special access
          rights to such systems and are required to keep the information
          confidential. In addition, all sensitive/credit information you supply
          is encrypted via Secure Socket Layer (SSL) technology. We implement a
          variety of security measures when a user places an order enters,
          submits, or accesses their information to maintain the safety of your
          personal information. All transactions are processed through a gateway
          provider and are not stored or processed on our servers.<br></br>{" "}
          <br></br> <b>Do we use ‘cookies’?</b> <br></br> Yes. Cookies are small
          files that a site or its service provider transfers to your computer’s
          hard drive through your Web browser (if you allow) that enable the
          site’s or service provider’s systems to recognize your browser and
          capture and remember certain information. For instance, we use cookies
          to help us remember and process the items in our shopping cart. They
          are also used to help us understand your preferences based on previous
          or current site activity, which enables us to provide you with
          improved services. We also use cookies to help us compile aggregate
          data about site traffic and site interaction so that we can offer
          better site experiences and tools in the future. We use cookies to:
          Help remember and process the items in the shopping cart. Understand
          and save user’s preferences for future visits. You can choose to have
          your computer warn you each time a cookie is being sent, or you can
          choose to turn off all cookies. You do this through your browser
          settings. Since the browser is a little different, look at your
          browser’s Help Menu to learn the correct way to modify your cookies.
          If you turn cookies off, some features will be disabled. It won’t
          affect the user’s experience make your site experience more efficient
          and may not function properly. However, you will still be able to
          place the orders. <br></br> <br></br> <b>Third-Party Disclosure</b>{" "}
          <br></br> We do not sell, trade, or otherwise transfer to outside
          parties your Personally Identifiable Information. <br></br> <br></br>{" "}
          <b>Third-Party Links</b> <br></br> We do not include or offer
          third-party products or services on our website. <br></br>
          <br></br> <b>Google</b> <br></br> Google’s advertising requirements
          can be summed up by Google’s Advertising Principles. They are put in
          place to provide a positive experience for users.<br></br><br></br>{" "}
          <b>Link:</b>{" "}
          <a href="https://support.google.com/adwordspolicy/answer/1316548?hl=en">
            https://support.google.com/adwordspolicy/answer/1316548?hl=en
          </a>{" "}
          <br></br> <br></br> We have not enabled Google AdSense on our website.{" "}
          <br></br> <br></br> <b> We collect your Email Address to: </b>{" "}
          <br></br> Send information, respond to inquiries, and/or other
          requests or questions. Process orders and send information and updates
          about orders. Send you additional information related to your product
          and/or service. Market to our mailing list or continue to send emails
          to our clients after the original transaction has occurred.<br></br>{" "}
          We also allow users to unsubscribe by using the link at the bottom of
          each email. If at any time you would like to unsubscribe from
          receiving future emails, you can email us at{" "}
          <a href="mailto:support@cakelaya.com">
            <b>support@cakelaya.com</b>
          </a>.
          <br/><br/>
          <b>Contacting Us</b>
          <br></br> If there are any questions regarding this privacy policy,
          you may contact us at the Email ID mentioned on the page below.
          <br/>
        </Context>
      </Content>
      <Footer />
    </>
  );
};

export default Privacy;

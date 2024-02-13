import React from "react";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div``;

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

const Content2 = styled.div``;

const Context2 = styled.div`
  display: flex;
  padding: 5px;
  /* background-color: #f3f2ef; */
  flex-direction: row;
  justify-content: space-around;
  padding: 80px;
  margin: 10px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 400px;
  @media (max-width: 786px) {
    margin-top: 40px;
  }
`;

const Name = styled.h1`
  margin-top: 10px;
  text-align: center;
`;

const Image = styled.img`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 50%;
  height: 300px;
  width: 300px;
  padding: 10px;
  object-fit: contain;
`;

const Des = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

const Dep = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Term = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Content style={{ border: "none" }}>
        <Head>Terms of Use </Head>
        <Context>
          Please read the terms and conditions (“Terms and Conditions”) set out
          below carefully before ordering any Goods or Services from this
          Website. By ordering any Goods or Services from this Website, by
          phone, or by our mobile applications, you agree to be bound by these
          Terms and Conditions.
          <br></br>
          Section 1: Introduction: The domain name www.cakelaya.com (hereinafter
          referred to as "Website") is owned by ZESTEASE FOODTECH PRIVATE
          LIMITED a company incorporated under the Companies Act, 1956 with its
          registered office at F - 143, F BLOCK, SECTOR 22, NOIDA (hereinafter
          referred to as "cakelaya").
          <br></br>
          Section 2: Definitions:
          <br></br>
          2.1. “Agreement” is a reference to these Terms and Conditions, any
          order, form and payment instructions provided to you;<br></br>
          2.2. “Privacy Policy” means the policy displayed on our Website which
          details how we collect and store your data;<br></br>
          2.3. “you”, “your” and “yours” are references to you, the person
          accessing this Website and ordering any Goods or Services from the
          Website or any other channel provided by cakelaya<br></br>
          2.4. “we”, “us”, “our”, and ”cakelaya ” are references to the
          cakelaya;<br></br>
          2.5. “Goods”, “Items” is a reference to any goods which we may offer
          for sale from our Website from time to time;<br></br>
          2.6. “Service” or “Services” is a reference to any service which we
          may supply and which you may request via our Website;<br></br>
          2.7. “Participating supplier” is a third party, which has agreed to
          co-operate with us to prepare and/or deliver the Goods or Services.
          <br></br>
          2.8. “Food Delivery” is a reference to perishable goods and to any
          form of delivery service, which both are provided by our partners and
          for both of which our partners take full responsibility.<br></br>
          2.9. “Website” is a reference to our Website www.cakelaya.com or our
          mobile applications on which we offer our Goods or Services.<br></br>
          Section 3: Ordering<br></br>
          3.1. Any contract for the supply of Food Delivery from this Website is
          between you and our Participating Suppliers; for the supply of Goods
          or Services from this website, contact is between you and cakelaya.
          You agree to take particular care when providing us with your details
          and warrant that these details are accurate and complete at the time
          of ordering. You also warrant that the credit or debit card details
          that you provide are for your own credit or debit card and that you
          have sufficient funds to make the payment.<br></br>
          3.2. Food Delivery, Goods and Services purchased from this Website are
          intended for your use only and you warrant that any Goods purchased by
          you are not for resale and that you are acting as principal only and
          not as agent for another party when receiving the Services.<br></br>
          3.3. Please note that some of our Goods may be suitable for certain
          age ranges only. You should check that the product you are ordering is
          suitable for the intended recipient.<br></br>
          3.4. When ordering from this Website you may be required to provide a
          phone number, e-mail address and password. You must ensure that you
          keep the combination of these details secure and do not provide this
          information to a third party.<br></br>
          3.5. We will take all reasonable care, in so far as it is in our power
          to do so, to keep the details of your order and payment secure, but in
          the absence of negligence on our part we cannot be held liable for any
          loss you may suffer if a third party procures unauthorized access to
          any data you provide when accessing or ordering from the Website.
          <br></br>
          3.6.Any order that you place with us is subject to product
          availability, delivery capacity and acceptance by us and the
          Participating Suppliers. When you place your order online, we will
          send you an email to confirm that we have received it. This email
          confirmation will be produced automatically so that you have
          confirmation of your order details. You must inform us immediately if
          any details are incorrect. The fact that you receive an automatic
          confirmation does not necessarily mean that either we or the
          Participating Suppliers will be able to fill your order. Once we have
          sent the confirmation email we will check availability and delivery
          capacity.<br></br>
          3.7.If the ordered Food and delivery capacity is available, the
          Participating Supplier will accept the contract and confirm it to
          cakelaya. If the details of the order are correct, the contract for
          the Food Delivery, Goods or Services will be confirmed by email or
          text message(SMS).<br></br>
          3.8.The confirmation message/ email will specify the items ordered
          along with a receipt of payment.<br></br>
          3.9.If the Food Delivery and/or Goods are not available or if there is
          no delivery capacity, we will also let you know by email text message
          (SMS) or phone call.<br></br>
          Section 4: Prices and Payment<br></br>
          4.1. You agree to take particular care when providing us with your
          details and warrant that these details are accurate and complete at
          the time of ordering. You also warrant that the credit or debit card
          details that you provide are for your own credit or debit card and
          that you have sufficient funds to make the payment.<br></br>
          4.2. All prices listed on the Website are correct at the time of
          publication and have been based on input received from the supplier;
          While we give great care to keep them up to date, the final price
          charged to you can change at the time of delivery based on the latest
          menu and prices. We also reserve the right to alter the Goods or
          Services available for sale on the Website.<br></br>
          4.3. All prices for delivery by cakelaya or a third-party provider
          assigned by cakelaya are correct at the time of publication. However,
          we reserve the right to alter these in the future<br></br>
          4.4. The total price for Food Delivery, Goods or Services ordered,
          delivery charges and other charges will be displayed on the Website
          when you place your order. Full payment must be made for all Goods
          dispatched and Services provided. Payment has to be made online, e.g.
          via UPI, Net Banking, Credit or Debit card.<br></br>
          4.5.In case of online payment, you must pay for your order before it
          is delivered. Our website is integrated with 3rd party payment
          gateways. We do not store any card or banking details on our website.
          For privacy policies and terms and conditions, please refer to the
          relevant payment gateway’s website.<br></br>
          4.6.cakelaya never asks for any of your personal bank details. Please
          do not share your personal bank details like Card
          Number/PIN/CVV/OTP/Card Expiry Date/UPI PIN, over Phone/Mail/SMS to
          anyone.<br></br>
          Section 5: Delivery<br></br>
          5.1. Delivery periods quoted at the time of ordering are approximate
          only and may vary. Goods will be delivered to the address designated
          by you at the time of ordering.<br></br>
          5.2. If delivery is done by its delivery partners, it is the
          Participating supplier's sole responsibility to provide Food Delivery
          promptly.<br></br>
          5.3. In the case delivery is done by cakelaya or a third-party
          delivery partner assigned by cakelaya, we will take great care to
          deliver promptly. No responsibility is taken for late delivery by
          cakelaya in either case.<br></br>
          5.4. All orders are delivered by a reputable courier. We and the
          delivery will make every effort to deliver within the time stated.
          However, we will not be liable for any loss caused to you by ordering
          late.<br></br>
          5.5. In case of a late delivery, the delivery charge will neither be
          voided nor refunded by cakelaya.<br></br>
          5.6. All risks in the Goods and the Food Delivery shall pass to you
          upon delivery.<br></br>
          5.7. If you fail to accept delivery of Goods at the time they are
          ready for delivery, or we are unable to deliver at the nominated time
          due to your failure to provide appropriate instructions, then such
          goods shall be deemed to have been delivered to you and all risk and
          responsibility about such goods shall pass to you.<br></br>
          5.8. Participating Suppliers, who will prepare your order, aim to
          deliver the product to you at the place and time of delivery requested
          by you in your order. However, we shall not be liable to you for any
          losses, liabilities, costs, damages, charges or expenses arising out
          of late delivery;<br></br>
          5.9. Please note that it might not be possible for us to deliver to
          some locations. If this is the case we or our partner supplier will
          inform you using the contact details that you provide to us when you
          make your order and arrange for cancellation of the order or delivery
          to an alternative delivery address;<br></br>
          5.10. The delivery of the items ordered will be attempted only ONCE at
          the address as provided. In the event the delivery is not executed due
          to any reason whatsoever, the order shall be considered complete, and
          re-delivery or a refund will not be an option. The order will be
          deemed executed and delivered in the following events:<br></br>
          Wrong address<br></br>
          Recipient not available at premises<br></br>
          Premises locked<br></br>
          Unreachable or incorrect phone number of the recipient<br></br>
          The recipient refused the products.<br></br>
          Delivered the product at the gate/reception/neighbourhood of the
          premises Restricted entry to premises<br></br>
          5.11. Deliveries shall not be made on National Holidays. Orders
          scheduled for National holidays will be delivered on the next working
          day.<br></br>
          5.12 In case of floods/ Heavy Rains/ natural calamity/ National
          Bandh/election dates/ curfews/traffic jams/festival times/regulated
          traffic movements/ or any other impediments that may restrict the
          delivery of the order. cakelaya reserves the right to reschedule the
          delivery for another date.<br></br>
          5.13. No instructions will be entertained for any request to change
          the date of delivery.<br></br>
          Section 6: Cancellation:<br></br>
          Please refer to the cancellation policy on our website.<br></br>
          Section 7: Linked Sites:<br></br>
          There may be several links on our Website to third-party Websites
          which may be of interest to you. We do not represent the quality of
          the Goods or Services provided by such third parties nor do we have
          any control over the content or availability of such sites. We cannot
          accept any responsibility for the content of third-party Websites or
          the Services or Goods that they may provide to you.<br></br>
          Section 8: Complaints<br></br>
          We take complaints very seriously and aim to respond within 12
          business hours. All complaints should be addressed to
          support@cakelaya.com, and we assure to assist if reported within 24
          hours of delivery. Kindly note that the images displayed on the
          website are indicative in nature. Actual product may vary in shape or
          design as per the availability.<br></br>
          Section 9: Limitation of Liability<br></br>
          9.1. Great care has been taken to ensure that the information
          available on this Website is correct and error-free. We apologize for
          any errors or omissions that may have occurred. Therefore, we do not
          make any warranty whatsoever, whether express or implied, relating to
          its accuracy.<br></br>
          9.2. By accepting these terms of use, you agree to relieve us from any
          liability whatsoever arising from your use of information from any
          third party, your use of any third-party website, or your consumption
          of any food or beverages from a Participating Supplier.<br></br>
          9.3. We disclaim any liability to you for the supply of the Food
          Delivery, Goods and Services to the fullest extent permissible under
          applicable law. This does not affect your statutory rights as a
          consumer. If we are found liable for any loss or damage to you such
          liability is limited to the amount you have paid for the relevant
          Goods or Services. We cannot accept any liability for any loss, damage
          or expense, including any direct or indirect loss.<br></br>
          9.4. We do not accept any liability for any delays, failures, errors
          omissions or loss of information, viruses or other contamination or
          destructive properties transmitted to you or your computer system via
          our Website.<br></br>
          9.5. We shall not be held liable for any failure or delay in
          performing Services or delivering Goods arising owing to reasons
          beyond our control.<br></br>
          9.6. The products sold by us are provided for private domestic and
          consumer use only. Accordingly, we do not accept liability for any
          indirect loss, consequential loss, loss of data, loss of income or
          profit, loss of damage to property and/or loss from claims of third
          parties arising out of the use of the Website or for any products or
          services purchased from us.<br></br>
          9.7. We have taken all reasonable steps to prevent Internet fraud and
          ensure any data collected from you is stored as securely and safely as
          possible. However, we cannot be held liable in the extremely unlikely
          event of a breach in our secure computer servers or those of third
          parties.<br></br>
          9.8. Offers are subject to cakelaya discretion and may be withdrawn at
          any time and without notice.<br></br>
          Section 10: General<br></br>
          10.1. All prices are in Indian Rupees and can be converted to your
          local currency at the time of payment, depending on the payment
          gateway provider.<br></br>
          10.2. We may subcontract any part or parts of the Services or Goods
          that we provide to you from time to time without your consent or any
          requirement to notify you.<br></br>
          10.3. We may alter or vary the Terms and Conditions at any time
          without notice to you.<br></br>
          10.4. Payment must be made at the time of placing an order by bank
          transfer, credit/debit card or at the time of delivery by cash (if
          available). Failure to pay on time will result in the cancellation of
          your order.<br></br>
          10.5. Please do not use or launch any automated system or program in
          connection with our website or its online ordering functionality;
          <br></br>
          10.6. Please do not collect or harvest any personally identifiable
          information from the website, use communication systems provided by
          the website for any commercial solicitation purposes, solicit for any
          reason whatsoever any users of the website concerning their
          submissions to the website, or publish or distribute any vouchers or
          codes in connection with the website, or scrape or hack the website.
          <br></br>
          10.7. The Terms and Conditions together with the Privacy Policy, any
          order form and payment instructions constitute the entire agreement
          between you and us. No other terms whether expressed or implied shall
          form part of this Agreement. In the event of any conflict between
          these Terms and Conditions and any other term or provision on the
          Website, these Terms and Conditions shall prevail.<br></br>
          10.8. If any term or condition of our Agreement shall be deemed
          invalid, illegal or unenforceable, the parties hereby agree that such
          term or condition shall be deemed to be deleted and the remainder of
          the Agreement shall continue in force without such term or condition.
          <br></br>
          10.9.These Terms and Conditions and our Agreement shall be governed by
          and construed by the laws of India. The parties hereto submit to the
          exclusive jurisdiction of the courts of India. The place of
          jurisdiction shall be exclusively in Delhi.<br></br>
          10.10.No delay or failure on our part to enforce our rights or
          remedies under the Agreement shall constitute a waiver on our part of
          such rights or remedies unless such waiver is confirmed in writing.
          <br></br>
          10.11. These Terms and Conditions and a contract(and all
          non-contractual obligations arising out of or connected to them) shall
          be governed and construed by Indian Laws. Both we and you hereby
          submit to the non-exclusive jurisdiction of the Indian Courts. All
          dealings, correspondence and contacts between us shall be made or
          conducted in the English language.<br></br>
          10.12 While sharing my Phone no., Email and Name during the
          registration or payment process, I understand that cakelaya can send
          transactional and promotional SMS messages to my registered phone
          number. I also understand that cakelaya can send transactional and
          promotional Email messages to my registered email as well.<br></br>
          10.13 As we will be processing the order post your confirmation, it
          won't be possible to modify or cancel the order once the telephonic
          confirmation is done.<br></br>
          10.14 I understand that cakelaya can send transactional and
          promotional SMS, Calls, Whatsapp, RCS and emails on my registered
          email ID & and number.<br></br>
          10.15 In any case, if the order is placed by any individual
          unethically from cakelaya.com. This will be considered as part of a
          fraud. The company has the right to cooperate with competent law
          enforcement agencies and to ask them to take appropriate action
          whenever such phenomena occur. Additionally, the company will notify
          the police or other competent authority.<br></br>
        </Context>
      </Content>
      <Footer />
    </Container>
  );
};

export default Term;

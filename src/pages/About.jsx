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

export const About = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Content>
        <Head>About Us</Head>
        <Context>
          We're a team of innovative thinkers driven by a shared vision to
          revolutionize the way students celebrate special occasions. Here's a
          glimpse into our story:
        </Context>
        <Context>
          <ol
            style={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <li>
              <b>Identifying a Need</b>: As students ourselves, we've
              experienced the struggle of finding affordable and delicious cakes
              for birthdays and other celebrations. Witnessing our peers
              trekking long distances – 5 to 6 kilometres – just to fetch a cake
              highlighted a glaring problem.
            </li>
            <li>
              <b>Breaking the Monopoly</b>: We recognized that few players
              monopolized the cake market, charging exorbitant prices due to
              their stronghold. Students, compelled by distance and lack of
              alternatives, were forced to accept these inflated rates.
            </li>
            <li>
              <b>A Student-Centric Solution</b>: Determined to alleviate this
              common headache, we envisioned a solution: Cakeलाया ? – a startup
              dedicated to delivering cakes and other delectable treats right to
              students' doorsteps, eliminating the need for lengthy travels and
              overpriced purchases.
            </li>
            <li>
              <b>Convenience at Your Fingertips</b>: With Cakeलाया ?, students
              can simply sit back, relax, and enjoy their special occasions with
              loved ones while we handle all their cake and snack needs. Our
              seamless delivery service ensures that celebrations are
              stress-free and enjoyable.
            </li>
            <li>
              <b> Our Promise</b>: We're committed to providing not just cakes,
              but memorable experiences that enhance every celebration. From
              birthdays to impromptu gatherings, Cakeलाया ? is here to add a
              touch of sweetness to every moment.
            </li>
            <li>
              <b>Join the Celebration</b>: Join us on this exciting journey as
              we redefine the way students celebrate. Let Cakeलाया ? be your
              go-to destination for all things delicious and delightful, making
              every occasion truly special.
            </li>
          </ol>
        </Context>
        <Context>
          At Cakeलाया ?, we're not just delivering cakes – we're delivering
          happiness, one slice at a time.
        </Context>
      </Content>
      <Content>
        <Head>Work for Social Cause</Head>
        <Context>Engage, Impact, and Make a Difference with Cakeलाया ?</Context>
        <Context>
          <ol
            style={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <li>
              <b>Giving Back, One Order at a Time</b>: For every order placed,
              we contribute 5% of the net order value to the KOSHISH EDUCATIONAL
              & WELFARE SOCIETY. It's not just about cakes; it's about making a
              meaningful impact in the lives of others.
            </li>
            <li>
              <b>Supporting Education for All</b>: Our partnership with the
              KOSHISH NGO aims to provide quality education to underprivileged
              individuals. With every purchase, you're helping to bridge the gap
              and empower those in need through education.
            </li>
            <li>
              <b>Transparency and Accountability</b>: Curious about our
              donations? Feel free to reach out to us at{" "}
              <a href="mailto:support@cakelaya.com">support@cakelaya.com</a> to
              learn more about how your orders are making a difference in the
              community. We're committed to transparency every step of the way.
            </li>
            <li>
              <b>No Extra Charges, Just Heartfelt Giving</b>: We believe in
              making giving back simple and accessible. There are no additional
              charges for our donation initiative. Instead, we allocate 1% of
              each order to support the cause, ensuring that every purchase
              counts.
            </li>
            <li>
              <b> Join the Movement</b>: By choosing Cakeलाया ?, you're not just
              indulging in delicious treats – you're joining a movement for
              positive change. Together, we can make a difference and spread
              joy, one slice of cake at a time.
            </li>
            <li>
              <b>Together, We Can Make a Difference</b>: Let's come together to
              support education and empower those in need. With Cakeलाया ?,
              every order becomes a gesture of kindness and compassion.
            </li>
          </ol>
        </Context>
      </Content>
      <Content style={{ border: "none" }}>
        <Head>Our Aim and Vision</Head>
        <Context>
          <ol
            style={{
              padding: 0,
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
            }}
          >
            <li>
              <b>Solving Tier 2 and Tier 3 Cake Delivery Woes</b>: Our primary
              goal is to revolutionize cake delivery in Tier 2 and Tier 3
              cities, where existing options often fall short. We're here to
              bridge the gap and bring delicious cakes right to your doorstep.
            </li>
            <li>
              <b>Eliminating Overpriced Options</b>: Existing marketplace
              options are not just inefficient; they're also notorious for
              overpricing cakes. We're determined to change that narrative by
              offering affordable solutions without compromising on quality.
            </li>
            <li>
              <b>Empowering Local Bakers, Building a Fair Marketplace</b>: By
              partnering with small and local bakers, we're creating a level
              playing field where everyone benefits. No more domination by big
              players – just fair opportunities for all.
            </li>
            <li>
              <b>Win-Win for Customers and Shopkeepers</b>: Our mission is
              simple: to ensure both customers and local shopkeepers reap the
              rewards. With fair pricing and quality cakes, everyone wins.
            </li>
            <li>
              <b>Supporting Post-Lockdown Recovery</b>: In the wake of lockdown
              losses, we believe in leveraging technology to uplift struggling
              businesses. Our platform not only benefits customers but also
              supports local vendors in their recovery journey.
            </li>
            <li>
              <b>Freshness Guaranteed, Quality Assured</b>: Your health and
              satisfaction are our top priorities. That's why all our cakes are
              freshly baked and prepared within 30 minutes of your order,
              ensuring you enjoy the best quality every time.
            </li>
            <li>
              <b>Adding Flavor to Every Occasion</b>: Whether it's a birthday,
              anniversary, internship celebration, or placement party, a cake is
              an essential ingredient for a memorable occasion. Let us enhance
              your celebrations with our delicious offerings.
            </li>
            <li>
              <b>Convenience Redefined</b>: Imagine indulging in the finest
              cakes from the comfort of your room with just a simple online
              website. With Cakeलाया ?, convenience and affordability go hand in
              hand – it's a win-win for everyone involved.
            </li>
            <li>
              <b>Experience the Difference</b>: Give our services a try and
              discover a hassle-free cake delivery experience like never before.
              We're here to make your celebrations sweeter, one slice at a time.
            </li>
          </ol>
        </Context>
        <Context>
          Ready to join the cake revolution? Let's indulge in convenience,
          affordability, and deliciousness together with Cakeलाया ?!
        </Context>
      </Content>
      <Content style={{ border: "none" }}>
        <Head>Our Key Values</Head>
        <Context>
          At our core, we cherish each of our customers and strive to deliver
          unparalleled value through premium products, exceptional services, and
          unbeatable affordability. Our ethos is defined by innovation, driven
          by technology, and rooted in a people-first approach.
        </Context>
        <Context>
          <b>Foundational Values</b>:
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              rowGap: "10px",
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            <li>
              <b>Character</b>: Upholding integrity and ethical standards in
              everything we do.
            </li>
            <li>
              <b>Commitment</b>: Dedicated to fulfilling promises and exceeding
              expectations.
            </li>
            <li>
              <b>Compliance</b>: Adhering to legal and moral obligations without
              compromise.
            </li>
            <li>
              <b>Ethics</b>: Conducting business with fairness, honesty, and
              integrity.
            </li>
            <li>
              <b>Fair-Play</b>: Ensuring equitable treatment for all
              stakeholders.
            </li>
            <li>
              <b>Finishing to the End</b>: Demonstrating perseverance and
              determination to achieve goals.
            </li>
            <li>
              <b>Integrity</b>: Acting with honesty, sincerity, and transparency
              in all interactions.
            </li>
            <li>
              <b>Ownership</b>: Taking responsibility and accountability for our
              actions and outcomes.
            </li>
            <li>
              <b>Persistence</b>: Pursuing goals with unwavering determination
              and resilience.
            </li>
            <li>
              <b>Transparency</b>: Fostering openness and clarity in
              communication and operations.
            </li>
            <li>
              <b>Trustworthiness</b>: Building trust through reliability,
              consistency, and honesty.
            </li>
          </ul>
        </Context>

        <Context>
          <b>Compassionate Approach</b>:
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              rowGap: "10px",
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            <li>
              <b>Empathy</b>: Understanding and empathizing with the needs and
              feelings of others.
            </li>
            <li>
              <b>Gratitude</b>: Cultivating appreciation for customers,
              colleagues, and partners.
            </li>
            <li>
              <b>Inclusiveness</b>: Embracing diversity and promoting
              inclusivity in all aspects of our operations.
            </li>
            <li>
              <b>Respect</b>: Treating every individual with dignity, respect,
              and kindness.
            </li>
          </ul>
        </Context>
        <Context>
          <b>Customer-Centric Focus</b>:
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              rowGap: "10px",
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            <li>
              <b>Accountability</b>: Holding ourselves responsible for
              delivering exceptional results.
            </li>
            <li>
              <b>Customer Satisfaction</b>: Prioritizing the needs and
              satisfaction of both external and internal customers.
            </li>
            <li>
              <b>Proactive Feedback</b>: Actively seeking and incorporating
              feedback to enhance our products and services.
            </li>
            <li>
              <b>Responsiveness</b>: Being attentive and responsive to customer
              needs and concerns.
            </li>
          </ul>
        </Context>

        <Context>
          <b>Promoting Collective Growth</b>:
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              rowGap: "10px",
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            <li>
              <b>Community Service</b>: Giving back to the community through
              meaningful contributions and initiatives.
            </li>
            <li>
              <b>Cost-consciousness</b>: Efficiently managing resources to
              optimize value for stakeholders.
            </li>
            <li>
              <b>Profitability</b>: Striving for sustainable growth and
              profitability to ensure long-term success.
            </li>
            <li>
              <b>Social Responsibility</b>: Recognizing our obligation to
              contribute positively to society.
            </li>
            <li>
              <b>Sustainability</b>: Embracing practices that promote
              environmental sustainability and responsible resource management.
            </li>
          </ul>
        </Context>

        <Context>
          <b>Embracing Continuous Transformation</b>:
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              rowGap: "10px",
              display: "flex",
              flexDirection: "column",
              marginTop: "4px",
            }}
          >
            <li>
              <b>Adaptability</b>: Embracing change and adapting quickly to
              evolving circumstances.
            </li>
            <li>
              <b>Agility</b>: Nimbly responding to market dynamics and emerging
              opportunities.
            </li>
            <li>
              <b>Collaboration</b>: Fostering a culture of collaboration and
              teamwork to achieve shared goals.
            </li>
            <li>
              <b>Continuous Improvement</b>: Pursuing excellence through ongoing
              learning and refinement.
            </li>
            <li>
              <b>Curiosity</b>: Encouraging curiosity and a thirst for knowledge
              and innovation.
            </li>
            <li>
              <b>Experimentation</b>: Fearlessly exploring new ideas and
              approaches to drive innovation.
            </li>
            <li>
              <b>Introspection</b>: Reflecting on past experiences to inform
              future actions and decisions.
            </li>
            <li>
              <b>Resilience</b>: Demonstrating resilience in the face of
              challenges and adversity.
            </li>
            <li>
              <b>Sharing</b>: Promoting knowledge-sharing and collaboration to
              foster collective growth.
            </li>
            <li>
              <b>Seeking Knowledge</b>: Encouraging a culture of lifelong
              learning and personal development.
            </li>
          </ul>
        </Context>
        <Context>
          In essence, our commitment to excellence extends beyond mere
          transactions – it's about fostering lasting relationships, creating a
          positive impact, and continuously striving for improvement in every
          facet of our operations. Join us on this journey toward excellence and
          collective growth.
        </Context>
      </Content>

      {/* <Content2>
        <Head>Founders</Head>
        <Context2>
          <Box>
            <ImageBox>
              <Image src="images/founder1.png"></Image>
            </ImageBox>
            <Name>Advit Mittal</Name>
            <Dep>(Co-Founder, CEO)</Dep>
            <Des>
              Advit Mittal is a young, motivated, talented, and passionate
              individual who aims at building Cakeलाया ? as a successful
              and reputed brand.
            </Des>
          </Box>
          <Box>
            <ImageBox>
              <Image src="images/founder2.png" ></Image>
            </ImageBox>
            <Name>Vaibhav Pathak</Name>
            <Dep>(Co-Founder)</Dep>
            <Des>
              Vaibhav Pathak is the lead developer here. His expertise in the
              field has helped frame the technicalities for Cakeलाया ?.
            </Des>
          </Box>
          <Box>
            <ImageBox>
              <Image src="images/founder3.png"></Image>
            </ImageBox>
            <Name>Abhimanyu Solanki</Name>
            <Dep>(Co-Founder, CMO)</Dep>
            <Des>
              Abhimanyu Solanki possesses excellent communication, persuasion
              and negotiation skills. He is the head of the entire public
              relations department at Cakeलाया ?.
            </Des>
          </Box>
        </Context2>
      </Content2>       */}
      <Footer />
    </Container>
  );
};

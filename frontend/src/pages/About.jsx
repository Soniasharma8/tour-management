import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <Subtitle subtitle="About Us" />
            <h2>Welcome to Our Tour Management Platform</h2>
            <p>
              Our mission is to provide unforgettable travel experiences by connecting travelers with the best tours and guides around the world.
              We are passionate about making your travel dreams come true with seamless booking, expert guidance, and personalized service.
            </p>
            <p>
              With years of experience in the travel industry, our dedicated team works tirelessly to curate unique tours that cater to all interests and preferences.
              Whether you seek adventure, culture, or relaxation, we have something special for you.
            </p>
            <p>
              Join thousands of satisfied travelers who have explored new destinations and created lasting memories with us.
              Your journey starts here.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

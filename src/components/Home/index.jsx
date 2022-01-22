import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <Container className="headline">
        <Row>
          {/* 1. Headline - This is what people will see first  */}
          <Col>
            <h1>Hi, I'm John.</h1>
            <h2>I love to build amazing apps.</h2>
            <p>
              A little paragraph about yourself. Keep it simple, short, and
              straight to the point. Use 3-5 sentences in this section.
              Highlight your current position and skillset.
            </p>
            {/* 2. Action Buttons */}
            <Col>
              <Button variant="success" style={{ marginRight: "8px" }}>
                Work With Me
              </Button>
              <Button variant="secondary">See My Past Work</Button>
            </Col>
          </Col>
          {/* 3. Picture of Yourself - people will want to see what you look like  */}
          <Col md={3}>
            <img
              src="images/me.png"
              alt="Picture of Me"
              className="img-fluid my-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

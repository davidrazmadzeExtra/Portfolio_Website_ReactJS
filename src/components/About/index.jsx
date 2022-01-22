import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      {/* 3 Main Images - what you can do  */}
      <Container>
        <Row>
          {/* 1. iOS Development  */}
          <Col>
            <Card className="ios">
              <Card.Img variant="top" src="images/iPhone.png" />
              <Card.Body>
                <Card.Title>iOS Development</Card.Title>
                <Card.Text>
                  Create and publish amazing iOS Apps to the App Store using
                  Swift and Objective-C.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* 2. Web Development  */}
          <Col>
            <Card className="web">
              <Card.Img variant="top" src="images/website_design.png" />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  5+ years of experience creating responsive websites using ReactJS, Angular, Flask, etc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* 3. Python Programming */}
          <Col>
            <Card className="python"> 
               <Card.Img variant="top" src="images/python.png"/>
              <Card.Body>
                <Card.Title>Python</Card.Title>
                <Card.Text>
                  Data Analysis, Machine Learning, and General Scripting for any project's needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

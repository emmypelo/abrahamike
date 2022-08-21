import React from "react";
import logo from "../../imgs/about-img.png";
// import { HashLink as Link } from "react-router-hash-link";
import Typewriter from "typewriter-effect";
import { Card, Accordion } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-container" id="about">

      <div className="container-lg mt-5">
        <h2 className="text-center overflow-hidden">WELCOME TO ABRAHAMIKE CONSTRUCTION</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center mt-1 d-md-block">
            <img className="img-fluid" src={logo} alt="about" />
            <div>
              <Typewriter
                className="bg-primary"
                options={{
                  strings: [
                    "BUILDING CONSTRUCTION",
                    "ENGINEERING DESIGN",
                    "PROJECT MANAGEMENT",
                    "ARCHITECTURAL DESIGN",
                    "QUANTITY SURVEYING",
                    "RENOVATION EXPERTS",
                  ],
                  autoStart: true,
                  cursor: "........WITH ACL",
                  pauseFor: 2000,
                  deleteSpeed: 2,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="col-md-6  text-md-center flex-md-column justify-content-start align-self-start p-5 ">
            <div className="rounded">
              <Card className="text-center  my-3">
                <Card.Header className="text-primary"> <p className="h2 overflow-hidden">OUR MISSION</p> </Card.Header>
                <Card.Body>
                  <Card.Text className="h3 overflow-hidden">
                    COMMITED TO DELIVERING QUALITY CONSTRUCTION AND SERVICES
                    ACCORDING TO OUR CLIENTD REQUIREMENTS AND IMPLEMENT IT
                    WITHIN THE IDENTIFIED FINANCIAL BOUNDARIES
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="text-center my-3">
                <Card.Header className="h2 text-primary">OUR VISION</Card.Header>
                <Card.Body>
                  <Card.Text className="h3 overflow-hidden ">
                    WILL BE CONTRACTOR OF CHOICE FOR CONSTRUCTION SERVICES AND
                    SOLUTION BY EXCEEDING CUSTOMERS EXPECTATION AND PROVIDING
                    UNSURPASSED VALUE
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="text-center my-3">
                <Card.Header className="h2 text-primary">OUR CORE VALUES</Card.Header>
                {/* <Card.Title className="overflow-hidden">S I T E</Card.Title> */}
                <Card.Body>
                  <Card.Text>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="overflow-hidden">
                          {" "}
                          <p className="h3 overflow-hidden">
                            <span className="h1">S-</span>SAFETY
                          </p>{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="h3 overflow-hidden">
                            PROVIDE AN ENVIRONMENT IN WHICH OUR EMPLOYEES CAN DO
                            THEIR EXTRAORDINARY WORK WITHOUT HAZARD
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="overflow-hidden">
                          {" "}
                          <p className="h3 overflow-hidden">
                            <span className="h1">I-</span>INTEGRITY
                          </p>{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="h3 overflow-hidden">
                           CONDUCT OUR BBUSINESS IN A LEGAL AND ETHICAL MANNER, BUILD LASTING RELATIONSHIP THROUGH HONEST, RESPECT AND TRUST WITH OUR CLIENTS
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="overflow-hidden">
                          {" "}
                          <p className="h3 overflow-hidden">
                            <span className="h1">T-</span>TRUST
                          </p>{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="h3 overflow-hidden">
                            MAINTAIN LONG TERM PARTNERSHIP WITH OUR CLIENT BY DELIVERING QUALITY PROJECTS TO TIME AND WITHING SPECIFIED BUDGET. 
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header className="overflow-hidden">
                          {" "}
                          <p className="h3 overflow-hidden">
                            <span className="h1">E-</span>EXCELLENCE
                          </p>{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p className="h3 overflow-hidden">
                           SKILLFULLY EXECUTE OUR WORK, UTILIZING INNOVATION AND INGENUITY SO THAT WE PRODUCE HIGH QUALITY FINISHED PRODUCTS AND EXCELLENT CUSTOMER SERVICE.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

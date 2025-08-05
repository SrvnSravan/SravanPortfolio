import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sravan M </span>
            from <span className="purple"> Dubai, UAE.</span>
            <br />
            I am currently employed as a Frontend developer at SEKITECH IT Solutions, Dubai, UAE.
            <br />
            I have completed Graduation in B COM with Computer Applications
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Videography
            </li>
            <li className="about-activity">
              <ImPointRight />Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sravan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

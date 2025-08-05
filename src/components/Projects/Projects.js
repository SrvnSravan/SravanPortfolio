import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import CapitalExp from "../../Assets/Projects/CapitalExp.png"
import SISAIimg from "../../Assets/Projects/SISAIimg.png";
import BurjWingsimg from "../../Assets/Projects/BurjWingsimg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CapitalExp}
              isBlog={false}
              title="Capital Express"
              description="Capital Express is a UAE-based bus ticket booking platform designed for seamless intercity travel reservations. I developed this website using React.js, focusing on creating a smooth and responsive user experience for travelers.

The application includes key features like trip search, ticket booking, user authentication, and responsive design for both mobile and desktop users. It’s built with performance and scalability in mind, and integrates with RESTful APIs for real-time data handling."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="http://www.capitalexpress.ae"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SISAIimg}
              isBlog={false}
              title="SISAI Admin"
              description="SISAI is the Admin pannel of Capital Express where admins can upload the Trips, Destinations, Drivers, Routes and schedule Trips. Also admins can create, upload, edit and delete Drivers, Trips, Routes and Destinations. This admin app is builded with React JS and Java"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://1drv.ms/f/c/6c0e1dc8784acea3/EuxM8A3bg-dLkoIVqy4lAokBActGYA8hc7t-LRVfTlY-ew?e=RvkMtT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BurjWingsimg}
              isBlog={false}
              title="Burj Wings"
              description="Burj Wings is a customer app for booking Flight tickets for the users, this project is a UAE based project for flight ticket . The users can choose the destination from where to where they can travel. The users can also book the return trips also. This Burj Wings customer app is builded with React JS."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://1drv.ms/f/c/6c0e1dc8784acea3/Eq0TKmtIFkZGuNruq3m9JpwBRXMN6hHQBf85fuT17E5xxw?e=UUg8mR"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

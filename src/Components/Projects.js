import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import intro1 from "../Assets/img/intro/intro1.jpg";
import intro2 from "../Assets/img/intro/intro2.jpg";
import intro3 from "../Assets/img/intro/intro3.jpg";
import intro4 from "../Assets/img/intro/intro4.jpg";
import intro5 from "../Assets/img/intro/intro5.jpg";
import intro6 from "../Assets/img/intro/intro6.jpg";
import intro7 from "../Assets/img/intro/intro7.jpg";
import intro8 from "../Assets/img/intro/intro8.jpg";
import intro9 from "../Assets/img/intro/intro9.jpg";

import verse1 from "../Assets/img/verse/verse1.jpg";
import verse2 from "../Assets/img/verse/verse2.jpg";
import verse3 from "../Assets/img/verse/verse3.jpg";
import verse4 from "../Assets/img/verse/verse4.jpg";
import verse5 from "../Assets/img/verse/verse5.jpg";
import verse6 from "../Assets/img/verse/verse6.jpg";
import verse7 from "../Assets/img/verse/verse7.jpg";
import verse8 from "../Assets/img/verse/verse8.jpg";
import verse9 from "../Assets/img/verse/verse9.jpg";

import reff1 from "../Assets/img/reff/reff1.jpg";
import reff2 from "../Assets/img/reff/reff2.jpg";
import reff3 from "../Assets/img/reff/reff3.jpg";
import reff4 from "../Assets/img/reff/reff4.jpg";
import reff5 from "../Assets/img/reff/reff5.jpg";
import reff6 from "../Assets/img/reff/reff6.jpg";
import reff7 from "../Assets/img/reff/reff7.jpg";
import reff8 from "../Assets/img/reff/reff8.jpg";
import reff9 from "../Assets/img/reff/reff9.jpg";

import colorSharp2 from "../Assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: intro9,
    },
  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: verse9,
    },
  ];
  const projects3 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: reff9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Galeri</h2>
                  <p>dokumentasi dan history</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">intro</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">verse</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">reff</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

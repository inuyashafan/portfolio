import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Austin Safety Index",
      description: "A full-stack, and responsive website containing data visualizations and an interactive map of crime incidents in Austin, Texas.",
      imgUrl: projImg1,
    },
    {
      title: "Tableau Dashboard on Real Estate",
      description: "A compelling and interactive dashboard containing information on house sales in King Country, Washington from 2014-2015.",
      imgUrl: projImg2,
    },
    {
      title: "Phonebook web app",
      description: "A simple, elegant and full-web app where users can create an account and store contact information.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have a variety of full-stack and data related projects. All were made with a variety of skills from R to Javascript to even tableau.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project links</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project Skills</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Here are the links to each project so you can check it out youself:</p>
                      <br></br><p><a href="https://austin-safety-index.netlify.app/" target="_blank">Austin Safety Index</a></p> <p><a href="https://johns-phonebook.netlify.app" target="_blank">Phonebook WebApp</a></p> <p><a href="https://public.tableau.com/app/profile/john.abreu2685/viz/KingCountyHouseSales_17077001452140/KingCountyHouseSales" target="_blank">Tableau House Sales Dashboard</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My House Sales Dashboard was made with Tableau Public and the data source of an excel sheet. My phonebook was made with Flask for the back-end, React for the front-end and elephantsql for a database. My Crime Report Website Also uses these frameworks but takes it a step further with usage of the matplotlib package of python and R to design graphs. Both of these two websites use Auth0 to support login functionality.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
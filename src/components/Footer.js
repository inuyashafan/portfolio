import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.jpeg";
import navIcon1 from "../assets/img/navIcon1.jpeg";
import navIcon2 from "../assets/img/navIcon2.jpeg"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/john-abreu-0a4888299/" target="_blank"><img src={navIcon1} alt="linkedin icon" /></a>
              <a href="https://github.com/inuyashafan" target="_blank"><img src={navIcon2} alt="github icon"/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
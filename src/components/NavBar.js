import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo1 from "../assets/img/logo1.jpeg";
import navIcon1 from "../assets/img/navIcon1.jpeg";
import navIcon2 from "../assets/img/navIcon2.jpeg"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else { 
        setScrolled(false);
      }}
      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo1} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href='https://www.linkedin.com/in/john-abreu-0a4888299/' target="_blank"><img src={navIcon1} alt='linkedin icon' /></a>
                <a href="https://github.com/inuyashafan" target="_blank"><img src={navIcon2} alt="github icon" /></a>
              </div>
              <a href="mailto:johnabreu67@gmail.com"><button className="vvd"  ><span>Let's Connect</span></button></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
} 


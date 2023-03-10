import React from 'react'
import { Navbar , Container, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'


function MynavScroll() {
  return (
    <div>
        <Navbar fixed="top">
            <Container>
                <Navbar.Brand>Technoweit</Navbar.Brand>
                <Navbar.Toggle aria-controls='res-nav-bar'/>
                <Navbar.Collapse id='res-nav-bar'>
                    <Nav className="ms-auto">
                        <Link to="home" spy={true} smooth={true} duration={1000}>Home</Link>
                        <Link to="about" spy={true} smooth={true} duration={1000}>About</Link>
                        <Link to="services" spy={true} smooth={true} duration={3000} delay={2000}>Services</Link>
                        <Link to="courses" spy={true} smooth={true} duration={1000}>Courses</Link>
                        <Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default MynavScroll
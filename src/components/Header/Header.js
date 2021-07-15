import React from 'react'
// import { Navbar, Nav, Container} from 'react-bootstrap'
// import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
//import style
import './style.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Typical from "react-typical"
import { Row, Col } from 'react-bootstrap';
import '../responsive.css'
/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <div>

            <Navbar>
                <Container>
                    <Navbar.Brand href="#home"> <img className="logo" src="./assets/images/logo.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav style={{ marginTop: "auto" }} className="me-auto">
                                <Nav.Link className="navLink" href="#home">About</Nav.Link>
                                <Nav.Link className="navLink" href="#features">Experience</Nav.Link>
                                <Nav.Link className="navLink" href="#pricing">Projects</Nav.Link>
                                <Nav.Link className="navLink" href="#pricing">Contact</Nav.Link>
                                <Nav.Link >
                                    <button style={{ marginTop: "-10%" }} type="submit" onclick="window.open('file.doc')" className="btn btn-outline-danger">RESUME</button>
                                    </Nav.Link>
                            </Nav>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           <Row>
               <Col>
               <div className="centerDiv">
                <h1>Hi, I'm Donald</h1>
                
                <Typical
                    className="typicalText"
                    steps={['A jack of all trade in the tech industry..', 1000,
                            'I design and build user interface', 500,
                            'A back end & front end developer', 500,
                            'Technical support specialist', 500,
                            'Computer security expert', 500,]}
                            loop={Infinity}
                            wrapper="p"
                />
                <span className="aboutText">
                    I'm a passionate junior fullstack software engineer
                    specializing in building highly responsive web and
                    android apps using the latest technology platforms.

                </span>
                <br/>
                <button className="common-btn">Get in touch</button>
            </div>

               </Col>
               <Col> <div className="svgImage">
                <img src="./assets/images/side.svg" width="80%" alt="svg"/>
            </div></Col>
           </Row>
           <div className="fixedText">
               <Col>
               <Row><i class="fa fa-github" aria-hidden="true"></i></Row>
               <Row><i class="fa fa-instagram" aria-hidden="true"></i></Row>
               <Row><i class="fa fa-twitter" aria-hidden="true"></i></Row>
               <Row><i class="fa fa-linkedin" aria-hidden="true"></i></Row>
              <div className="vertical"></div>
               </Col>
           </div>
           <div className="fixedTextRight">
               <Col>
               
               <Row><span className="profileText">kibetdonald97@gmail.com</span></Row>
              <div className="vertical2"></div>
               </Col>
           </div>
           
           
        </div>
    )

}

export default Header
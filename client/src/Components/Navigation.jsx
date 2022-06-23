import React from 'react';
import '../App.css'
import { FiLogIn, FiLink } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/" className='header'  style={{ color: "white", fontSize: 25}} >HappyPets</Navbar.Brand>
          <Navbar.Brand><img src='https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png' height="25px"></img></Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ marginLeft: 1050}}>
              <Nav.Link href="/" style={{ color: "white", fontSize: 20}} className='header'>Login</Nav.Link>
              <Nav.Link href="/register" style={{ color: "white", fontSize: 20, marginLeft: 20}} className='header'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default Navigation;
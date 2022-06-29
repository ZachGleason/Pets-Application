import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { useNavigate } from "react-router-dom";


const DashboardNav = (props) => {

    // const nav = useNavigate();

    // useEffect(() => {
	// 	if (Object.keys(props.user).length === 0) {
	// 		nav("/");
	// 	}
	// }, []);

  return (
    <div>
        <>
        {[false].map((expand) => (
            <Navbar key={expand} bg="secondary" expand={expand} className="mb-3">
            <Container fluid>
                <Navbar.Brand><img src='https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png' height="25px"></img></Navbar.Brand>
                <Navbar.Brand href="/"><b style={{ color: "white", fontFamily: 'Abel', letterSpacing: "2px"}}>HappyPets</b></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/animals">Animals</Nav.Link>
                        <Nav.Link href="profile">Profile</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </>
    </div>
  )
}

export default DashboardNav
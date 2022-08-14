import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";



const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: 'black'
  };

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <NavLink
                style={({isActive}) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                style={({isActive}) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                style={({isActive}) => (isActive ? activeStyle : undefined)}
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

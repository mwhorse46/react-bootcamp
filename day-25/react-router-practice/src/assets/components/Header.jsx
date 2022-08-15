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
    color: "black",
  };

  let activeClassName = "isActive nav-link";

  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="/">React Router Dom</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
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

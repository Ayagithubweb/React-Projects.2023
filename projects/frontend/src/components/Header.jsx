import React from "react";
import {
  // Button,NavDropdown,Offcanvas,
  Container,
  Nav,
  Navbar,
  
} from "react-bootstrap";
// import { Form } from "react-router-dom";
import { ImAmazon } from "react-icons/im";

function Header() {
  return (
    
    <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#"><ImAmazon/> <span className="text-warning">amazon</span> </Navbar.Brand>
          <Nav className="me-auto float-start">
            <Nav.Link href="#">Card</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
/*
      <Navbar  bg="light"  className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-`}
              aria-labelledby={`offcanvasNavbarLabel-expand-`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>*/
    
  );
}

export default Header;

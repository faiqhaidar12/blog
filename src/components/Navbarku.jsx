import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navbarku = () => {
  return (
    <div className="border border-dark">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">WEB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pagination">Pagination</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarku;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Buy&Sell</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link> &nbsp;
            <Link to="/about">About</Link> &nbsp;
            <Link to="/contact">Contact</Link> &nbsp;
          </Nav>
          <Nav>
            <Link to="/signup">Signup</Link> &nbsp;
            <Link to="/signin">Login</Link> &nbsp;
            {/* <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link eventKey={2} href="/signin">Login</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
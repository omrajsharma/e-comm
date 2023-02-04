import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

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
            <Link className='nav-item' to="/">Home</Link>
            <Link className='nav-item' to="/about">About</Link>
            <Link className='nav-item' to="/contact">Contact</Link>
          </Nav>
          <Nav>
            <Link className='nav-item' to="/signup">Signup</Link>
            <Link className='nav-item' to="/signin">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={'/'} className="navbar-brand">
          Home
        </Link>
        <Nav className="me-auto">
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/join">
            Join
          </Link>
          <Link className="nav-link" to="/user/list/1">
            Member
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(isAuthenticated);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>React Auth0 Demo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {isAuthenticated ? (
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button variant="light" onClick={loginWithRedirect}>
              Login
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

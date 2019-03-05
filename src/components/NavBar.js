import React from 'react';
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl
} from 'react-bootstrap'

const NavBarHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Navbar.Brand>
        <Link to="/" className="text-success" style={{ fontWeight: "bold" }}>PiPi App</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/users" className="text-muted mr-2">Users</Link>
          <Link to="/posts" className="text-muted">Posts</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarHeader;
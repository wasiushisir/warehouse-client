import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
 
  
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand as ={Link} to="/">Fr Telecom & Inventory Warehouse</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className='navbar collapse collapse' id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#feedback">Feedback</Nav.Link>
     
    </Nav>
    <Nav>
      
        {user?<Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
        :''}
      {user?<Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
      :''}
      {user?<Nav.Link as={Link} to="/menageInventory">Manage Item</Nav.Link>:
      ''}
    
      {user?<Nav.Link as={Link} to="/logout">Logout</Nav.Link>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

            
        </div>
    );
};

export default Header;
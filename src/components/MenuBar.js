import React, { Component } from 'react'; 
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class MenuBar extends Component { 
  render() {
    return (
      <Navbar collapseOnSelect>
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Archive</NavItem>
          <NavItem>Contact</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default MenuBar; 
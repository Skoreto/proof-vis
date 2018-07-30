import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomNavbar.css';

const CustomNavbar = () => (
  <Navbar className="main-nav" default collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <Image src="assets/image/logo.png" alt="Vizualizace důkazů" />ProofVis
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown
          eventKey={1}
          title={
            <span><FontAwesomeIcon icon="arrow-right" /> Důkazy přímo</span>
          }
          id="basic-nav-dropdown"
          className={"nav-item"}
        >
          <MenuItem eventKey={1.1} componentClass={Link} href="/priklad20" to="/priklad20">
            Příklad 20
          </MenuItem>
          <MenuItem eventKey={1.2} componentClass={Link} href="/priklad23" to="/priklad23">
            Příklad 23
          </MenuItem>
          <MenuItem eventKey={1.3} componentClass={Link} href="/priklad26v2" to="/priklad26v2">
            Příklad 26
          </MenuItem>
        </NavDropdown>
        <NavDropdown
          eventKey={2}
          title={
            <span><FontAwesomeIcon icon="sync-alt" /> Důkazy nepřímo</span>
          }
          id="basic-nav-dropdown"
          className={"nav-item"}
        >
          <MenuItem eventKey={2.1} componentClass={Link} href="/priklad21" to="/priklad21">
            Příklad 21
          </MenuItem>
          <MenuItem eventKey={2.2} componentClass={Link} href="/priklad24" to="/priklad24">
            Příklad 24
          </MenuItem>
        </NavDropdown>
        <NavDropdown
          eventKey={3}
          title={
            <span><FontAwesomeIcon icon="bolt" /> Důkazy sporem</span>
          }
          id="basic-nav-dropdown"
          className={"nav-item"}
        >
          <MenuItem eventKey={3.1} componentClass={Link} href="/priklad19" to="/priklad19">
            Příklad 19
          </MenuItem>
        </NavDropdown>
        <NavDropdown
          eventKey={4}
          title={
            <span><FontAwesomeIcon icon="times" /> Protipříklady</span>
          }
          id="basic-nav-dropdown"
          className={"nav-item"}
        >
          <MenuItem eventKey={4.1} componentClass={Link} href="/priklad17a" to="/priklad17a">
            Příklad 17 a) (verze 1)
          </MenuItem>
          <MenuItem eventKey={4.2} componentClass={Link} href="/priklad17av2" to="/priklad17av2">
            Příklad 17 a) (verze 2)
          </MenuItem>
        </NavDropdown>
        <NavItem 
          eventKey={5}
          componentClass={Link}
          href="/platno"
          to="/platno"
          className={"nav-item"}
        >
          {<span><FontAwesomeIcon icon="edit" /> Plátno</span>}
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default CustomNavbar;

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MainNavbar.css';

const MainNavbar = () => (
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
          title={
            <span><FontAwesomeIcon icon="arrow-right" /> Důkazy přímo</span>
          }
          id="primo-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/priklad20">
            <MenuItem>Příklad 20</MenuItem>
          </LinkContainer>
          <LinkContainer to="/priklad23">
            <MenuItem>Příklad 23</MenuItem>
          </LinkContainer>
          <LinkContainer to="/priklad26v2">
            <MenuItem>Příklad 26</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title={
            <span><FontAwesomeIcon icon="sync-alt" /> Důkazy nepřímo</span>
          }
          id="neprimo-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/priklad21">
            <MenuItem>Příklad 21</MenuItem>
          </LinkContainer>
          <LinkContainer to="/priklad24">
            <MenuItem>Příklad 24</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title={
            <span><FontAwesomeIcon icon="bolt" /> Důkazy sporem</span>
          }
          id="sporem-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/priklad19">
            <MenuItem>Příklad 19</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title={
            <span><FontAwesomeIcon icon="draw-polygon" /> Ostatní</span>
          }
          id="protipriklady-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/priklad17a">
            <MenuItem>Příklad 17 a) (verze 1)</MenuItem>
          </LinkContainer>
          <LinkContainer to="/priklad17av2">
            <MenuItem>Příklad 17 a) (verze 2)</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/platno">
          <NavItem className="nav-item">
            <FontAwesomeIcon icon="chalkboard-teacher" /> Plátno
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/napoveda">
          <NavItem className="nav-item">
            <FontAwesomeIcon icon="question" /> Nápověda
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MainNavbar;

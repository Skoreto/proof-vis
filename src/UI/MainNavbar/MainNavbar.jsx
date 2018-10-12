import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MainNavbar.css';

const MainNavbar = (props) => (
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
            <span><FontAwesomeIcon icon="arrow-right" />
              {
                props.isCzechChosen ? ' Přímé důkazy' : ' Direct proofs'
              }
            </span>
          }
          id="primo-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/dukaz1">
            <MenuItem>Důkaz 1</MenuItem>
          </LinkContainer>
          <LinkContainer to="/dukaz2">
            <MenuItem>Důkaz 2</MenuItem>
          </LinkContainer>
          <LinkContainer to="/dukaz3">
            <MenuItem>Důkaz 3</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title={
            <span><FontAwesomeIcon icon="sync-alt" />
              {
                props.isCzechChosen ? ' Nepřímé důkazy' : ' Proofs by contraposition'
              }
            </span>
          }
          id="neprimo-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/dukaz4">
            <MenuItem>Důkaz 4</MenuItem>
          </LinkContainer>
          <LinkContainer to="/dukaz5">
            <MenuItem>Důkaz 5</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title={
            <span><FontAwesomeIcon icon="bolt" />
              {
                props.isCzechChosen ? ' Důkazy sporem' : ' Proofs by contradiction'
              }
            </span>
          }
          id="sporem-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/dukaz6">
            <MenuItem>
              {
                props.isCzechChosen ? ' Důkaz 6' : ' Proof 6'
              }
            </MenuItem>
          </LinkContainer>
        </NavDropdown>
        <NavDropdown
          title={
            <span><FontAwesomeIcon icon="draw-polygon" />
              {
                props.isCzechChosen ? ' Ostatní' : ' Other'
              }
            </span>
          }
          id="protipriklady-nav-dropdown"
          className="nav-item"
        >
          <LinkContainer to="/dukaz7">
            <MenuItem>Důkaz 7 (Protipříklad)</MenuItem>
          </LinkContainer>
        </NavDropdown>
        <LinkContainer to="/platno">
          <NavItem className="nav-item">
            <FontAwesomeIcon icon="chalkboard-teacher" />
            {
              props.isCzechChosen ? ' Plátno' : ' Canvas'
            }
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/napoveda">
          <NavItem className="nav-item">
            <FontAwesomeIcon icon="question" />
            {
              props.isCzechChosen ? ' Nápověda' : ' Help'
            }
          </NavItem>
        </LinkContainer>
        <Button onClick={props.handleTranslation} pullRight>
          {
            props.isCzechChosen ? 'EN' : 'CZ'
          }
        </Button>
      </Nav>   
    </Navbar.Collapse>
  </Navbar>
);

export default MainNavbar;

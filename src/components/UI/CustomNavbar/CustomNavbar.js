import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

const CustomNavbar = () => (
    <Router>
        <Navbar className="main-nav" default collapseOnSelect>
            <Navbar.Header className={"navbar-header"}>
                {/*<Navbar.Brand>*/}
                    {/*<a href="#">Vizualizace důkazů</a>*/}
                {/*</Navbar.Brand>*/}
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/" className={"nav-item"}>
                        Přehled
                    </NavItem>
                    <NavDropdown eventKey={2} title="Důkazy přímo" id="basic-nav-dropdown" className={"nav-item"}>
                        <MenuItem eventKey={2.1} componentClass={Link} href="/priklad20" to="/priklad20">Příklad 20</MenuItem>
                        <MenuItem eventKey={2.2} componentClass={Link} href="/priklad20vis" to="/priklad20vis">
                            Příklad 20 vis.js
                        </MenuItem>
                        <MenuItem eventKey={2.3} href="/" to="/">Příklad 23</MenuItem>
                        <MenuItem eventKey={2.4} href="/" to="/">Příklad 26</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Důkazy nepřímo" id="basic-nav-dropdown" className={"nav-item"}>
                        <MenuItem eventKey={3.1} href="/" to="/">Příklad 21</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={4} title="Důkazy sporem" id="basic-nav-dropdown" className={"nav-item"}>
                        <MenuItem eventKey={4.1}>Příklad 19</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={5} title="Ostatní" id="basic-nav-dropdown" className={"nav-item"}>
                        <MenuItem eventKey={5.1}>Příklad 17 a)</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Router>
);

export default CustomNavbar;
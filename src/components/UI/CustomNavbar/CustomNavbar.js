import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

const CustomNavbar = () => (
    <Navbar className="main-nav" default collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">
                    <Image src="assets/image/icon.png" alt="Vizualizace důkazů"/>VIZUALIZACE DŮKAZŮ
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavDropdown eventKey={1} title="Důkazy přímo" id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={1.1} componentClass={Link} href="/priklad20svg" to="/priklad20svg">
                        Příklad 20 (SVG)
                    </MenuItem>
                    <MenuItem eventKey={1.2} componentClass={Link} href="/priklad20vis" to="/priklad20vis">
                        Příklad 20 (vis.js)
                    </MenuItem>
                    <MenuItem eventKey={1.3} href="/" to="/">Příklad 23</MenuItem>
                    <MenuItem eventKey={1.4} href="/" to="/">Příklad 26</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={2} title="Důkazy nepřímo" id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={2.1} href="/" to="/">Příklad 21</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title="Důkazy sporem" id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={3.1}>Příklad 19</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title="Ostatní" id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={4.1} componentClass={Link} href="/priklad17a" to="/priklad17a">
                        Příklad 17 a)
                    </MenuItem>
                </NavDropdown>
                <NavItem eventKey={5} componentClass={Link} href="/platno" to="/platno" className={"nav-item"}>
                    Plátno
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default CustomNavbar;
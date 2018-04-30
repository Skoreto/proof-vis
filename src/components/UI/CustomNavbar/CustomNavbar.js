import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './CustomNavbar.css'

const CustomNavbar = () => (
    <Navbar className="main-nav" default collapseOnSelect>
        <Navbar.Header className={"navbar-header"}>
            {/*<Navbar.Brand>*/}
                {/*<a href="#">Vizualizace důkazů</a>*/}
            {/*</Navbar.Brand>*/}
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="/" to="/" className={"nav-item"}>
                    Přehled
                </NavItem>
                <NavDropdown eventKey={2} title="Důkazy přímo" id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={2.1} href="/" to="/">Příklad 20</MenuItem>
                    <MenuItem eventKey={2.2} href="/" to="/">Příklad 23</MenuItem>
                    <MenuItem eventKey={2.3} href="/" to="/">Příklad 26</MenuItem>
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
);

export default CustomNavbar;
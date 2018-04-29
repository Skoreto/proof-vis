import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import cssClasses from './CustomNavbar.css'

const CustomNavbar = (props) => (
    <Navbar className={cssClasses["main-nav"]} default collapseOnSelect >
        <Navbar.Header className={"navbar-header"}>
            <Navbar.Brand>

            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="/" to="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="/about" to="/about">
                    About
                </NavItem>
                <NavItem eventKey={3} href="/news" to="/news">
                    News
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default CustomNavbar;
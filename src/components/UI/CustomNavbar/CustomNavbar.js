import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight'
import faSyncAlt from '@fortawesome/fontawesome-free-solid/faSyncAlt'
import faBolt from '@fortawesome/fontawesome-free-solid/faBolt'
import faPaintBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush'

const CustomNavbar = () => (
    <Navbar className="main-nav" default collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">
                    <Image src="assets/image/logo.png" alt="Vizualizace důkazů"/>VIZUALIZACE DŮKAZŮ
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavDropdown eventKey={1} title={<span><FontAwesomeIcon icon={faArrowRight} /> Důkazy přímo</span>} id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={1.1} componentClass={Link} href="/priklad20svg" to="/priklad20svg">
                        Příklad 20 (SVG)
                    </MenuItem>
                    <MenuItem eventKey={1.2} componentClass={Link} href="/priklad20vis" to="/priklad20vis">
                        Příklad 20
                    </MenuItem>
                    <MenuItem eventKey={1.3}>Příklad 23</MenuItem>
                    <MenuItem eventKey={1.4} componentClass={Link} href="/priklad26" to="/priklad26">Příklad 26 (v1)</MenuItem>
                    <MenuItem eventKey={1.5} componentClass={Link} href="/priklad26v2" to="/priklad26v2">Příklad 26 (v2)</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={2} title={<span><FontAwesomeIcon icon={faSyncAlt} /> Důkazy nepřímo</span>} id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={2.1}>Příklad 21</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title={<span><FontAwesomeIcon icon={faBolt} /> Důkazy sporem</span>} id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={3.1}>Příklad 19</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={4} title="Ostatní" id="basic-nav-dropdown" className={"nav-item"}>
                    <MenuItem eventKey={4.1} componentClass={Link} href="/priklad17a" to="/priklad17a">
                        Příklad 17 a) (v1)
                    </MenuItem>
                    {/* <MenuItem eventKey={4.2} componentClass={Link} href="/priklad17av2" to="/priklad17av2">
                        Příklad 17 a) (v2)
                    </MenuItem> */}
                </NavDropdown>
                <NavItem eventKey={5} componentClass={Link} href="/platno" to="/platno" className={"nav-item"}>
                    {<span><FontAwesomeIcon icon={faPaintBrush} /> Plátno</span>}
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default CustomNavbar;
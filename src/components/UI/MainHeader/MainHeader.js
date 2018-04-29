import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './MainHeader.css'

const MainHeader = () => (
    <header className={"header"}>
        <div className="header-main container">
            <Col sm={12} className="logo">
                <a href="">
                    <Image src="assets/image/logo.png" alt="Vizualizace důkazů"/>
                </a>
            </Col>
        </div>
    </header>
);

export default MainHeader;
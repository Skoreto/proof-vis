import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const MainHeader = () => (
    <Row className="show-grid header">
        <div className="header-main container">
            <Col sm={12} className="logo">
                <a href="">
                    <Image src="assets/image/logo.png" alt="Vizualizace důkazů"/>
                </a>
            </Col>
        </div>
    </Row>
);

export default MainHeader;
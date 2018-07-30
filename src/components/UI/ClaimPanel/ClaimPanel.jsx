import React from 'react';
import { Row, Col } from 'react-bootstrap';
import M from 'react-mathjax2';

const ClaimPanel = (props) => (
  <Row className="page-row">
    <Col xs={12} md={12} lg={12}>
      <M.Context input="tex">
        <div className="bg-info" id="definition">
          {props.children}
        </div>
      </M.Context>
    </Col>
  </Row>
);

export default ClaimPanel;

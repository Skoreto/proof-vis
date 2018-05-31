import React from 'react';
import { Row } from 'react-bootstrap';
import './PageHeading.css';

const PageHeading = (props) => (
  <Row>
    <header className="page-heading clearfix">
      <h1 className="heading-title pull-left">{props.headingTitle}</h1>
      <div className="breadcrumbs pull-right">
        <ul className="breadcrumbs-list">
          <li className="breadcrumbs-label">Nacházíte se zde:</li>
          <li className="current">{props.breadcrumbsCurrent}</li>
        </ul>
      </div>
    </header>
  </Row>
);

export default PageHeading;

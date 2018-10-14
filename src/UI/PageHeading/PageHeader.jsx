import React from 'react';
import { Row } from 'react-bootstrap';
import './PageHeader.css';

const PageHeading = (props) => (
  <Row>
    <header className="page-heading clearfix">
      <h1 className="heading-title">{props.headingTitle}</h1>
      {
        props.breadcrumbsCurrent && 
          <div className="breadcrumbs pull-right">
            <ul className="breadcrumbs-list">
              <li className="breadcrumbs-label">
                {
                  !props.isCzechChosen ? 'You are located at the section:' : 'Nacházíte se v sekci:'
                }
              </li>
              <li className="current">{props.breadcrumbsCurrent}</li>
            </ul>
          </div>
      }
    </header>
  </Row>
);

export default PageHeading;

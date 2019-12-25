import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.scss';

const button = (props) => (
  <Button
    className={"button " + props.addClass}
    onClick={props.clicked}
    active={props.active}
    disabled={props.disabled}
  >
    {props.children}
  </Button>
);

export default button;

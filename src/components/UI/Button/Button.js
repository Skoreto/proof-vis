import React from 'react';
import { Button } from 'react-bootstrap';
import './Button.css';

const button = (props) => (
    <Button
        className={"button"}
        onClick={props.clicked}>{props.children}</Button>
);

export default button;
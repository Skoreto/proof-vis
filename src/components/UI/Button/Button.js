import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../App.css';
import './Button.css';

const button = (props) => (
    <Button
        className={"Button btn"}
        onClick={props.clicked}>{props.children}</Button>
);

export default button;
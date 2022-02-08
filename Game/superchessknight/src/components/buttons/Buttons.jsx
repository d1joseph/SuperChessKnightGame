import React, { useState } from 'react';
import './buttons.css';

// passing functions as parameters to child component
const testFunction = (props) => {
    console.log(props);
};

const Button = ({id, message, buttonText }) => {
    
    return (
        <button className='btn' id={id} onClick={() => testFunction(message) } >{buttonText}</button>
    );
};

export default Button;
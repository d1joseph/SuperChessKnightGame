import React, { useState } from 'react';
import './buttons.css';

// passing functions as parameters to child component
const testFunction = (message) => {
    console.log(message);
};

const Button = ({id, message, buttonText }) => {
    
    return (
        <button className='btn' id={id} onClick={() => testFunction(message) } >{buttonText}</button>
    );
};

export default Button;
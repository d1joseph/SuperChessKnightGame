import React, { useState } from 'react';
import './prompter.css';

const Prompter = () => {
    return (
        <div className='game__prompter section__padding'>
            <h1 className='lesson'>Lesson 1: Moving the Knight</h1>
            <p className='prompt'>Click a place on the board to move the knight</p>
        </div>
    )
}

export default Prompter;
import React from 'react';
import github from '../../assets/github.svg';
import './footer.css'

const Footer = () => {
    return (
        <div className='game__footer section__padding'>
            <a href="https://github.com/d1joseph/SuperChessKnightGame" target="_"><img src={ github } alt="Github icon" /></a>
            <p>made by Dhiv Joseph</p>
        </div>
    );
};

export default Footer;
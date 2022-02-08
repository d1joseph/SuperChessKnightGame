import React from "react";
import './controls.css';
import Buttons from '../../components/buttons/Buttons';

const Controls = () => {
    return (
        <div className="game__controls">
            <Buttons id={'start-game'} onClick={'Hello'} buttonText={'Start Game'} />
            <Buttons id={'help'} buttonText={'Help'}/>
        </div>
    )
}

export default Controls;
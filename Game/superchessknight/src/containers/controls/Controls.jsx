import React from "react";
import './controls.css';
import Buttons from '../../components/buttons/Buttons';

const Controls = () => {
    return (
        <div className="game__controls">
            <Buttons id={'begin'} onClick={'Hello'} buttonText={'Begin'} />
            <Buttons id={'help'} message={"Clicked."} buttonText={'Help'}/>
        </div>
    )
}

export default Controls;
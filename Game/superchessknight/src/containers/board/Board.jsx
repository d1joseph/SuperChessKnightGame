import React from 'react';
import './board.css';
import { Chessboard } from 'react-chessboard';

const Board = () => {
    
    return (
        <div className='game__board'>
            <Chessboard id="board2" boardWidth={325}/>
        </div>
    );
};

export default Board;
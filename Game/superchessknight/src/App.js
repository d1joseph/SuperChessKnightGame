import React from 'react';
import { Navbar, Prompter, Button } from './components';
import { Board, Controls, Footer } from './containers';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Prompter />
            <Board />
            <Controls />
            <p className='hint'>Not sure where to move? Click <strong>Help</strong> for a hint</p>
            <Footer />
        </div>
    );
};

export default App;
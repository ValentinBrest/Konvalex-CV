import React from 'react';
import './App.css';
import { LeftSide } from './components/LeftSide/LeftSide';
import { RightSide } from './components/RightSide/RightSide';

function App() {
    return (
        <main className="main">
            <LeftSide />
            <RightSide />
        </main>
    );
}

export default App;

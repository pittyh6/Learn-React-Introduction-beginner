//Prayer.js
import React from 'react';

function Player(props) {
    return (
        <>
            <h1>{props.songName}</h1>
            <h2>{props.artist}</h2>
        </>
    );
}

export default Player;

//app.js
import React from 'react';
import Player from './Player';

function App() {
    return (
        <Player songName="Happy ending" artist="Avril" />
    );
}

export default App;
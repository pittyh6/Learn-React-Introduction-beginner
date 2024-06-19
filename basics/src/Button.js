import React from 'react';

function SubmitButton() {
    function handleClick() {
        alert('Submission Successful.');
    }
    return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;




//app.js
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button'

function App() {
    return <Button />;
}

export default App;


//button.js
import React from 'react';

function Button(props) {
    return (
        <button onClick={props.talk}>
            Click me!
        </button>
    );
}

export default Button;

//button.js
import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick}>
            Click me!
        </button>
    );
}

export default Button;
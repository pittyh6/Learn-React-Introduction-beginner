//talker.js
import React from 'react';
import Button from './Button';



function Talker() {
    function talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }
    return <Button onClick={talk} />;
}

export default Talker;



//example.js
import React from 'react';

function Example() {
    function handleEvent() {
        alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
    }
    return (
        <h1 onClick={handleEvent}>
            Hello world
        </h1>
    );
}

//talker.js
import React from 'react';
import Button from './Button';

function Talker() {
    function talk() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
            speech += 'blah ';
        }
        alert(speech);
    }
    return <Button talk={talk} />;
}

export default Talker;
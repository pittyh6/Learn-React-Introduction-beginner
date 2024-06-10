import React from 'react';
//RedPanda.js
const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
};

function RedPanda() {
    return (
        <div>
            <h1>Cute Red Panda</h1>
            <img
                src={redPanda.src}
                alt={redPanda.alt}
                width={redPanda.width} />
        </div>
    );
}

export default RedPanda;



//----------------------------------------------------------------
//Ownl.js
import React from 'react'

const owl = {
    title: 'Excellent Owl',
    src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//Define function component here:
function Owl() {
    return (
        <div>
            <h1>{owl.title}</h1>
            <img
                src={owl.src}
                alt={owl.title}
            />
        </div>
    );
}


export default Owl;



//----------------------------------------------------------------
//app.js
const redPanda = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
    alt: 'Red Panda',
    width: '200px'
};

function RedPanda() {
    return (
        <div>
            <h1>Cute Red Panda</h1>
            <img
                src={redPanda.src}
                alt={redPanda.alt}
                width={redPanda.width} />
        </div>
    );
}

export default RedPanda;
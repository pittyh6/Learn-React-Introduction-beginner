import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person, i) =>
    // expression goes here:
    <li>{person}</li>;
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>)
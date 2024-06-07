import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const h1 = <h1>Hello world</h1>;
  const myArticle = <article>Hello world</article>;
  const p1 = <p id='large'>foo</p>;
  const p2 = <p id='small'>bar</p>;
  const myDiv = (
    <div>
      <h1>Hello world</h1>
    </div>
  );
  const blog = (
    <div>
      <img src="pics/192940u73.jpg" />
      <h1>
        Welcome to Dan's Blog!
      </h1>
      <article>
        Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
      </article>
    </div>
  );

  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(<h1>Hello world</h1>);

  //render variable
  const container = document.getElementById('app');
  const root = createRoot(container);
  const myList = (
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
  root.render(myList);
  //------------------------
  //advanced JSX class x className
  const myDiv = <div className="big">I AM A BIG DIV</div>
  root.render(myDiv)

  //self closing tag
  const profile = (
    <div>
      <h1>John Smith</h1>
      <img src="images/john.png" />
      <article>
        My name is John Smith.
        <br />
        I am a software developer.
        <br />
        I specialize in creating React applications.
      </article>
    </div>
  );
  //curly braces
  root.render(<h1>{2 + 3}</h1>);
  //pi
  const math = <h1>2 + 3  = {2 + 3}</h1>

  // variable in JSX
  const root = createRoot(container);
  const theBestString = 'This text was accessed through a javascript variable';
  root.render(<h1>{theBestString}</h1>);

  //variable attributes in jsx
  const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
  const gooseImg = (
    <img
      src={goose}
    />
  )
  root.render(gooseImg);

  //Event Listener 
  function makeDoggy(e) {
    // Call this extremely useful function on an <img>.
    // The <img> will become a picture of a doggy.
    e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
    e.target.setAttribute('alt', 'doggy');
  }
  const kitty = (
    <img
      src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
      alt="kitty" onClick={makeDoggy} />
  );
  root.render(kitty);

  // JSX Conditionals: If Statements That Do Work
  function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }
  const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  };
  let img;
  if (coinToss() == 'heads') {
    img = <img src={pics.kitty} />
  } else {
    img = <img src={pics.doggy} />
  }
  root.render(img)

  //JSX Conditionals: The Ternary Operator
  function coinToss() {
    // Randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
  }
  const pics = {
    kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
    doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
  };
  const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;
  root.render(img);

  // -------------------------
  return (
    <div className="app">Hi</div>
  );
}

export default App;
pics[x ? y : z]
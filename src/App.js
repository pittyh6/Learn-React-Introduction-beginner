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
  return (
    <div className="app">Hi</div>
  );
}

export default App;

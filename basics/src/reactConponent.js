//------------------------------------------------------------------
//App.js
import React from 'react';

function MyComponent() {
    return <h1>Hello, this is a function component body.</h1>;
}
export default MyComponent






//------------------------------------------------------------------
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './App';

ReactDOM.createRoot(document.getElementById('app')).render(<MyComponent />);



//------------------------------------------------------------------
//index.html
< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <main id="app">
            </main>
            <script src="https://content.codecademy.com/courses/React/react-18-course-bundle.min.js"></script>
            <script src="/index.compiled.js"></script>
        </body>
    </html>



/** 
 * On line 1 of App.js and index.js, import React from 'react' creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement().
On line 2 of index.js import ReactDOM from 'react-dom/client' creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.createRoot().
On line 3 of App.js, by writing a JavaScript function, a function component was defined. We can’t see this component quite yet, as it’s more of a factory that produces instances of itself when used. If we want to see it, we need to render it into the DOM.
Whenever you create a function component, you need to give that function component a name. That name should be written in Pascal case like this: UpperCamelCase.
Something that we haven’t talked about yet is the body of your function component: the pair of curly braces after the function definition and all of the code between those curly braces.

Like all JavaScript functions, this one needs a body. The body will act as a set of instructions, explaining to your function component how it should build a React component.

Here’s what your function body would look like on its own, without the rest of the function declaration syntax. Find it in App.js:

return <h1>Hello, this is a function component body.</h1>;

That doesn’t look like a set of instructions explaining how to build a React component! Yet that’s exactly what it is.
*/

/**
 Before you go, here’s a recap:

React applications are made up of components.
Components are responsible for rendering pieces of the user interface.
To create components and render them, react and reactDOM must be imported.
React components can be defined with Javascript functions to make function components.
Function component names must start with a capitalized letter, and Pascal case is the adopted naming convention.
Function components must return some React elements in JSX syntax.
React components can be exported and imported from file to file.
A React component can be used by calling the component name in an HTML-like self-closing tag syntax.
Rendering a React component requires using .createRoot() to specify a root container and calling the .render() method on it. */
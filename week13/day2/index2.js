// Exercise 2
import React from "react";
import ReactDOM from "react-dom";

// Display a "Hello World!" message on the page.
const helloWorldElement = <h1>Hello World!</h1>;
ReactDOM.render(helloWorldElement, document.getElementById("root1"));

// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
const myelement = <h1>I Love JSX!</h1>;
ReactDOM.render(myelement, document.getElementById("root2"));

// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"
const sum = 5 + 5;
const jsxMessage = <p>React is {sum} times better with JSX</p>;
ReactDOM.render(jsxMessage, document.getElementById("root3"));

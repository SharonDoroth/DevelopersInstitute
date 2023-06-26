import React from "react";
import "./Exercise4.css"; // Import the CSS file

const Exercise4 = () => {
  return (
    <div>
      <h1 style={style_header}>Exercise 4</h1>
      <p className="para">Lorem ipsum</p>
      <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">
        From Wikipedia, the free encyclopedia
      </a>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/86/Lorem_ipsum_design.svg"
        alt="Example Image"
        width="200"
        height="200"
      />
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
  );
};

export default Exercise4;

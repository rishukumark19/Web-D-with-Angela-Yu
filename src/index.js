import React from "react";
import ReactDOM from "react-dom/client";

const fname = "Rishu";
const lname = "kumar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>pizza</li>
      <li>burger</li>
      <li>pasta</li>
      <li>{fname + " " + lname}</li>
      <li>
        {fname} {lname}
      </li>
      <li>{Math.floor(Math.random() * 10)}</li>
      <li>hello</li>
    </ul>
  </>
);

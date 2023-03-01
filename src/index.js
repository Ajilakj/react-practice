import React from "react";
import ReactDom from "react-dom";
const first = "Ajila";
const last = "Johnkutty";
const food = "My Favourite foods";
const no = 5;
ReactDom.render(
  <>
    <h1>
      Hi I am {first} {last}
    </h1>
    <h2>{food}</h2>
    <ul>
      <li>ice cream</li>
      <li>Chocolate</li>
      <li>Cake</li>
    </ul>
    <p>
      My lucky number is {no} or {5 + 1} or {4 * 4}
    </p>
    <p>created by {first} </p>
    <p>copy right {new Date().getFullYear()}</p>
  </>,
  document.getElementById("root")
);

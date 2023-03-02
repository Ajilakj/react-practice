import React from "react";
import ReactDom from "react-dom";

import "./styles.css";
const first = "Ajila";
const last = "Johnkutty";
const food = "My Favourite foods";
const no = 5;
const img = "https://picsum.photos/200";

ReactDom.render(
  <>
    <h1 className="heading">
      Hi I am {first} {last}
    </h1>
    <h2 contentEditable="true">{food}</h2>
    <img src={img + "?grayscale"} />
    <ul className="list">
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
// import React from 'react';
// import ReactDom from 'react-dom';
// const root = document.getElementById("root");
// const time = new Date(2023,1,2,23).getHours();
// let msg='';
// let customColor={
//   color:''
// }

// if(time<11){
//   msg="Good Morning";
//   customColor.color="red";
// }
// else if(time<18){
//   msg="Good Afternoon";
//   customColor.color="green";
// }
// else{
//   msg="Good Night";
//   customColor.color="blue";
// }
// ReactDom.render(
//   <h1 style={customColor}>{msg}</h1>
// ,root);

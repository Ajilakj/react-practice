import React from "react";

function Greetings() {
  const root = document.getElementById("root");
  const time = new Date(2023, 1, 2, 23).getHours();
  let msg = "";
  let customColor = {
    color: "",
  };

  if (time < 11) {
    msg = "Good Morning";
    customColor.color = "red";
  } else if (time < 18) {
    msg = "Good Afternoon";
    customColor.color = "green";
  } else {
    msg = "Good Night";
    customColor.color = "blue";
  }
  return (<h1 style={customColor}>{msg}</h1>), root;
}

export default Greetings;

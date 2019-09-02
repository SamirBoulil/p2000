import React from "react";
import ReactDOM from "react-dom";
import P2000 from "./P2000";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<P2000 />, div);
  ReactDOM.unmountComponentAtNode(div);
});

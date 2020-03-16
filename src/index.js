import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import RoutingInformation from "./ui/RoutingInformation";
import "./index.css";

const App = () => {
  return (
    <Router>
      <RoutingInformation />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

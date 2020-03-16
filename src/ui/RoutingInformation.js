import React from "react";
import "./RoutingInformation.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import CustomHeader from "./components/customHeader";

const RoutingInformation = () => {
  return (
    <div className="outer">
      <div className="inner">
        <CustomHeader />

        <div className="under-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:postTitle" component={Post} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default RoutingInformation;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sites from "./pages/Sites";
import Carousel from "./pages/Carousel";
import FunctionalCarousel from "./pages/FunctionalCarousel";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Sites} />
    <Route exact path="/carousel/:site" component={FunctionalCarousel} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./components/Main";

import "./styles/base.css";
import "./styles/modules/nav.css";
import "./styles/modules/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;

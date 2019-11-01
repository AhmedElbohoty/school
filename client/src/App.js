import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Nav from "./components/Nav";
import Main from "./components/Main";
import ControlPanel from "./components/control_panel/ControlPanel";
import ClassScheduleModel from "./components/class_schedule/models/ClassScheduleModel";

import "./styles/base.css";
import "./styles/status.css";
import "./styles/modules/nav.css";
import "./styles/modules/main.css";
import "./styles/modules/control.css";
import "./styles/modules/filter.css";
import "./styles/modules/modal.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Main} />
          <Route exact path="/control-panel" component={ControlPanel} />
          <Route exact path="/classes" component={ClassScheduleModel} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

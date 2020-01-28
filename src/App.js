import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/rvsp" component={Content} />
          <Route path="/" render={() => <Content wedding />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

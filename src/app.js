import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeWrapper from "components/home/HomeWrapper";
import Nav from "components/Nav";
import DetailWrapper from "components/detail/DetailWrapper";

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={HomeWrapper} />
        <Route path="/detail" component={DetailWrapper} />
      </Switch>
    </Router>
  );
}

export default App;

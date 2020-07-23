import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home/home";
import Game from "./ttt/ttt";
import clear from "./clear/clear";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/ttt" component={Game} />
            <Route path="/clear" component={clear} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

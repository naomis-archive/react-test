import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home/home";
import TTTGame from "./ttt/ttt";
import error from "./error/error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact/>
            <Route path={process.env.PUBLIC_URL + "/ttt"} component={TTTGame} />
            <Route component={error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

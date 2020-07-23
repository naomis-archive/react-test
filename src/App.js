import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home/home";
import Game from "./ttt/ttt";
import error from "./error/error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={process.env.PUBLIC_URL + "/"} component={Home} exact/>
            <Route path={process.env.PUBLIC_URL + "/ttt"} component={Game} />
            <Route component={error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

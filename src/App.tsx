import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Menu,
  MenuItem,
  PanelBar,
  PanelBarItem
} from "@progress/kendo-react-layout";
import { Navbar } from "./Components/Integration";
import { TeamsGrid } from "./Pages";

import "./styles/index.sass";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12 p-5">
              <Switch>
                <Route exact path="/webvelit/grid" component={TeamsGrid} />
              </Switch>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;

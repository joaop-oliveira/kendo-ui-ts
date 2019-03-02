import React, { Component } from "react";
import { NavBar } from "./Components/Integration";
import "./styles/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3">
            <div className="sidebar-sticky">
              <NavBar />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;

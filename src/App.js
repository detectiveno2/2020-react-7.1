import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TabMenu from "./components/TabMenu.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabMenu />
      </div>
    );
  }
}

export default App;

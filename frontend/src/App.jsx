import React from "react";
import Home from "@pages/Home";
import Birthdayselector from "@components/Birthdayselector";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: "capricorn",
    };
  }

  render() {
    return (
      <div className="App">
        SSTT
        <Home />
        SSTT
        <Birthdayselector />
        Billy Talent
      </div>
    );
  }
}

export default App;

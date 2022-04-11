import React from "react";
import Home from "@pages/Home";
import Birthdayselector from "@components/Birthdayselector";
import DailyHoroscope from "@components/DailyHoroscope";
import Celebritylookup from "@components/Celebritylookup";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: "capricorn",
      showDaily: false,
      signSelector: "Birthdayselector",
    };

    this.setSignSelector = this.setSignSelector.bind(this);
    this.setSign = this.setSign.bind(this);
    this.setShowDaily = this.setShowDaily.bind(this);
  }

  setSignSelector(component) {
    this.setState({
      signSelector: component,
    });
  }

  setSign(sign) {
    this.setState({
      sign,
    });
  }

  setShowDaily() {
    const { showDaily } = this.state;
    this.setState({
      showDaily: !showDaily,
    });
  }

  render() {
    const { sign, showDaily, signSelector } = this.state;
    return (
      <div className="App">
        <Home />

        {!showDaily && signSelector === "Birthdayselector" && (
          <button
            type="button"
            onClick={() => this.setSignSelector("Celebritylookup")}
          >
            Ask for a celebritys astro sign
          </button>
        )}

        {!showDaily && signSelector === "Celebritylookup" && (
          <Celebritylookup sign={sign} setSign={this.setSign} />
        )}

        {!showDaily && signSelector === "Birthdayselector" && (
          <Birthdayselector sign={sign} setSign={this.setSign} />
        )}

        {!showDaily && sign && (
          <button type="button" onClick={this.setShowDaily}>
            Go to Daily Horoscope
          </button>
        )}

        {showDaily && (
          <DailyHoroscope sign={sign} setShowDaily={this.setShowDaily} />
        )}
      </div>
    );
  }
}

export default App;

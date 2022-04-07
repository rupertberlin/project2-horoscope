import React from "react";
import Home from "@pages/Home";
import Birthdayselector from "@components/Birthdayselector";
import DailyHoroscope from "@components/DailyHoroscope";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: "capricorn",
      showDaily: false,
    };

    this.setSign = this.setSign.bind(this);
    this.setShowDaily = this.setShowDaily.bind(this);
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
    const { sign, showDaily } = this.state;
    return (
      <div className="App">
        <Home />

        {!showDaily && <Birthdayselector sign={sign} setSign={this.setSign} />}

        {!showDaily && (
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

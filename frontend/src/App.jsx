import React from "react";
import Home from "@pages/Home";
import Birthdayselector from "@components/Birthdayselector";
import DailyHoroscope from "@components/DailyHoroscope";
import Celebritylookup from "@components/Celebritylookup";
import ParentListOFSigns from "@components/ParentListOFSigns";
import { Route, Routes } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: "capricorn",
    };

    this.setSign = this.setSign.bind(this);
  }

  setSign(sign) {
    this.setState({
      sign,
    });
  }

  render() {
    const { sign } = this.state;

    return (
      <div className="App">
        <Home />

        <Routes>
          <Route
            exact
            path="/"
            element={<Birthdayselector sign={sign} setSign={this.setSign} />}
          />
          <Route
            path="/celebrity-lookup/"
            element={<Celebritylookup sign={sign} setSign={this.setSign} />}
          />
          <Route
            path="/daily-horoscope/:date/:sign"
            element={<DailyHoroscope />}
          />
          <Route
            path="/information/zodiac-signs/list/"
            element={<ParentListOFSigns />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;

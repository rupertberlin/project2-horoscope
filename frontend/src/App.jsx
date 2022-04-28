import React from "react";
import Home from "@pages/Home";
import Birthdayselector from "@components/Birthdayselector";
import DailyHoroscope from "@components/DailyHoroscope";
import Celebritylookup from "@components/Celebritylookup";
import NavBar from "@components/NavBar";
import DetailSign from "@components/DetailSign";
import Advice from "@components/Advice";
import Person from "@components/Person";
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
        <NavBar />
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
            path="/zodiac-signs/information/:sign"
            element={<DetailSign />}
          />
          <Route path="/advice/" element={<Advice />} />
          <Route path="/person/" element={<Person />} />
        </Routes>
      </div>
    );
  }
}

export default App;

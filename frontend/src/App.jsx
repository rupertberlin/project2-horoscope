import React from "react";
import Home from "@pages/Home";
import Birthdayselector from "@components/Birthdayselector";
import DailyHoroscope from "@components/DailyHoroscope";
import Celebritylookup from "@components/Celebritylookup";
import NavBar from "@components/NavBar";
import DetailSign from "@components/DetailSign";
/* import Advice from "@components/Advice";
import Person from "@components/Person"; */
import Random from "@components/Random";
import { Route, Routes } from "react-router-dom";
import SignList from "@components/SignList";

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
          <Route path="/zodiac-signs/information/" element={<SignList />} />
          <Route
            path="/zodiac-signs/information/:sign"
            element={<DetailSign />}
          />
          <Route path="/random-advice" element={<Random />} />
        </Routes>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source
            src="../../src/assets/video/production ID_4911644.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default App;

import React from "react";
import "@components/Birthdayselector.css";
import propTypes from "prop-types";
import Birthdaysign from "./Birthdaysign";

class Birthdayselector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      month: "January",
    };
    this.monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.monthPlus = this.monthPlus.bind(this);
    this.monthMinus = this.monthMinus.bind(this);
    this.dayPlus = this.dayPlus.bind(this);
    this.dayMinus = this.dayMinus.bind(this);
  }

  monthPlus(actM) {
    const actIndex = this.monthArr.indexOf(actM.month);
    if (actIndex < 11) {
      this.setState({
        month: this.monthArr[actIndex + 1],
      });
    }
  }

  monthMinus(actM) {
    if (actM.month !== "January") {
      const actIndex = this.monthArr.indexOf(actM.month);
      this.setState({
        month: this.monthArr[actIndex - 1],
      });
    }
  }

  dayPlus() {
    const { day, month } = this.state;

    if (Date.parse(`${month} ${day + 1}, 2000`)) {
      this.setState({
        day: day + 1,
      });
    }
  }

  dayMinus() {
    const { day } = this.state;
    if (day !== 1) {
      this.setState({
        day: day - 1,
      });
    }
  }

  render() {
    const { day, month } = this.state;
    const { sign, setSign } = this.props;

    return (
      <div>
        <h2>Your Birthday</h2>
        <div className="birthday-selector">
          <span className="day-selector">
            <div
              className="day-minus plus-minus"
              onClick={this.dayMinus}
              onKeyDown={this.dayMinus}
              role="button"
              tabIndex={0}
            >
              -
            </div>
            <div className="day-value value">{day}</div>
            <div
              className="day-plus plus-minus"
              onClick={this.dayPlus}
              onKeyDown={this.dayPlus}
              role="button"
              tabIndex={0}
            >
              +
            </div>
          </span>
          <span className="month-selector">
            <div
              className="month-minus plus-minus"
              onClick={() => this.monthMinus({ month })}
              onKeyDown={() => this.monthMinus({ month })}
              role="button"
              tabIndex={0}
            >
              -
            </div>
            <div className="month-value value">{month}</div>
            <div
              className="month-plus plus-minus"
              onClick={() => this.monthPlus({ month })}
              onKeyDown={() => this.monthPlus({ month })}
              role="button"
              tabIndex={0}
            >
              +
            </div>
          </span>
        </div>
        <div>
          <Birthdaysign sign={sign} setSign={setSign} month={month} day={day} />
        </div>
      </div>
    );
  }
}

Birthdayselector.propTypes = {
  sign: propTypes.string.isRequired,
  setSign: propTypes.func.isRequired,
};

export default Birthdayselector;

import React from "react";
import "@components/Birthdayselector.css";

class Birthdayselector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: 1,
      month: "january",
    };
    this.monthArr = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "november",
      "december",
    ];

    this.monthPlus = this.monthPlus.bind(this);
    this.monthMinus = this.monthMinus.bind(this);
  }

  monthPlus(actM) {
    const actIndex = this.monthArr.indexOf(actM.month);
    if (actIndex < 12) {
      this.setState({
        month: this.monthArr[actIndex + 1],
      });
    }
  }

  monthMinus(actM) {
    if (actM.month !== "january") {
      const actIndex = this.monthArr.indexOf(actM.month);
      this.setState({
        month: this.monthArr[actIndex - 1],
      });
    }
  }

  render() {
    const { day, month } = this.state;

    return (
      <div>
        <h2>Your Birthday</h2>
        <div className="birthday-selector">
          <span className="day-selector">
            <div className="day-minus plus-minus">-</div>
            <div className="selector-value">{day}</div>
            <div className="day-plus plus-minus">+</div>
          </span>
          <span className="month-selector">
            <div
              role="button"
              tabIndex={0}
              className="month-minus plus-minus"
              onClick={() => this.monthMinus({ month })}
              onKeyDown={() => this.monthMinus({ month })}
            >
              -
            </div>
            <div className="month-value">{month}</div>
            <div
              role="button"
              tabIndex={-1}
              className="month-plus plus-minus"
              onClick={() => this.monthPlus({ month })}
              onKeyDown={() => this.monthPlus({ month })}
            >
              +
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Birthdayselector;

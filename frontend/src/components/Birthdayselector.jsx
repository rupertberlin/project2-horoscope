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
    this.dayPlus = this.dayPlus.bind(this);
    this.dayMinus = this.dayMinus.bind(this);
  }

  monthPlus(actM) {
    const actIndex = this.monthArr.indexOf(actM.month);
    if (actIndex < 10) {
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

  dayPlus(prevDay) {
    const { day, month } = this.state;
    if (Date.parse(`${month} ${day}, 2000`)) {
      this.setState({
        day: prevDay + 1,
      });
    } else {
      this.dayMinus(day);
    }
  }

  dayMinus(prevDay) {
    if (prevDay !== 1) {
      this.setState({
        day: prevDay - 1,
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
            <div
              className="day-minus plus-minus"
              onClick={() => this.dayMinus({ day })}
              onKeyDown={() => this.dayMinus({ day })}
              role="button"
              tabIndex={-3}
            >
              -
            </div>
            <div className="day-value value">{day}</div>
            <div
              className="day-plus plus-minus"
              onClick={() => this.dayMinus({ day })}
              onKeyDown={() => this.dayMinus({ day })}
              role="button"
              tabIndex={-4}
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
              tabIndex={-1}
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
